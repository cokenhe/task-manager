import { Category } from "../categories";

export interface Task {
    id: string;
    title: string;
    dueDate: Date;
    category: Category;
}
