import React, { useEffect, useState, useCallback } from 'react';
import { Button, Radio, RadioGroup, FormControl, FormControlLabel, Typography } from '@mui/material';
import './Quiz.css';

function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);
    const [previousResults, setPreviousResults] = useState([]);
    const [timeLeft, setTimeLeft] = useState(15);

    const userId = localStorage.getItem("userId");

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/auth/admin/quizzes');
                if (response.ok) {
                    const data = await response.json();
                    setQuestions(data);
                }
            } catch (error) {
                console.error('Error fetching quiz questions:', error);
            }
        };

        const fetchPreviousResults = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/auth/admin/results/${userId}`);
                if (response.ok) {
                    const data = await response.json();
                    setPreviousResults(data);
                }
            } catch (error) {
                console.error('Error fetching previous quiz results:', error);
            }
        };

        if (userId) {
            fetchQuestions();
            fetchPreviousResults();
        }
    }, [userId]);

    const handleSubmitQuiz = useCallback(async () => {
        let calculatedScore = 0;
        questions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            const correctAnswer = question.correctAnswer;
            if (
                (userAnswer === "optionA" && correctAnswer === "A") ||
                (userAnswer === "optionB" && correctAnswer === "B") ||
                (userAnswer === "optionC" && correctAnswer === "C") ||
                (userAnswer === "optionD" && correctAnswer === "D")
            ) {
                calculatedScore++;
            }
        });

        setScore(calculatedScore);
        setShowResults(true);

        const resultData = {
            userId: userId,
            score: calculatedScore,
            totalQuestions: questions.length,
            date: new Date()
        };

        try {
            await fetch('http://localhost:8080/api/auth/admin/results', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(resultData)
            });
        } catch (error) {
            console.error('Error saving quiz result:', error);
        }
    }, [questions, userAnswers, userId]);

    useEffect(() => {
        if (timeLeft === 0) {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setTimeLeft(15);
            } else {
                handleSubmitQuiz();
            }
        }

        const timerId = setTimeout(() => {
            if (timeLeft > 0) setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearTimeout(timerId);
    }, [timeLeft, currentQuestionIndex, questions.length, handleSubmitQuiz]);

    const handleAnswerChange = (event) => {
        setUserAnswers({
            ...userAnswers,
            [currentQuestionIndex]: event.target.value
        });
    };

    const handleRestartQuiz = () => {
        setUserAnswers({});
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowResults(false);
        setTimeLeft(15);
    };

    const getTimerClass = () => {
        if (timeLeft <= 5) return 'time-critical';
        if (timeLeft <= 10) return 'time-warning';
        return '';
    };

    return (
        <div className="quiz-container">
            {showResults ? (
                <div>
                    <Typography variant="h4" className="result-title">Quiz Results</Typography>
                    <Typography variant="h5" className="result-score">Your Score: {score} out of {questions.length}</Typography>
                    <Button variant="contained" onClick={handleRestartQuiz} className="restart-button">Retake Quiz</Button>
                    
                    <Typography variant="h4" className="previous-results-title">Previous Results</Typography>
                    <div className="previous-results">
                        {previousResults.length > 0 ? (
                            previousResults.map(result => (
                                <Typography key={result.id} variant="body1" className="previous-result-item">
                                    Score: {result.score}/{result.totalQuestions} on {new Date(result.date).toLocaleString()}
                                </Typography>
                            ))
                        ) : (
                            <Typography variant="body1" className="no-results">No previous results found.</Typography>
                        )}
                    </div>
                </div>
            ) : (
                <div>
                    <Typography variant="h6" className={`timer ${getTimerClass()}`}>Time Left: {timeLeft} seconds</Typography>
                    {questions[currentQuestionIndex] ? (
                        <div>
                            <Typography variant="h5" className="question-number">Question {currentQuestionIndex + 1}:</Typography>
                            <Typography variant="h6" className="question-text">{questions[currentQuestionIndex].question}</Typography>
                            <FormControl component="fieldset">
                                <RadioGroup value={userAnswers[currentQuestionIndex] || ''} onChange={handleAnswerChange} className="radio-group">
                                    <FormControlLabel value="optionA" control={<Radio />} label={questions[currentQuestionIndex].optionA} />
                                    <FormControlLabel value="optionB" control={<Radio />} label={questions[currentQuestionIndex].optionB} />
                                    <FormControlLabel value="optionC" control={<Radio />} label={questions[currentQuestionIndex].optionC} />
                                    <FormControlLabel value="optionD" control={<Radio />} label={questions[currentQuestionIndex].optionD} />
                                </RadioGroup>
                            </FormControl>
                            <div>
                                {currentQuestionIndex < questions.length - 1 ? (
                                    <Button variant="contained" onClick={() => { setCurrentQuestionIndex(currentQuestionIndex + 1); setTimeLeft(15); }} className="next-button">Next</Button>
                                ) : (
                                    <Button variant="contained" onClick={handleSubmitQuiz} className="submit-button">Submit Quiz</Button>
                                )}
                            </div>
                        </div>
                    ) : (
                        <Typography>Loading...</Typography>
                    )}
                </div>
            )}
        </div>
    );
}

export default Quiz;
