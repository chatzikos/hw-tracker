export const storage = {
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    getAll() {
        return Object.fromEntries(
            Object.entries(localStorage).map(([key, value]) => {
                return [key, JSON.parse(value)];
            })
        );
    },
    set(key, value) {
        return localStorage.setItem(key, JSON.stringify(value));
    },
    default(key, value) {
        if(this.get(key) === null)
            this.set(key, value)
    },
    remove(key) {
        localStorage.removeItem(key);
    },
    clear() {
        localStorage.clear();
    }
}