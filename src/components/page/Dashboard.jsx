import React,{ useContext} from 'react';
import { DashboardContext} from '../../CallApi/callApi.jsx';
import styled from 'styled-components';
import Error from './Error';
import ChartDailyActivity from '../DashboardComponent/ChartDailyActivity/ChartDailyActivity'
import HeaderDashboard from '../DashboardComponent/HeaderDashboard/HeaderDashboard';
import ChartSessionDuration from '../DashboardComponent/ChartSessionDuration/ChartSessionDuration';
import NutritionTable from '../DashboardComponent/NutritionTable/NutritionTable'
import ChartRadarPerformance from '../DashboardComponent/ChartRadarPerformance/ChartRadarPerformance';
import Score from '../DashboardComponent/Score/Score';
import {DashboardContextProvider} from '../../CallApi/callApi.jsx' ;

/**show Page Dashboard 
 * 
 * @returns {JSX}
 */

 export default function Dashboard(){
  const DashboardContainer= styled.section`
    position: absolute;    
    top: 93px;
    left: 10%;
    padding:1rem;
    width:86.5%;
  ` 
  const DashboardContainerBarChart= styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    `
  const context=useContext(DashboardContext)
  const {user, activity, averageSessions, performance, apiError}=context
  
  if(user){
    return ( 
      <DashboardContextProvider>
        <DashboardContainer>
          <HeaderDashboard dataUser={user}/>
          <DashboardContainerBarChart>
            <ChartDailyActivity dataActivity={activity}/>
            <NutritionTable dataUser={user}/>
            <ChartSessionDuration dataSessions={averageSessions}/>
            <ChartRadarPerformance dataPerformance={performance}/>
            <Score dataUser={user}/>
          </DashboardContainerBarChart>              
        </DashboardContainer>  
      </DashboardContextProvider>
    )   

  }else if(apiError){
    return(<Error/>)
  }else{
    return(
      <div>
        <p>chargement</p> 
      </div>   
    )
  }
}
