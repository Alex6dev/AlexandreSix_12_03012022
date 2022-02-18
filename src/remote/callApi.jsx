import {createContext, useEffect, useState} from "react"
import React from "react";  
import propTypes from 'prop-types';
import { useParams } from "react-router-dom";
import { callUser , callUserActivity , callUserAverageSessions, callUserPerformance} from "./callAxios.js";

const apiUrl=`http://localhost:3010`; 

//create context whithout Data

export const DashboardContext = createContext()

/** mocked data 
 * 
 * @param {JSX} //Element REACT of page Dashboard  
 * @returns {JSX} 
 */
export const DashboardContextProvider=({ children })=>{ 
    const {id}=useParams()
    const [user, setUser] = useState()
    const [activity, setActivity] = useState()
    const [averageSessions, setAverageSessions] = useState()
    const [performance, setPerformance] = useState()
    const [apiError, setApiError] = useState(false)


    if(id){
            
        useEffect(() => {
            callUser(`${apiUrl}/user/${id}`)
                .then((response)=>{setUser(response)})
                .catch((error)=>{setApiError(error)})
            }, [])
            
        useEffect(() => {
            if(user){
                callUserActivity(`${apiUrl}/user/${id}/activity`)
                    .then((response)=>setActivity(response))
                    .catch((error)=>setApiError(error))

                callUserAverageSessions(`${apiUrl}/user/${id}/average-sessions`)
                    .then((response)=>setAverageSessions(response))
                    .catch((error)=>setApiError(error))
                callUserPerformance(`${apiUrl}/user/${id}/performance`)
                    .then((response)=>setPerformance(response))
                    .catch((error)=>setApiError(error))
            }
        }, [user])

   }
    return (
            <DashboardContext.Provider value={{user, activity, averageSessions, performance, apiError}}>
                {children}
            </DashboardContext.Provider>
        ) 
}
DashboardContextProvider.propTypes = {
    children: propTypes.element.isRequired
  };
