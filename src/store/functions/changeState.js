export const changeState = (
  state,
  action,
  prop,
  propKey,
  deepChange = false
) => {
  if (deepChange) {
    return {
      ...state,
      [prop]: { ...state[prop], [[prop][propKey]]: action.payload },
    };
  } else {
    return {
      ...state,
      [prop]: action.payload,
    };
  }
};
