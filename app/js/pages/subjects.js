import { storage } from "../storage.js";

export const subjects = () => {
    Alpine.store('subjects', storage.get('subjects'));
}