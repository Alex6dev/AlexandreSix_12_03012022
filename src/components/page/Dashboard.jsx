import { Component } from 'react';
import styled from 'styled-components';

import ContentsDashboard from '../ContentsDashboard/ContentsDashboard';
import HeaderDashboard from '../ContentsDashboard/HeaderDashboard/HeaderDashboard';

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
    `
      
      return ( 
        <DashboardContainer>
          <HeaderDashboard user={dataUser}/>
          <ContentsDashboard />    
        </DashboardContainer>     
    );
  }

}

export default Dashboard;