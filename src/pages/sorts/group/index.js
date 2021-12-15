import Input from "components/ui/input";
import "./index.css";

const Group = ({ name, count, setCount, group }) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const filteredUsers = users?.filter((user) => user.group === group);
  return (
    <div className="group">
      <div className="left-block">
        <div className="left-block__header">{name}</div>
        <Input value={count} setValue={setCount} placeholder="Баллы" />
      </div>
      <div className="right-block">
        {filteredUsers?.map((user) => {
          return (
            <div className="user__number" key={user.id}>
              {user.id}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Group;
