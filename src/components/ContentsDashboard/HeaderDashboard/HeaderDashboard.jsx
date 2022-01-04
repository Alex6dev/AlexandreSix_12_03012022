import { Component } from 'react';
import styled from 'styled-components';

let USER_MAIN_DATA =[
    {
        id: 12,
        userInfos: {
            firstName: 'Karl',
            lastName: 'Dovineau',
            age: 31,
        },
        todayScore: 0.12,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50
        }
    },
    {
        id: 18,
        userInfos: {
            firstName: 'Cecilia',
            lastName: 'Ratorez',
            age: 34,
        },
        score: 0.3,
        keyData: {
            calorieCount: 2500,
            proteinCount: 90,
            carbohydrateCount: 150,
            lipidCount: 120
        }
    }
]
class HeaderDashboard extends Component {
  constructor(props){
    super(props)
    this.state={
      dataUser: []  
    } 
  }
  
  render(){
    const HeaderDashboardH1=styled.h1`
        font-size:48px;
        font-weight:500;
        margin:0;
    `      
    const HeaderDashboardSpan=styled.span`
        color: rgb(255, 0, 0);

    `
    const HeaderDashboardText=styled.p`
        font-weight:400;
        font-size:18px;
    `
    

      return ( 
        <div>
            <HeaderDashboardH1>Bonjour<HeaderDashboardSpan>{USER_MAIN_DATA[0].userInfos.firstName}</HeaderDashboardSpan></HeaderDashboardH1>
            <HeaderDashboardText>Félicitation ! Vous avez explosé vos objectifs hier 👏</HeaderDashboardText>
        </div>     
    );
  }

}

export default HeaderDashboard;