const categories = ["Work", "Personal", "School"] as const;

export type Category = (typeof categories)[number];

export default categories;
