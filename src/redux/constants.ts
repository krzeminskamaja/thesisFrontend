export const UPDATE_CUSTOM_EVENT = 'UPDATE_CUSTOM_EVENT' ;
export const UPDATE_CUSTOM_EVENT_LOADING = 'UPDATE_CUSTOM_EVENT_LOADING' ;
export const UPDATE_CUSTOM_EVENT_ERROR = 'UPDATE_CUSTOM_EVENT_ERROR' ;
export const START_NEW_SESSION = 'START_NEW_SESSION' ;
export const START_NEW_SESSION_LOADING = 'START_NEW_SESSION_LOADING' ;
export const START_NEW_SESSION_ERROR = 'START_NEW_SESSION_ERROR' ;
export const GET_LISTENER_STATUS = 'GET_LISTENER_STATUS' ;
export const GET_LISTENER_STATUS_LOADING = 'GET_LISTENER_STATUS_LOADING' ;
export const GET_LISTENER_STATUS_ERROR = 'GET_LISTENER_STATUS_ERROR' ;

export const getTopicName = (deviceType: string, isParent: string, sessionID: string) => {
    console.log(deviceType)
    console.log(isParent)
    console.log(sessionID)  
    isParent = isParent == "true" ? "parent":"patient"
    const today = new Date();
    const todayString = today.getFullYear().toString()+today.getMonth().toString()+today.getDate().toString()
    console.log(`${todayString}_${sessionID}_${isParent}_${deviceType}`)
    return `${todayString}_${sessionID}_${isParent}_${deviceType}`
}