import {CHANGE_NEW_MESSAGE_VALUE, DELETE_MESSAGE, SEND_MESSAGE} from "./actions";

const initialState = {
  messages: [
    {
      id: 0,
      content: 'Just to order',
      date: new Date(),
    },
    {
      id: 1,
      content: 'Okay, for what level of spiciness?',
      date: new Date(),
    }
  ],
  newMessage: 'Okay I\'m waiting  👍'
};

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_MESSAGE:
      const messageId = action.payload;
      return {
        ...state,
        messages: state.messages.filter(message => message.id !== messageId)
      }

    case CHANGE_NEW_MESSAGE_VALUE:
      return {
        ...state, newMessage: action.payload
      }

    case SEND_MESSAGE:
      const newMessage = {
        id: state.messages.length,
        content: state.newMessage,
        date: new Date()
      }

      return {
        ...state,
        messages: [
          ...state.messages,
          newMessage
        ],
        newMessage: ''
      }

    default:
      return state;
  }
}