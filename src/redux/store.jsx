// import redux
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

// import reducer
import idReducer from "./id";
import choicesReducer from "./choices";
import choiceNumReducer from "./choiceNum";
import recsReducer from "./recs";
import infosReducer from "./infos";
import titleReducer from "./title";

// reducer(persist)
const rootReducer = combineReducers({
  id: idReducer,
  choices: choicesReducer,
  choiceNum: choiceNumReducer,
  recs: recsReducer,
  infos: infosReducer,
  title: titleReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['id', 'choices', 'choiceNum', 'recs', 'infos', 'title']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// store
const store = configureStore({
  reducer: persistedReducer,
});

// export
export default store;