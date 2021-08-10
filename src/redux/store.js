import {createStore} from "redux";
import messagesReducer from "./messagesReducer";

export const store = createStore(messagesReducer);
