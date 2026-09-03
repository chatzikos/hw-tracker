import { storage } from "../storage.js";

export const addSubjectAction = (subjectName) => {
    const subjects = storage.get('subjects');
    subjects.push({
        subjectName: subjectName
    });

    storage.set('subjects', subjects);
}