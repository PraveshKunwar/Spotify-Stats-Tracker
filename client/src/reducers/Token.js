const Token = (state = String, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return state;
    default:
      return state;
  }
};

export default Token;
