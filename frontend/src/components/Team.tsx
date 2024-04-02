import React from "react";
import "./Team.css";

interface TeamProps {
  name: string;
  points: number;
  setPoints: (points: number) => void;
}

const Team: React.FC<TeamProps> = ({ name, points, setPoints }) => {
  return (
    <div>
      <div className="points">
        <h2>{name}:</h2>
        <h2>{points}</h2>
      </div>
      <div>
        <button onClick={() => setPoints(100)}>100</button>
        <button onClick={() => setPoints(200)}>200</button>
        <button onClick={() => setPoints(300)}>300</button>
        <button onClick={() => setPoints(400)}>400</button>
        <button onClick={() => setPoints(500)}>500</button>
      </div>
    </div>
  );
};

export default Team;
