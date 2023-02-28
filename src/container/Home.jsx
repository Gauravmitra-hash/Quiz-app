import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Container">
      <div className="cardBox">
        <div className="box">
          <img src="https://www.thequizopedia.com/blog/wp-content/uploads/2020/01/purple-background-with-quiz-word-colorful-people_52683-126.jpg" />
        </div>
        <div className="quiz-instruction">
          <p>
            <span style={{ fontWeight: "500" }}>10</span>
            <span style={{ color: "#43434386" }}>Question</span>
          </p>
          <span
            style={{
              fontSize: "30px",
              textAlign: "center",
              fontWeight: "lighter",
              color: "#282828",
            }}
          >
            {" "}
            |{" "}
          </span>
          <p>
            <span style={{ fontWeight: "500" }}>NA</span>
            <span style={{ color: "#43434386" }}>Duration</span>
          </p>
        </div>
        <Link className="startQuiz" to="/quiz">
          Start Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
