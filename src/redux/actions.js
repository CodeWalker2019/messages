export const DELETE_MESSAGE = 'messages/deleteMessage';
export const CHANGE_NEW_MESSAGE_VALUE = 'messages/changeNewMessageValue';
export const SEND_MESSAGE = 'message/sendMessage';

export function deleteMessage(id) {
  return {
    type: DELETE_MESSAGE,
    payload: id
  }
}

export function changeNewMessageValue(value) {
  return {
    type: CHANGE_NEW_MESSAGE_VALUE,
    payload: value
  }
}

export function sendMessage() {
  return {
    type: SEND_MESSAGE,
  }
}
