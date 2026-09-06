import { storage } from "../storage.js";
import { DAYS } from '../constants.js';
import { addSubjectAction } from "../actions/subjects.js";
import { redirect } from "../routes/router.js";

export const addSubject = () => {
    Alpine.store('days', DAYS);

    const form = document.querySelector('#add-subject-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = new FormData(form);

        const subjectName = inputs.get("subjectName");
        const subjectDays = inputs.getAll("subjectDays");
        
        addSubjectAction(subjectName, subjectDays);
        redirect('subjects');
    });
};