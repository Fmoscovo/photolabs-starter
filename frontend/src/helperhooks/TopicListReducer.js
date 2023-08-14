//frontend/src/helperhooks/TopicListReducer.js

const ACTIONS = {
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
};

// Reducer for the topic list
function topicReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.payload.topics };
    default:
      return state;
  }
}

export { ACTIONS, topicReducer };
