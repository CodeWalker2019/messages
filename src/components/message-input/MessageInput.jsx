import style from './MessageInput.module.css'
import sendIcon from './icon_send.svg'
import {useDispatch, useSelector} from "react-redux";
import {changeNewMessageValue, sendMessage} from "../../redux/actions";

export default function MessageInput() {
  const currentMessageText = useSelector(state => state.newMessage);
  const dispatch = useDispatch();

  function handleInputChange(event) {
    const currentTextValue = event.target.value;
    dispatch( changeNewMessageValue(currentTextValue) );
  }

  function handleSendClick() {
    dispatch(sendMessage());
  }

  return <div className={style.inputContainer}>
    <input className={style.input} value={currentMessageText} onChange={handleInputChange}/>
    <img src={sendIcon} className={style.send} alt="send" onClick={handleSendClick}/>
  </div>
}