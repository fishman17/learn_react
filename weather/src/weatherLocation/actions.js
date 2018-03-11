import { FETCH_LOCATION_BY_IP_START } from "./actionTypes";

let nextFetchLocationByIpId = 0;
export const fetchLocationByIpStart = () =>({
    type: FETCH_LOCATION_BY_IP_START
})
export const fetchLocationByIp = ()=>{
    return (dispatch,getState) =>{
        const currentFetchLocationByIpId = 
        ++nextFetchLocationByIpId;
        const dispatchIfValid = action =>{
            if(currentFetchLocationByIpId == nextFetchLocationByIpId){
                dispatch(action)
            }
        }
        dispatchIfValid(fetchLocationByIpStart())
    }
}