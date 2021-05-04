// const tasks = {
//     tasks: [
//         {
//             id: 1,
//             text: "Doctors Appointment",
//             day: "Feb 5th at 2:30pm",
//             reminder: false
//         },
//         {
//             id: 3,
//             text: "Food Appointment",
//             day: "Feb 5th at 4:30pm",
//             reminder: false,
//         },
//         {
//             text: "Take Test",
//             day: "Monday 5pm",
//             reminder: true,
//             id: 4,
//         }
//     ]
// }

// const Tasks = ({ tasks }) => {
//     return (
//         <>
//         {tasks.map((task)=> (
//             <div key={task.id}>
//             <h3>{task.text}</h3>
//             <p>{task.day}</p>
//             </div>
//         ))}
//     </>
//     );
// };

// export default Tasks
import ListItem from "./ListItem"

const Task = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((task, index) => (
                <ListItem 
                onToggle={onToggle} 
                task={task} 
                key={index} 
                onDelete={onDelete} 
                />
            ))}
        </>
    );
};

export default Task