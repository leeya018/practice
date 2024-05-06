"use client";
import React, { useState } from "react";
import Task from "./Task";
import TaskEdit from "./TaskEdit";

export type TaskItem = {
  id: number;
  name: string;
  cycles: number;
  cyclesDone: number;
  isDone: boolean;
  description: string;
};

const items = [
  {
    id: 1,
    name: "ntiesrtniesr",
    cycles: 0,
    cyclesDone: 0,
    isDone: false,
    description: "iesrntiesnr",
  },
  {
    id: 2,
    name: "hietraietsr",
    cycles: 4,
    cyclesDone: 0,
    isDone: false,
    description: "etsr ietsrnetsrn s",
  },
];
const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>(items);
  const [taskName, setTaskName] = useState("");
  const [cycles, setCycles] = useState(0);
  const [cyclesDone, setCyclesDone] = useState(0);
  const [description, setDescription] = useState("");
  const [nextId, setNextId] = useState(1);
  const [chosenId, setChosenId] = useState(-1);
  const [editedTaskId, setEditedTaskId] = useState(-1);

  const addTask = () => {
    const newTask: TaskItem = {
      id: nextId,
      name: taskName,
      cycles: cycles,
      cyclesDone: cyclesDone,
      isDone: false,
      description: description,
    };
    setTasks([...tasks, newTask]);
    setNextId(nextId + 1); // Increment ID for the next task
    setTaskName("");
    setCycles(0);
    setCyclesDone(0);
    setDescription("");
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleDone = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };
  const changeTask = (id: number, taskInfo: any) => {
    console.log({ taskInfo });
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...taskInfo } : task))
    );
  };

  console.log(tasks);

  return (
    <div className="w-screen">
      <div className="w-[400px] mx-auto">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter task name"
        />
        <input
          type="number"
          value={cycles}
          onChange={(e) => setCycles(Number(e.target.value))}
          placeholder="Enter number of cycles"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
        />
        <button onClick={addTask}>Add Task</button>
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
      </div>
    </div>
  );
};

export default TaskList;
