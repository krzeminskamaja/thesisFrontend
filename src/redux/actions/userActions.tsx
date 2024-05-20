import { CustomEventType } from "../../types/CustomEventType"
import { UserData } from "../../types/UserData"
import { CLEAN_USER, CONSENTS_HANDLED, UPDATE_CUSTOM_EVENT, UPDATE_CUSTOM_EVENT_ERROR, UPDATE_CUSTOM_EVENT_LOADING, USER_LOGGED_IN } from "../constants"

export function updateUserLogin(payload: UserData) {
   
    return {
      type: USER_LOGGED_IN,
      payload: payload,
   }
}
export {}


export function cleanUser() {
   
   return {
     type: CLEAN_USER
  }
}
export {}
