import {createContext, useEffect, useState} from "react"
import React from "react";  
import propTypes from 'prop-types';
import { useParams } from "react-router-dom";

let currentUser= 12
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
    console.log(id)     
    currentUser=id   
    const [user, setUser] = useState()
    const [activity, setActivity] = useState()
    const [averageSessions, setAverageSessions] = useState()
    const [performance, setPerformance] = useState()
    const [apiError, setApiError] = useState(false)

    if(id){


        useEffect(() => {
            fetch(`${apiUrl}/user/${currentUser}`)
                .then((response => response.json()))
                .then(data => setUser(data.data))
                .catch((error) => setApiError(true))    
        }, [])

        function getUserActivity(){
            fetch(`${apiUrl}/user/${user.id}/activity`)
                .then((response => response.json()))
                .then(data => setActivity(data.data.sessions))
                .catch((error) => setApiError(true))
        }

        function getUserAverageSessions(){
            fetch(`${apiUrl}/user/${user.id}/average-sessions`)
                .then((response => response.json()))
                .then(data => setAverageSessions(data.data.sessions))
                .catch((error) => setApiError(true))
        }


        function getUserPerformance (){
            fetch(`${apiUrl}/user/${user.id}/performance`)
                .then((response => response.json())) 
                .then(data => {
                    setPerformance(data.data.data)
                })
                .catch((error) => setApiError(true))
        }

        useEffect(() => {
            if(user){
                getUserActivity()
                getUserAverageSessions()
                getUserPerformance()
            }else{console.log("pas bon")}
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
