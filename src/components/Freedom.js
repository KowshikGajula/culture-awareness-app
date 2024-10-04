import React, { useEffect } from 'react';
import './Freedom.css';

function Freedom() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="freedom-container">
      <h1>The Journey of Independence</h1>
      <p>
        India's struggle for independence is a testament to the courage and resilience of its people. The journey began in the mid-19th century, characterized by discontent against British colonial rule.
      </p>
      <img src="https://images.news18.com/ibnlive/uploads/2017/05/30-1857-rebellion.jpg" alt="Early Revolt" className="freedom-image" />
      <p>
        The Revolt of 1857 marked a significant turning point, as the sepoys of the East India Company rebelled against their British officers. Though this uprising was ultimately suppressed, it ignited the flame of nationalism.
      </p>

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDs4SubP7wECZ3VHxK5nwqALkY5Rt3u4yu4A&s" alt="Indian National Congress" className="freedom-image" />
      <p>
        In 1885, the Indian National Congress was founded, providing a platform for political dialogue. The early years were marked by moderate demands for reform, but this gradually evolved into a more assertive struggle for self-rule.
      </p>

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH2AGyrcRSwZITD94sZBNn8xCOXhsDU2RI-w&s" alt="Mahatma Gandhi" className="freedom-image" />
      <p>
        The arrival of Mahatma Gandhi in 1915 brought a new wave of energy to the movement. His philosophy of non-violent resistance inspired millions, leading to mass movements like the Salt March in 1930 and the Quit India Movement in 1942.
      </p>

      <p>
        The collective efforts of leaders such as Jawaharlal Nehru, Subhash Chandra Bose, and countless others galvanized the nation. The culmination of these efforts came on August 15, 1947, when India finally achieved independence.
      </p>

      <img src="https://media.istockphoto.com/id/1412275937/photo/waving-india-flag-on-sunset-sky-background-with-place-for-your-text-3d-rendering.jpg?s=612x612&w=0&k=20&c=yqZmd01N0jvIf5MbN3kbxgVx3EwZJK-1ewv-mUzE--g=" alt="Independence Day" className="freedom-image" />
      <p>
        The journey did not end with independence; it laid the foundation for building a democratic nation. The challenges ahead were immense, but the spirit of unity and determination continued to guide the country.
      </p>

      <img src="https://t3.ftcdn.net/jpg/06/23/81/50/360_F_623815007_OS4TFnhK9j0iRmCpCFtlo2VvHNhmFbGO.jpg" alt="Celebration of Independence" className="freedom-image" />
      <p>
        Today, we remember the sacrifices made by our freedom fighters and celebrate the values of democracy, secularism, and justice that define our nation.
      </p>
    </div>
  );
}

export default Freedom;
