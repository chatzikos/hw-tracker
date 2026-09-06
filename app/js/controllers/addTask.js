import { storage } from "../storage.js";
import { PRIORITIES } from "../constants.js";
import { addTaskAction } from "../actions/tasks.js";
import { redirect } from "../routes/router.js";

export const addTask = () => {
    Alpine.store('subjects', storage.get('subjects'));
    Alpine.store('priorities', PRIORITIES);

    const form = document.querySelector('#add-task-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputs = new FormData(form);

        const taskName = inputs.get('taskName');
        const taskDescription = inputs.get('taskDescription');
        const taskDeadline = inputs.get('taskDeadline');
        const taskSubject = inputs.get('taskSubject');
        const taskPriority = inputs.get('taskPriority');

        addTaskAction(taskName, taskDescription, taskDeadline, taskSubject, taskPriority);
        redirect('tasks');
    });
};