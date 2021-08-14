export const initialState = {
  videoList: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD__TO__VIDEOLIST":
      return {
        ...state,
        videoList: [action],
      };
  }
  console.log(initialState.videoList);
};

export default reducer;
