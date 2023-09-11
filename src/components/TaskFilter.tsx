import React from "react";
import categories, { Category } from "../categories";

export type FilterOption = Category | "All";

interface TaskFilterProps {
    onSelectCategory: (category: FilterOption) => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ onSelectCategory }) => {
    const handleCategoryChange = (category: FilterOption) => {
        onSelectCategory(category);
    };

    return (
        <section className="flex flex-col items-center my-4">
            <label
                htmlFor="category-select"
                className="text-lg font-medium mb-2"
            >
                Filter by category:
            </label>
            <select
                id="category-select"
                className="border border-gray-300 rounded-md py-2 px-3 text-base"
                onChange={(event) =>
                    handleCategoryChange(event.target.value as FilterOption)
                }
            >
                <option value={"All"}>All</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </section>
    );
};

export default TaskFilter;
