import { ListenerType } from "../../types/ListenerType"
import { SessionType } from "../../types/NewSessionType"
import { GET_LISTENER_STATUS, GET_LISTENER_STATUS_ERROR, GET_LISTENER_STATUS_LOADING, START_NEW_SESSION, START_NEW_SESSION_ERROR, START_NEW_SESSION_LOADING, UPDATE_CUSTOM_EVENT, UPDATE_CUSTOM_EVENT_ERROR, UPDATE_CUSTOM_EVENT_LOADING } from "../constants"

export function getListenerStatusAction(payload: ListenerType | any) {
   
    return {
      type: GET_LISTENER_STATUS,
      payload: payload,
   }
}
export {}

export function getListenerStatusLoading(isLoading: boolean) {
   
  return {
    type: GET_LISTENER_STATUS_LOADING,
    payload: isLoading,
 }
}
export {}

export function getListenerStatusError(isError: boolean) {
   
  return {
    type: GET_LISTENER_STATUS_ERROR,
    payload: isError,
 }
}
export {}