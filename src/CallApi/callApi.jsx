import {createContext, useEffect, useState} from "react"
import React from "react";  
import propTypes from 'prop-types';
import { useParams } from "react-router-dom";

const currentUser= 12
const apiUrl=`http://localhost:3010`; 
const simDataLoadingTime=0;

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
    const [user, setUser] = useState()
    const [activity, setActivity] = useState()
    const [averageSessions, setAverageSessions] = useState()
    const [performance, setPerformance] = useState()
    const [apiError, setApiError] = useState(false)
    
    const getUser = () => {
        fetch(`${apiUrl}/user/${currentUser}`)
            .then((response => response.json()))
            .then(data => setUser(data.data))
            .catch((error) => setApiError(true))
    }

    useEffect(() => {
        if (simDataLoadingTime === 0) getUser()
        else setTimeout(getUser, simDataLoadingTime)
    }, [])

    const getUserActivity = () => {
        fetch(`${apiUrl}/user/${user.id}/activity`)
            .then((response => response.json()))
            .then(data => setActivity(data.data.sessions))
            .catch((error) => setApiError(true))
    }

    const getUserAverageSessions = () => {
        fetch(`${apiUrl}/user/${user.id}/average-sessions`)
            .then((response => response.json()))
            .then(data => setAverageSessions(data.data.sessions))
            .catch((error) => setApiError(true))
    }


    const getUserPerformance = () => {
        fetch(`${apiUrl}/user/${user.id}/performance`)
            .then((response => response.json())) 
            .then(data => {
                setPerformance(data.data.data)
            })
            .catch((error) => setApiError(true))
    }

    useEffect(() => {
        if (!user) return
        const getUserData = () => {
            getUserActivity()
            getUserAverageSessions()
            getUserPerformance()
        }
        if (simDataLoadingTime === 0) getUserData()
        else setTimeout(getUserData, simDataLoadingTime)
    }, [user])

    return (
        <DashboardContext.Provider value={{user, activity, averageSessions, performance, apiError}}>
            {children}
        </DashboardContext.Provider>
    )
}
DashboardContextProvider.propTypes = {
    children: propTypes.element.isRequired
  };
