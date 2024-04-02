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
        <h2>{name}</h2>
        <h2>{points}</h2>
      </div>
      <div className="adder">
        <p onClick={() => setPoints(100)}>100</p>
        <p onClick={() => setPoints(200)}>200</p>
        <p onClick={() => setPoints(300)}>300</p>
        <p onClick={() => setPoints(400)}>400</p>
        <p onClick={() => setPoints(500)}>500</p>
      </div>
    </div>
  );
};

export default Team;
