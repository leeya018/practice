import { TaskItem } from "./Tasks";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { CiEdit } from "react-icons/ci";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";

type taskPorps = {
  task: TaskItem;
  toggleDone: any;
  removeTask: any;
  changeTask: any;
  handleChosenId: any;
  chosenId: number;
};

function TaskEdit({
  task,
  toggleDone,
  removeTask,
  changeTask,
  handleChosenId,
  chosenId,
}: taskPorps) {
  return (
    <li
      onClick={() => handleChosenId(task.id)}
      key={task.id}
      className={`w-[400px] relative p-4 text-black flex flex-col bg-white items-center justify-between border-l-4 ${
        chosenId === task.id ? "border-blue-500 pl-2" : "border-transparent"
      }`}
    >
      <div className="w-[70%] mx-auto">
        <div className="flex items-center">
          <div>Act / Est Pomodoros</div>
          <div className="flex items-center">
            <div className="flex items-center">
              <input
                className="w-10 h-3 p-2 bg-gray-500 text-slate-950"
                type="number"
                name=""
                id=""
                value={task.cyclesDone}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  changeTask(task.id, {
                    cyclesDone: val < task.cycles ? val : task.cycles,
                  });
                }}
              />
              <div>/</div>
              <input
                className="w-10 h-3 p-2 bg-gray-500 text-slate-950"
                type="text"
                name=""
                id=""
                value={task.cycles}
                onChange={(e) =>
                  changeTask(task.id, { cycles: e.target.value })
                }
              />
            </div>
            {/* buttons up down */}
            <div className="flex items-center ">
              <button className="rounded-md flex justify-center items-center">
                <RiArrowUpSFill
                  size={25}
                  onClick={() =>
                    changeTask(task.id, { cycles: task.cycles + 1 })
                  }
                />
              </button>
              <button className="rounded-md flex justify-center items-center">
                <RiArrowDownSFill
                  size={25}
                  onClick={() =>
                    changeTask(task.id, {
                      cycles: task.cycles > 0 ? task.cycles - 1 : 0,
                    })
                  }
                />
              </button>
            </div>
          </div>
        </div>
        <div className=" rounded-md  text-black">
          <textarea
            name=""
            id=""
            rows={5}
            cols={27}
            className="bg-gray-300"
            value={task.description}
            onChange={(e) =>
              changeTask(task.id, { description: e.target.value })
            }
          />
        </div>
        {/* bottom line */}
        <div className="flex items-center justify-between w-full">
          <button
            onClick={(e) => removeTask(task.id)}
            className="text-gray-500"
          >
            Delete
          </button>
          <div className="flex items-center gap-2">
            <button className="text-gray-500">Cancel</button>
            <button className="py-2 px-4 text-white bg-black ">Save</button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default TaskEdit;
