import React from 'react'; 
import styled from 'styled-components';
import propTypes from 'prop-types';

/** show title Dashboard
 * 
 * @param {object} props 
 * @param {object} props.dataUser 
 * @returns {JSX}
 */

export default function HeaderDashboard(props){
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
    const user=props.dataUser;
    if(user){
      return ( 
        <div>
            <HeaderDashboardH1>Bonjour<HeaderDashboardSpan>{user.userInfos.firstName}</HeaderDashboardSpan></HeaderDashboardH1>
            <HeaderDashboardText>Félicitation ! Vous avez explosé vos objectifs hier 👏</HeaderDashboardText>
        </div>     
        );  
    }else{
        return(
            <div>
                <p>chargement</p> 
            </div>
        )
    }
    
}
HeaderDashboard.propTypes = {
    user: propTypes.object.isRequired,
};

