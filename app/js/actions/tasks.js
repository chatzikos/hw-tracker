import { storage } from "../storage.js";

export const addTaskAction = (taskName, taskDescription, taskDeadline, taskSubject, taskPriority) => {
    const tasks = storage.get('tasks');

    tasks.push({
        taskName, 
        taskDescription, 
        taskDeadline, 
        taskSubject, 
        taskPriority,
        taskComplete: false
    });

    storage.set('tasks', tasks);
};