export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('max-value');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: { maxValue: number }) => {
    try {
        const serializedState = JSON.stringify(state);
        // localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};