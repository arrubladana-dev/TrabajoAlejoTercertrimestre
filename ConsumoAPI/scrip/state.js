const state = {
    loading: false,
    users: [],
    limit: 20,
    pages: 1,
    count: 0
    // "count": 826,
    // "pages": 42,
    // "next": "https://rickandmortyapi.com/api/character/?page=2",
    // "prev": null
};

export function getState(key) {
    return state[key];
}

export function setState(key, newValue) {
    state[key] = newValue;
}