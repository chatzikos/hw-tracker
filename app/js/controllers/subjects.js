import { storage } from "../storage.js";

export const subjects = () => {
    Alpine.data('subjects', () => ({
        get subjects() {
            return storage.get('subjects');
        },
        frequency(subject) {
            const days = subject.subjectDays.length;
            return days !== 1 ? `${days} times this week` : `1 time this week`;
        },
    }));
}