import style from './Chat.module.css'
import {useDispatch, useSelector} from "react-redux";
import {deleteMessage} from "../../redux/actions";

export default function Chat() {
  const messages = useSelector(state => state.messages);
  const dispatch = useDispatch();

  const handleMessageClick = function (id) {
    dispatch(deleteMessage(id));
  }

  return <div className={style.chatContainer}>
    {messages.map(message => {
      const hours = message.date.getHours() < 10 ? '0' + message.date.getHours() : message.date.getHours();
      const minutes = message.date.getMinutes() < 10 ? '0' + message.date.getMinutes() : message.date.getMinutes();
      const date = hours + ':' + minutes;

      return <div className={style.messageBox} id={message.id} onClick={() => handleMessageClick(message.id)}>
        <p className={style.messageText}> { message.content } </p>
        <p className={style.messageDate}>{ date }</p>
      </div>
    })}

  </div>
}