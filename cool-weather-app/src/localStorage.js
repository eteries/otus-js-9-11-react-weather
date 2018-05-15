export const loadStateFromStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch(e) {
    console.log(e);
    return undefined;
  }
};

export const saveStateToStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(e) {
    console.log(e);
  }
};