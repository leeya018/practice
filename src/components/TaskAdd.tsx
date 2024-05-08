import { TaskItem } from "./Tasks";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { CiEdit } from "react-icons/ci";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type taskPorps = {
  onCancel: () => void;
  onAdd: (item: TaskItem) => void;
};

function TaskAdd({ onCancel, onAdd }: taskPorps) {
  const [tempTask, setTempTask] = useState<TaskItem>({
    id: uuidv4(),
    name: "",
    description: "",
    cycles: 0,
    isDone: false,
    cyclesDone: 0,
  });

  return (
    <div
      key={tempTask.id}
      className={`w-[400px] relative p-4 text-black flex flex-col bg-white items-center justify-between border-l-4 `}
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
          <div>Est Pomodoros</div>
          <div className="flex items-center">
            <div className="flex items-center">
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
          <button onClick={onCancel} className="text-gray-500">
            Cancel
          </button>
          <button
            onClick={() => onAdd(tempTask)}
            className="py-2 px-4 text-white bg-black "
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskAdd;
