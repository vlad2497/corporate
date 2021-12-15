import Button from "components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Group from "./group";
import "./index.css";

const Sorts = () => {
  const navigate = useNavigate();
  const [group1Count, setGroup1Count] = useState(0);
  const [group2Count, setGroup2Count] = useState(0);
  const [group3Count, setGroup3Count] = useState(0);
  const [group4Count, setGroup4Count] = useState(0);

  const handleSaveButton = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users = users?.map((user) => {
      let count = 0;
      if (user.group === 1) count = +user.count + +group1Count;
      if (user.group === 2) count = +user.count + +group2Count;
      if (user.group === 3) count = +user.count + +group3Count;
      if (user.group === 4) count = +user.count + +group4Count;
      return {
        ...user,
        count,
      };
    });
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/");
  };

  return (
    <div className="sorts">
      <div style={{ width: "100%" }}>
        <div className="sorts__row">
          <Group
            name="1 группа"
            group={1}
            count={group1Count}
            setCount={setGroup1Count}
          />
          <Group
            name="2 группа"
            group={2}
            count={group2Count}
            setCount={setGroup2Count}
          />
        </div>
        <div className="sorts__row">
          <Group
            name="3 группа"
            group={3}
            count={group3Count}
            setCount={setGroup3Count}
          />
          <Group
            name="4 группа"
            group={4}
            count={group4Count}
            setCount={setGroup4Count}
          />
        </div>
        <div className="button-container">
          <Button onClick={handleSaveButton}>Сохранить</Button>
        </div>
      </div>
    </div>
  );
};

export default Sorts;
