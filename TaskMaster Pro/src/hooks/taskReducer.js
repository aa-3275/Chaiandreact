// This is the starting point of our data
export const initialState = [];

// The "Reducer" is a pure function.
// It takes (current state, action) and returns (new state).
export function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      // We NEVER mutate state directly. We return a brand new array.
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
          createdAt: new Date().toLocaleDateString(),
        },
      ];

    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task,
      );

    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
}
