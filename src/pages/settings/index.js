import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "components/ui/button";
import Input from "components/ui/input";
import "./index.css";

const Settings = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(localStorage.getItem("count") || "");

  const handleSaveButton = () => {
    localStorage.clear();
    let users = [...Array(+count)].map((x) => 0);
    users = users.map((user, index) => ({
      id: index + 1,
      count: 0,
      group: 0,
    }));
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("count", count);
    navigate("/");
  };

  const handleClearButton = () => {
    let value = window.confirm("Вы действительно хотите очистить базу ?");
    if (value) {
      localStorage.clear();
      navigate("/");
    }
  };

  return (
    <div className="settings">
      <div>
        <div className="card">
          <div className="card__header">Количество участников</div>
          <Input value={count} setValue={setCount} width={150} />
        </div>
        <Button onClick={handleSaveButton}>Сохранить</Button>
        <div className="clear_button">
          <Button onClick={handleClearButton}>Очистить</Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
