const SetPersonal = (state = null, action) => {
  switch (action.type) {
    case "SET_PERSONAL":
      return {
        ...state,
        display_name: action.display_name,
        external_urls: action.external_urls,
        followers: action.followers,
        id: action.id,
        image: action.image,
      };
    default:
      return state;
  }
};

export default SetPersonal;
