import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { ZodType, z } from "zod";
import categories from "../categories";
import { Task } from "../types/TaskModel";

const TaskSchema: ZodType<Task> = z.object({
    id: z.string().uuid(),
    title: z
        .string()
        .min(3, "Title length at least 3")
        .max(50, "Title length at most 50"),
    dueDate: z
        .date()
        .min(
            new Date(new Date().setHours(0, 0, 0, 0)),
            "Due date must be in the future"
        ),
    category: z.enum(categories),
});

type TaskFormType = z.infer<typeof TaskSchema>;

interface TaskFormProps {
    onSubmit: (task: TaskFormType) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
    const { register, handleSubmit, reset, formState } = useForm<TaskFormType>({
        defaultValues: {
            dueDate: new Date(),
        },
        resolver: zodResolver(TaskSchema),
    });

    const onSubmitHandler = (data: TaskFormType) => {
        onSubmit({ ...data, id: uuidv4() });
        reset();
    };

    return (
        <section>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="mb-4">
                    <input
                        type="hidden"
                        id="id"
                        {...register("id")}
                        value={uuidv4()}
                    />
                    <label
                        htmlFor="title"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        {...register("title")}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {formState.errors.title && (
                        <p className="text-red-500 text-xs italic">
                            {formState.errors.title.message}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="dueDate"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Due Date
                    </label>
                    <input
                        type="date"
                        id="dueDate"
                        {...register("dueDate", {
                            setValueAs: (value: string) => {
                                const date = new Date(value);
                                const utcDate = new Date(
                                    date.getTime() +
                                        date.getTimezoneOffset() * 60000
                                );
                                return utcDate;
                            },
                        })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {formState.errors.dueDate && (
                        <p className="text-red-500 text-xs italic">
                            {formState.errors.dueDate.message}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="category"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Category
                    </label>
                    <select
                        id="category"
                        {...register("category")}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    {formState.errors.category && (
                        <p className="text-red-500 text-xs italic">
                            {formState.errors.category.message}
                        </p>
                    )}
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Task
                    </button>
                </div>
            </form>
        </section>
    );
};

export default TaskForm;
