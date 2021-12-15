import { useNavigate } from "react-router-dom";
import Button from "components/ui/button";
import "./index.css";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Main = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    shuffleArray(users);
    const usersLength = Math.floor(users.length / 4);

    let indexFlag = 1;
    let flagForLast = 1;

    const usersWithGroups = users.map((user, index) => {
      let groupNumber = 1;
      // если перебрали число пользователей (без остатка)
      // то начинаем определять группу для остатка
      if (index + 1 > usersLength * 4) {
        // сброс счетчика после заполнения всех групп
        if (flagForLast + 1 === 5) {
          flagForLast = 1;
          groupNumber = 1;
        } else {
          groupNumber = flagForLast;
          flagForLast = flagForLast + 1;
        }
        // срабатывает, когда дошли до последнего элемента группы
      } else if (index + 1 === usersLength * indexFlag) {
        groupNumber = indexFlag;
        indexFlag = indexFlag + 1;
        // заполняем группу
      } else {
        groupNumber = indexFlag;
      }

      return {
        ...user,
        group: groupNumber,
      };
    });

    localStorage.setItem("users", JSON.stringify(usersWithGroups));
    navigate("/sorts");
  };

  return (
    <div className="main">
      <Button onClick={handleButtonClick}>Поехали!</Button>
    </div>
  );
};

export default Main;
