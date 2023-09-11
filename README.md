# Task Management App

## Description

In this project, you will find a Task Management App, a tool that allows users to add, view, and delete tasks. Each task has a title, due date, and category. This project is built using React and TypeScript and demonstrates concepts such as handling form inputs, maintaining application state, and implementing UI components.

## Live Demo

Check out the live demo [here](https://task-manager-delta-nine.vercel.app).

## Project Setup

1. Open your terminal and navigate to the folder where you want to create your project.
2. Type the following command to create a new project folder with a React and TypeScript template using Vite:

```bash
npx create-vite task-manager --template react-ts
```

1. Navigate into your new project folder with:

```bash
cd task-manager
```

2. Install the necessary dependencies for this project:

```bash
npm install react-hook-form zod @hookform/resolvers zod
```

3. Install the library/framework used for styling the components (e.g., bootstrap, Tailwind CSS, Styled-components).

## How to Use

1. Define the Task Model: Define a TypeScript interface for a task in your App component file. Each task will have fields like id, title, dueDate, and category. This interface will be used for type-checking tasks.

2. File Structure: Create a file structure as described in the project instructions.

3. Implementing Components: Follow the steps to implement the TaskForm, TaskList, and TaskFilter components as outlined in the project instructions.

4. App Component: Implement the App component and use the TaskForm and TaskList components to create a fully functioning Task Management App.

5. Bonus: Store and Retrieve tasks from localStorage: Optionally, you can implement local storage to store and retrieve tasks between sessions.

## Commit Changes to Git/GitHub

1. Open Visual Studio Code.
1. Open your project folder (via File > Open Folder).
1. Click on the Source Control icon in the Activity Bar.
1. Click on "Publish to GitHub" and choose whether the repository should be public or private.
1. Select the files you want to include in the GitHub repository and click OK.
1. When you add new features or make changes, go to the Source Control tab, click "Stage All" (the + icon), add a commit message, and then click the dropdown arrow next to Commit. Select "Commit and Push."
   Confirm the successful push by checking your GitHub account.
1. Screenshots or Video
   Include screenshots or a video demonstration of your Task Management App here.

## Author

Ken Ho

## License

This project is licensed under the MIT License.

## Acknowledgments

-   Mention any libraries, tutorials, or resources you used or were inspired by during the development of this project.
    Happy coding!
