function Reducer(state, action) {
  switch (action.type) {
    case "addUser":
      return [...state, action.payload];

    case "deleteUser":
      return state.filter((vals) => vals.id !== action.payload);
    // state: state.filter((vals) => vals.id !== action.payload),
    // ...state,
    // users: state.users.filter((vals) => vals.id !== action.payload),
    case "updateUser":
      const updatedUser = action.payload;
      const updatedUsers = state.map((user, index) => {
        if (Number(user.id) === Number(updatedUser.id)) {
          return updatedUser;
        }
        return user;
      });

      return updatedUsers;

    default:
      break;
  }
}

export default Reducer;
