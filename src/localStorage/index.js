export const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    const serializedState = JSON.stringify(getState());
    localStorage.setItem('applicationState', serializedState);
    return result;
  };
};

export const reHydrateStore = () => {
  try {
    const serializedState = localStorage.getItem('applicationState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
