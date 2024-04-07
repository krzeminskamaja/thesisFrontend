import { UPDATE_CUSTOM_EVENT, UPDATE_CUSTOM_EVENT_ERROR, UPDATE_CUSTOM_EVENT_LOADING } from "../constants"

export function updateCustomEvent(eventType: string, eventDescription: string, parentPatient: string, when: string) {
   
    return {
      type: UPDATE_CUSTOM_EVENT,
      payload: {
        eventType: eventType,
        eventDescription: eventDescription,
        parentPatient: parentPatient,
        when: when
      },
   }
}
export {}

export function updateCustomEventLoading(isLoading: boolean) {
   
  return {
    type: UPDATE_CUSTOM_EVENT_LOADING,
    payload: isLoading,
 }
}
export {}

export function updateCustomEventError(isError: boolean) {
   
  return {
    type: UPDATE_CUSTOM_EVENT_ERROR,
    payload: isError,
 }
}
export {}