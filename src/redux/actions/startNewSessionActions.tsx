import { SessionType } from "../../types/NewSessionType"
import { CONSENTS_HANDLED, START_NEW_SESSION, START_NEW_SESSION_ERROR, START_NEW_SESSION_LOADING, UPDATE_CUSTOM_EVENT, UPDATE_CUSTOM_EVENT_ERROR, UPDATE_CUSTOM_EVENT_LOADING } from "../constants"

export function startNewSession(payload: SessionType) {
   
    return {
      type: START_NEW_SESSION,
      payload: payload,
   }
}
export {}

export function startNewSessionLoading(isLoading: boolean) {
   
  return {
    type: START_NEW_SESSION_LOADING,
    payload: isLoading,
 }
}
export {}

export function startNewSessionError(isError: boolean) {
   
  return {
    type: START_NEW_SESSION_ERROR,
    payload: isError,
 }
}
export {}


export function consentsHandled() {
   
  return {
    type: CONSENTS_HANDLED
 }
}
export {}