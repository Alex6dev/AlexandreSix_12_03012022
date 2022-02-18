import React,{ useContext} from 'react';
import {DashboardContext} from '../../remote/callApi.jsx';
import styled from 'styled-components';
import Error from './Error';
import ChartDailyActivity from '../DashboardComponent/ChartDailyActivity/ChartDailyActivity'
import HeaderDashboard from '../DashboardComponent/HeaderDashboard/HeaderDashboard';
import ChartSessionDuration from '../DashboardComponent/ChartSessionDuration/ChartSessionDuration';
import NutritionTable from '../DashboardComponent/NutritionTable/NutritionTable'
import ChartRadarPerformance from '../DashboardComponent/ChartRadarPerformance/ChartRadarPerformance';
import Score from '../DashboardComponent/Score/Score';

/**show Dashboard Content
 * 
 * @returns {JSX}
 */

 export default function DashboardContent(){
  const DashboardContainer= styled.section`
    position: absolute;    
    top: 95px;
    left: 10%;
    padding:1rem;
    width:86%;
    height:80%;  
  ` 
  const DashboardContainerBarChart= styled.div`
    display:flex;
    width:100%;
    height:90%;
    flex-direction:row;
    flex-wrap:wrap;
    `
  const context=useContext(DashboardContext)
  const {user, activity, averageSessions, performance, apiError}=context
  
  if(user){
    return ( 
      <DashboardContainer>
        {user && (<HeaderDashboard dataUser={user}/>)}
        <DashboardContainerBarChart>
          {activity && (<ChartDailyActivity dataActivity={activity}/>)}
          {user &&(<NutritionTable dataUser={user}/>)}
          { averageSessions && (<ChartSessionDuration dataSessions={averageSessions}/>)}
          {performance && (<ChartRadarPerformance dataPerformance={performance}/>)}
          {user && (<Score dataUser={user}/>)}
        </DashboardContainerBarChart>              
      </DashboardContainer>
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
