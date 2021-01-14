const SET_PERSONAL = {
  display_name: null,
  external_urls: null,
  followers: null,
  id: null,
  image: null,
};

type SetPersonal = { type: typeof SET_PERSONAL };

const setPersonal: SetPersonal = {
  type: SET_PERSONAL,
};

export default setPersonal;
