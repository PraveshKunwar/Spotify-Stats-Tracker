const SET_LOGGED = "SET_LOGGED";

type SetLogged = { type: typeof SET_LOGGED; payload: boolean };

const setLogged = (logged: boolean): SetLogged => {
  return { type: SET_LOGGED as typeof SET_LOGGED, payload: logged };
};

export type Actions = SetLogged;
