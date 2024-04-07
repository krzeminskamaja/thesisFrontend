import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/customEventReducer'

export default configureStore({
  reducer: {
    lastPostedEvent: counterReducer,
  },
})