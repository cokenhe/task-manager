import { useEffect, useMemo, useState } from "react";
import TaskFilter, { FilterOption } from "./components/TaskFilter";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Task } from "./types/TaskModel";

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [selectedCategory, setSelectedCategory] =
        useState<FilterOption>("All");
    const filteredTasks = useMemo(() => {
        if (selectedCategory === "All") {
            return tasks;
        } else {
            return tasks.filter((task) => task.category === selectedCategory);
        }
    }, [tasks, selectedCategory]);

    useEffect(() => {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks && savedTasks !== "[]") {
            const parsedTasks = JSON.parse(savedTasks);
            setTasks(
                parsedTasks.map((task: Task) => ({
                    ...task,
                    dueDate: new Date(task.dueDate),
                }))
            );
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTaskHandler = (task: Task) => {
        setTasks((prevTasks) => {
            return [...prevTasks, task];
        });
    };

    const deleteTaskHandler = (id: string) => {
        setTasks((prevTasks) => {
            return prevTasks.filter((task) => task.id !== id);
        });
    };

    return (
        <div className="bg-gray-100 min-h-screen items-center">
            <div className="mx-8 pt-8">
                <h1 className="text-4xl font-bold mb-4">Task Manager</h1>
                <TaskForm onSubmit={addTaskHandler} />
                <hr className=" my-2" />
                <TaskList tasks={filteredTasks} onDelete={deleteTaskHandler} />
                <hr className=" my-2" />
                <TaskFilter onSelectCategory={setSelectedCategory} />
            </div>
        </div>
    );
}

export default App;
