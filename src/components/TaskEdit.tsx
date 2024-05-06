import { TaskItem } from "./Tasks";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { CiEdit } from "react-icons/ci";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import { useState } from "react";

type taskPorps = {
  task: TaskItem;
  toggleDone: any;
  removeTask: any;
  changeTask: any;
  handleChosenId: any;
  chosenId: number;
  updateEditedTaskId: any;
};

function TaskEdit({
  task,
  toggleDone,
  removeTask,
  changeTask,
  handleChosenId,
  chosenId,
  updateEditedTaskId,
}: taskPorps) {
  const [tempTask, setTempTask] = useState(task);

  console.log(tempTask.description);
  return (
    <li
      onClick={() => handleChosenId(tempTask.id)}
      key={tempTask.id}
      className={`w-[400px] relative p-4 text-black flex flex-col bg-white items-center justify-between border-l-4 ${
        chosenId === tempTask.id ? "border-blue-500 pl-2" : "border-transparent"
      }`}
    >
      <div className="w-[70%] mx-auto">
        <div className="flex flex-col items-center">
          <div>
            <input
              type="text"
              className="w-full text-xl font-bold"
              value={tempTask.name}
              onChange={(e) =>
                setTempTask({ ...tempTask, name: e.target.value })
              }
            />
          </div>
          <div>Act / Est Pomodoros</div>
          <div className="flex items-center">
            <div className="flex items-center">
              <input
                className="w-10 h-3 p-2 bg-gray-500 text-slate-950"
                type="number"
                name=""
                id=""
                value={tempTask.cyclesDone}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setTempTask({
                    ...tempTask,
                    cyclesDone: val < tempTask.cycles ? val : tempTask.cycles,
                  });
                }}
              />
              <div>/</div>
              <input
                className="w-10 h-3 p-2 bg-gray-500 text-slate-950"
                type="text"
                name=""
                id=""
                value={tempTask.cycles}
                onChange={(e) =>
                  setTempTask({ ...tempTask, cycles: Number(e.target.value) })
                }
              />
            </div>
            {/* buttons up down */}
            <div className="flex items-center ">
              <button className="rounded-md flex justify-center items-center">
                <RiArrowUpSFill
                  size={25}
                  onClick={() =>
                    setTempTask({ ...tempTask, cycles: tempTask.cycles + 1 })
                  }
                />
              </button>
              <button className="rounded-md flex justify-center items-center">
                <RiArrowDownSFill
                  size={25}
                  onClick={() =>
                    setTempTask({
                      ...tempTask,
                      cycles: tempTask.cycles > 0 ? tempTask.cycles - 1 : 0,
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
            value={tempTask.description}
            onChange={(e) =>
              setTempTask({ ...tempTask, description: e.target.value })
            }
          />
        </div>
        {/* bottom line */}
        <div className="flex items-center justify-between w-full">
          <button
            onClick={(e) => removeTask(tempTask.id)}
            className="text-gray-500"
          >
            Delete
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                updateEditedTaskId(-1);
              }}
              className="text-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                updateEditedTaskId(-1);
                changeTask(task.id, tempTask);
              }}
              className="py-2 px-4 text-white bg-black "
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default TaskEdit;
