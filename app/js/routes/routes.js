import { tasks } from '../pages/tasks.js';
import { addSubject } from '../pages/addSubject.js';
import { subjects } from '../pages/subjects.js';

export const routes = {
    '#notFound': {
        file: 'notFound.html',
        title: 'Not found',
    },
    '#overview': {
        file: 'overview.html',
        title: 'Overview',
    },
    '#tasks': {
        file: 'tasks.html',
        title: 'Tasks',
        onload: tasks
    },
    '#calendar': {
        file: 'calendar.html',
        title: 'Calendar',
    },
    '#subjects': {
        file: 'subjects/subjects.html',
        title: 'Subjects',
        onload: subjects
    },
    '#add-subject': {
        file: 'subjects/add-subject.html',
        title: 'Add Subject',
        onload: addSubject
    },
};