import { useForm } from "react-hook-form";
import { useSetRecoilState } from 'recoil';
import { toDoState } from './atoms';

interface IData{
  toDo: string;
}

export default function CreateToDo() {
  const setTodos = useSetRecoilState(toDoState);
  const { register, handleSubmit ,setValue} = useForm<IData>();
  const onValid = (data: IData) => {
    setTodos(oldToDos => [
      { text: data.toDo, id: Date.now(), category: "TO_DO" }, ...oldToDos])
    setValue("toDo", "");
  }
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input {...register("toDo", {
        required: "please write a todo",
      })} placeholder="Write to Do" />
      <button>Add</button>
  </form>);
}