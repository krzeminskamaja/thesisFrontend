import { CustomEventType } from "../../types/CustomEventType"
import { UserData } from "../../types/UserData"
import { UPDATE_CUSTOM_EVENT, UPDATE_CUSTOM_EVENT_ERROR, UPDATE_CUSTOM_EVENT_LOADING, USER_LOGGED_IN } from "../constants"

export function updateUserLogin(payload: UserData) {
   
    return {
      type: USER_LOGGED_IN,
      payload: payload,
   }
}
export {}
