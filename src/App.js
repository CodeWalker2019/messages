import './components/message-input/MessageInput'
import MessageInput from "./components/message-input/MessageInput";
import Chat from "./components/chat/Chat";

function App() {
  return (
    <div className="App">
      <Chat/>
      <MessageInput/>
    </div>
  );
}

export default App;
