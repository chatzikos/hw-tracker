import { storage } from "../storage.js";

export const addSubjectAction = (subjectName, subjectDays) => {
    const subjects = storage.get('subjects');

    subjects.push({
        subjectName: subjectName,
        subjectDays: subjectDays
    });

    storage.set('subjects', subjects);
}