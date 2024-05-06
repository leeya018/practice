import { TaskItem } from "./Tasks";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { CiEdit } from "react-icons/ci";

type taskPorps = {
  task: TaskItem;
  toggleDone: any;
  removeTask: any;
  handleChosenId: any;
  chosenId: number;
};

function Task({
  task,
  toggleDone,
  removeTask,
  handleChosenId,
  chosenId,
}: taskPorps) {
  return (
    <li
      onClick={() => handleChosenId(task.id)}
      key={task.id}
      className={`w-[400px] relative p-4 text-black flex bg-white items-center mx-auto justify-between border-l-4 ${
        chosenId === task.id ? "border-blue-500 pl-2" : "border-transparent"
      }`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation(); // Prevents the li onClick from triggering when this div is clicked
          toggleDone(task.id);
        }}
      >
        {task.isDone ? (
          <ImCheckboxChecked size={25} />
        ) : (
          <ImCheckboxUnchecked size={25} />
        )}
      </div>
      <div className="font-bold">{task.name}</div>
      <div>
        {task.cycles}/{task.cycles}
      </div>
      <div>
        <CiEdit size={25} />
      </div>
    </li>
  );
}

export default Task;
