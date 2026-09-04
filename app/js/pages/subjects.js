import { storage } from "../storage.js";

export const subjects = () => {
    Alpine.data('subjects', () => ({
        get subjects() {
            return storage.get('subjects');
        },
        frequency(subject) {
            return `${subject.subjectDays.length} times this week`;
        },
    }));
}