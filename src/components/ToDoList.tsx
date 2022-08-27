import CreateToDo from "./CreateToDo";
import { useRecoilValue } from "recoil";
import { toDoState } from "./atoms";
import ToDo from "./ToDo";

export default function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  return (
    <div>
      <h1>toDos</h1>
      <hr />   
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id}{...toDo} />
        ))}
      </ul>
    </div>
  );
}


