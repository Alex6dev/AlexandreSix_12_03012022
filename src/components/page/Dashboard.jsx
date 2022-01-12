import { Component } from 'react';
import React from 'react';
import styled from 'styled-components';
import Error from './Error';
import ChartDailyActivity from '../DashboardComponent/ChartDailyActivity/ChartDailyActivity'
import HeaderDashboard from '../DashboardComponent/HeaderDashboard/HeaderDashboard';
import ChartSessionDuration from '../DashboardComponent/ChartSessionDuration/ChartSessionDuration';
import NutritionTable from '../DashboardComponent/NutritionTable/NutritionTable'
import ChartRadarPerformance from '../DashboardComponent/ChartRadarPerformance/ChartRadarPerformance';
import Score from '../DashboardComponent/Score/Score';
class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state={
      error: null,
      isLoaded: false,
      dataId: []  
    }
  }
  componentDidMount() {
    const {id}= this.props.match.params
    fetch(process.env.PUBLIC_URL + "/dataUser.json")
        .then((res) => res.json())
        .then( (result) => {
            this.setState({
                isLoaded: true,
                dataId: result.filter(elt=> elt.id==id)
            })}, 
                
            (error) => {
              this.setState({
                  isLoaded: true,
                  error
              })
            },
            
        )
  }
  render(){
    const dataUser=this.state.dataId[0]
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

    if(dataUser){
      return ( 
        <DashboardContainer>
          <HeaderDashboard user={dataUser}/>
          <DashboardContainerBarChart>
            <ChartDailyActivity />
            <NutritionTable />
            <ChartSessionDuration />
            <ChartRadarPerformance />
            <Score/>
          </DashboardContainerBarChart>
              
        </DashboardContainer>     
      )
    }else{
      return(
      <Error/>
      );

    }
  }

}

export default Dashboard;
/*

*/