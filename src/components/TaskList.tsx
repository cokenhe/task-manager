import React from "react";
import { Category } from "../categories";
import { Task } from "../types/TaskModel";

interface TaskListProps {
    tasks: Task[];
    onDelete: (id: string) => void;
}

const CATEGORY_COLORS: Record<Category, string> = {
    Work: "bg-red-500",
    Personal: "bg-green-500",
    School: "bg-blue-500",
};

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
    return (
        <section>
            <h2 className="text-2xl font-bold mb-4">Tasks</h2>

            {tasks.length === 0 ? (
                <p className="text-gray-500">No tasks yet. Add one above.</p>
            ) : (
                <table
                    className="min-w-full border"
                    style={{ borderCollapse: "collapse" }}
                >
                    <thead className="bg-gray-200">
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Due Date</th>
                            <th>Completed</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr
                                key={task.id}
                                className={
                                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                }
                            >
                                <td className="text-center">{task.title}</td>
                                <td className="text-center">
                                    <span
                                        className={`rounded-full px-2 text-sm font-bold text-white ${
                                            CATEGORY_COLORS[task.category]
                                        }`}
                                    >
                                        {task.category}
                                    </span>
                                </td>
                                <td className="text-center">
                                    {task.dueDate.toDateString()}
                                </td>
                                <td className="text-center">
                                    <input
                                        type="checkbox"
                                        id={task.id}
                                        className="mr-2"
                                    />
                                </td>
                                <td className="text-center">
                                    <button
                                        className="text-red-500 hover:text-red-700"
                                        onClick={() => onDelete(task.id)}
                                    >
                                        X
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </section>
    );
};

export default TaskList;
