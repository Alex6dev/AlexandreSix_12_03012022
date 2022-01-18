import { Component,useState,useEffect,useParams } from 'react';
import React from 'react';
import styled from 'styled-components';
import Error from './Error';
import ChartDailyActivity from '../DashboardComponent/ChartDailyActivity/ChartDailyActivity'
import HeaderDashboard from '../DashboardComponent/HeaderDashboard/HeaderDashboard';
import ChartSessionDuration from '../DashboardComponent/ChartSessionDuration/ChartSessionDuration';
import NutritionTable from '../DashboardComponent/NutritionTable/NutritionTable'
import ChartRadarPerformance from '../DashboardComponent/ChartRadarPerformance/ChartRadarPerformance';
import Score from '../DashboardComponent/Score/Score';
import callApiFunction from '../../CallApi/callApi.jsx'; 
console.log(callApiFunction())
class Dashboard extends Component { 
  render(){
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
    
    /*const {id}= this.props.match.params
    console.log(id)
    const data =callApiFunction(`./dataAverage.json`,id)
    console.log(data)
    */
    return ( 
        <DashboardContainer>
          <HeaderDashboard />
          <DashboardContainerBarChart>
            <ChartDailyActivity />
            <NutritionTable />
            <ChartSessionDuration />
            <ChartRadarPerformance />
            <Score/>
          </DashboardContainerBarChart>
                
        </DashboardContainer>  
   
      )
  }

}

export default Dashboard;
/*

*/