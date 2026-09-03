import { storage } from "../storage.js";
import { addSubjectAction } from "../actions/subjects.js";
import { redirect } from "../routes/router.js";

export const addSubject = () => {
    const form = document.querySelector('#add-subject-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputs = new FormData(form);
        const subjectName = inputs.get("subjectName");
    
        addSubjectAction(subjectName);
        redirect('subjects');
    });
};