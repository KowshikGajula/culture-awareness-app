import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Snackbar} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailSender from './EmailSender';
import './AdminDashboard.css';
import { Link } from 'react-router-dom';

function AdminDashboard() {
    const location = useLocation();
    const { username, password } = location.state || {};
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [newUser, setNewUser] = useState({ username: '', email: '', password: '' });
    const [editingUser, setEditingUser] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    // Quiz state management
    const [quizzes, setQuizzes] = useState([]);
    const [newQuiz, setNewQuiz] = useState({
        question: '', optionA: '', optionB: '', optionC: '', optionD: '', correctAnswer: ''
    });
    const [editingQuiz, setEditingQuiz] = useState(null);

    // State to control visibility of sections
    const [showUsers, setShowUsers] = useState(false);  // Start as false
    const [showQuizzes, setShowQuizzes] = useState(false); // Start as false
    const [showEmailSender, setShowEmailSender] = useState(false); // State to control EmailSender display



    // Fetch users function
    const fetchUsers = useCallback(async () => {
        if (!username || !password) {
            setError("Admin credentials not provided");
            return;
        }

        try {
            const response = await fetch(`https://indianculture-production.up.railway.app/api/auth/admin/users?username=${username}&password=${password}`);
            if (response.ok) {
                const data = await response.json();
                setUsers(data);
            } else {
                const errorText = await response.text();
                setError(errorText);
            }
        } catch (error) {
            setError('Error fetching users');
        }
    }, [username, password]);

    // Fetch quizzes function
    const fetchQuizzes = useCallback(async () => {
        try {
            const response = await fetch('https://indianculture-production.up.railway.app/api/auth/admin/quizzes');
            if (response.ok) {
                const data = await response.json();
                setQuizzes(data);
            }
        } catch (error) {
            console.error('Error fetching quizzes:', error);
        }
    }, []);

    useEffect(() => {
        fetchUsers();
        fetchQuizzes();
    }, [fetchUsers, fetchQuizzes]);

    // Create User
    const handleCreateUser = async () => {
        try {
            const response = await fetch(`https://indianculture-production.up.railway.app/api/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser),
            });
            if (response.ok) {
                setNewUser({ username: '', email: '', password: '' });
                setSuccessMessage('Successfully created new user');
                setSnackbarOpen(true);
                fetchUsers();
            } else {
                const errorText = await response.text();
                setError(errorText);
            }
        } catch (error) {
            setError('Error creating user');
        }
    };

    // Update User
    const handleUpdateUser = async (id) => {
        try {
            const response = await fetch(`https://indianculture-production.up.railway.app/api/auth/admin/users/${id}?username=${username}&password=${password}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...editingUser }),  // Password is not being sent now
            });
            if (response.ok) {
                setEditingUser(null);
                setSuccessMessage('Successfully updated user');
                setSnackbarOpen(true);
                fetchUsers();
            } else {
                const errorText = await response.text();
                setError(errorText);
            }
        } catch (error) {
            setError('Error updating user');
        }
    };

    // Delete User
    const handleDeleteUser = async (id) => {
        try {
            const response = await fetch(`https://indianculture-production.up.railway.app/api/auth/admin/users/${id}?username=${username}&password=${password}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setSuccessMessage('Successfully deleted user');
                setSnackbarOpen(true);
                fetchUsers();
            } else {
                const errorText = await response.text();
                setError(errorText);
            }
        } catch (error) {
            setError('Error deleting user');
        }
    };

    const handleCreateQuiz = async () => {
        try {
            const response = await fetch('https://indianculture-production.up.railway.app/api/auth/admin/quizzes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newQuiz)
            });

            if (response.ok) {
                setNewQuiz({ question: '', optionA: '', optionB: '', optionC: '', optionD: '', correctAnswer: '' });
                setSuccessMessage('Quiz created successfully');
                setSnackbarOpen(true);
                fetchQuizzes();
            } else {
                const errorText = await response.text();
                console.error('Failed to create quiz:', errorText); // Log error response
                setError(`Error: ${errorText}`);
            }
        } catch (error) {
            console.error('Error creating quiz:', error);
            setError('Error creating quiz');
        }
    };

    // Update Quiz
    const handleUpdateQuiz = async (id) => {
        try {
            const response = await fetch(`https://indianculture-production.up.railway.app/api/auth/admin/quizzes/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editingQuiz)
            });
            if (response.ok) {
                setEditingQuiz(null);
                setSuccessMessage('Quiz updated successfully');
                setSnackbarOpen(true);
                fetchQuizzes();
            }
        } catch (error) {
            console.error('Error updating quiz:', error);
        }
    };

    // Delete Quiz
    const handleDeleteQuiz = async (id) => {
        try {
            const response = await fetch(`https://indianculture-production.up.railway.app/api/auth/admin/quizzes/${id}`, { method: 'DELETE' });
            if (response.ok) {
                setSuccessMessage('Quiz deleted successfully');
                setSnackbarOpen(true);
                fetchQuizzes();
            }
        } catch (error) {
            console.error('Error deleting quiz:', error);
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleShowUsers = () => {
        setShowUsers(true);
        setShowQuizzes(false);
        setShowEmailSender(false); 
    };

    const handleShowQuizzes = () => {
        setShowUsers(false);
        setShowQuizzes(true);
        setShowEmailSender(false); 
    };

    const handleShowEmailSender = () => {
        setShowUsers(false);
        setShowQuizzes(false);
        setShowEmailSender(true); // Show EmailSender component when button is clicked
    };

    return (
        <div className="admin-dashboard">
            <div className="container">
                <h2>Admin Dashboard</h2>
                {error && <p style={{ color: 'red' }}>Error: {error}</p>}
                <Button variant="contained" color="primary" onClick={handleShowUsers}>
                    Users Data
                </Button>
                <Button variant="contained" color="secondary" onClick={handleShowQuizzes}>
                    Update Quiz
                </Button>
             {/* Send Email to All Users Button */}
             <Button variant="contained" color="success" onClick={handleShowEmailSender}>
                    Send Email to All Users
                </Button>

                {/* Conditionally render EmailSender component */}
                {showEmailSender && <EmailSender />}
                
                <div className="manage-trips-container">
              <h2>Manage Trips</h2>
             <Link to="/admin/trips" className="manage-trips-button">
             Go to Trip Management
             </Link>
            </div>

               
                <div style={{ marginTop: '20px' }}>
                    <p>Total Users: {users.length}</p>
                </div>

                {/* Welcome Message */}
                <p>Welcome to the Admin Dashboard!</p>

                {showUsers && (
                    <>
                        <h3>Create New User</h3>
                        <input type="text" placeholder="Username" value={newUser.username} onChange={(e) => setNewUser({ ...newUser, username: e.target.value })} />
                        <input type="email" placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                        <input type="password" placeholder="Password" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
                        <Button variant="contained" color="primary" onClick={handleCreateUser}>
                            Create User
                        </Button>

                        <h3>Users List</h3>
                        <ul>
                            {users.map(user => (
                                <li key={user.id}>
                                    {user.username} - {user.email} 
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        startIcon={<EditIcon />} 
                                        onClick={() => setEditingUser(user)}
                                    >
                                        Edit
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        color="secondary" 
                                        startIcon={<DeleteIcon />} 
                                        onClick={() => handleDeleteUser(user.id)}
                                    >
                                        Delete
                                    </Button>
                                </li>
                            ))}
                        </ul>

                        {editingUser && (
                            <div className="edit-user">
                                <h3>Edit User</h3>
                                <input 
                                    type="text" 
                                    value={editingUser.username} 
                                    onChange={(e) => setEditingUser({ ...editingUser, username: e.target.value })} 
                                />
                                <input 
                                    type="email" 
                                    value={editingUser.email} 
                                    onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })} 
                                />
                                {/* Remove the password field */}
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    onClick={() => handleUpdateUser(editingUser.id)}
                                >
                                    Update User
                                </Button>
                            </div>
                        )}
                    </>
                )}

                {/* Quiz management */}
                {showQuizzes && (
                    <>
                        <h3>Create New Quiz</h3>
                        <input type="text" placeholder="Question" value={newQuiz.question} onChange={(e) => setNewQuiz({ ...newQuiz, question: e.target.value })} />
                        <input type="text" placeholder="Option A" value={newQuiz.optionA} onChange={(e) => setNewQuiz({ ...newQuiz, optionA: e.target.value })} />
                        <input type="text" placeholder="Option B" value={newQuiz.optionB} onChange={(e) => setNewQuiz({ ...newQuiz, optionB: e.target.value })} />
                        <input type="text" placeholder="Option C" value={newQuiz.optionC} onChange={(e) => setNewQuiz({ ...newQuiz, optionC: e.target.value })} />
                        <input type="text" placeholder="Option D" value={newQuiz.optionD} onChange={(e) => setNewQuiz({ ...newQuiz, optionD: e.target.value })} />
                        <input type="text" placeholder="Correct Answer" value={newQuiz.correctAnswer} onChange={(e) => setNewQuiz({ ...newQuiz, correctAnswer: e.target.value })} />
                        <Button variant="contained" color="primary" onClick={handleCreateQuiz}>
                            Create Quiz
                        </Button>

                        <h3>Quizzes List</h3>
                        <ul>
                            {quizzes.map(quiz => (
                                <li key={quiz.id}>
                                    {quiz.question}
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        startIcon={<EditIcon />} 
                                        onClick={() => setEditingQuiz(quiz)}
                                    >
                                        Edit
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        color="secondary" 
                                        startIcon={<DeleteIcon />} 
                                        onClick={() => handleDeleteQuiz(quiz.id)}
                                    >
                                        Delete
                                    </Button>
                                </li>
                            ))}
                        </ul>

                        {editingQuiz && (
                            <div className="edit-quiz">
                                <h3>Edit Quiz</h3>
                                <input 
                                    type="text" 
                                    value={editingQuiz.question} 
                                    onChange={(e) => setEditingQuiz({ ...editingQuiz, question: e.target.value })} 
                                />
                                <input 
                                    type="text" 
                                    value={editingQuiz.optionA} 
                                    onChange={(e) => setEditingQuiz({ ...editingQuiz, optionA: e.target.value })} 
                                />
                                <input 
                                    type="text" 
                                    value={editingQuiz.optionB} 
                                    onChange={(e) => setEditingQuiz({ ...editingQuiz, optionB: e.target.value })} 
                                />
                                <input 
                                    type="text" 
                                    value={editingQuiz.optionC} 
                                    onChange={(e) => setEditingQuiz({ ...editingQuiz, optionC: e.target.value })} 
                                />
                                <input 
                                    type="text" 
                                    value={editingQuiz.optionD} 
                                    onChange={(e) => setEditingQuiz({ ...editingQuiz, optionD: e.target.value })} 
                                />
                                <input 
                                    type="text" 
                                    value={editingQuiz.correctAnswer} 
                                    onChange={(e) => setEditingQuiz({ ...editingQuiz, correctAnswer: e.target.value })} 
                                />
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    onClick={() => handleUpdateQuiz(editingQuiz.id)}
                                >
                                    Update Quiz
                                </Button>
                            </div>
                        )}
                    </>
                )}

                {/* Snackbar */}
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={3000}
                    onClose={handleSnackbarClose}
                    message={successMessage}
                />
            </div>
        </div>
    );
}

export default AdminDashboard;
