import Tasks from "./components/Tasks";
import Header from "./components/Header";
import React, { useState } from "react";
import AddTask from "./components/AddTask";


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

      const [tasks, setTasks] = useState([
      {
        id: 1,
        text: "Doctors Appointment",
        day: "Feb 5th at 2:30pm",
        reminder: false
    },
    {
        id: 2,
        text: "Food Appointment",
        day: "Feb 5th at 4:30pm",
        reminder: false,
    },
    {
        text: "Take Test",
        day: "Monday 5pm",
        reminder: true,
        id: 3,
    },
    ]);

    const onDelete = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    };

    const toggleReminder = (id) => {

      setTasks(
        tasks.map((task) => (
        task.id === id ?
          { ...task, reminder: !task.reminder} : task
        )
        )
      );
    };

    const onAdd= (task) => {
      task.id = tasks.length + 1;
      setTasks([...tasks, task]);
    };

    return (
    <div className = "container">
      <Header nShowAdd={() => setShowAddTask(!showAddTask)}/>
      
      <AddTask onAdd={onAdd}/>
      <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} />
    </div>
    );
};
export default App;
