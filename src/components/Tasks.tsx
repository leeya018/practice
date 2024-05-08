"use client";
import React, { useState } from "react";
import Task from "./Task";
import TaskEdit from "./TaskEdit";
import AddForm from "./AddForm";
import { v4 as uuidv4 } from "uuid";

import TaskAdd from "./TaskAdd";

export type TaskItem = {
  id: string;
  name: string;
  cycles: number;
  cyclesDone: number;
  isDone: boolean;
  description: string;
};

const items: TaskItem[] = [
  {
    id: uuidv4(),
    name: "ntiesrtniesr",
    cycles: 0,
    cyclesDone: 0,
    isDone: false,
    description: "iesrntiesnr",
  },
  {
    id: uuidv4(),
    name: "hietraietsr",
    cycles: 4,
    cyclesDone: 0,
    isDone: false,
    description: "etsr ietsrnetsrn s",
  },
];
function TaskList() {
  const [tasks, setTasks] = useState<TaskItem[]>(items);
  const [taskName, setTaskName] = useState("");
  const [cycles, setCycles] = useState(0);
  const [cyclesDone, setCyclesDone] = useState(0);
  const [description, setDescription] = useState("");

  const [chosenId, setChosenId] = useState("");
  const [editedTaskId, setEditedTaskId] = useState("-1");
  const [isAddTaskMode, setIsAddTaskMode] = useState(false);

  const addTask = (newTask: TaskItem) => {
    setTasks([...tasks, newTask]);
    setIsAddTaskMode(false);
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleDone = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };
  const changeTask = (id: string, taskInfo: any) => {
    console.log({ taskInfo });
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...taskInfo } : task))
    );
  };

  console.log(tasks);

  return (
    <div className="w-screen">
      <div className="w-[400px] mx-auto">
        <ul className="flex flex-col gap-2">
          {tasks.map((task) =>
            task.id === editedTaskId ? (
              <TaskEdit
                task={task}
                removeTask={removeTask}
                toggleDone={toggleDone}
                handleChosenId={setChosenId}
                chosenId={chosenId}
                changeTask={changeTask}
                updateEditedTaskId={setEditedTaskId}
              />
            ) : (
              <Task
                task={task}
                removeTask={removeTask}
                toggleDone={toggleDone}
                handleChosenId={setChosenId}
                changeTask={changeTask}
                chosenId={chosenId}
                updateEditedTaskId={setEditedTaskId}
              />
            )
          )}
        </ul>
        {/* add items */}
        <div>
          {isAddTaskMode && (
            <TaskAdd onCancel={() => setIsAddTaskMode(false)} onAdd={addTask} />
          )}
        </div>
        <div className="">
          <button
            onClick={() => setIsAddTaskMode(true)}
            className="button-add  flex items-center justify-center"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
