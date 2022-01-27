import React from 'react';
import {DashboardContextProvider} from '../../CallApi/callApi.jsx' ;
import DashboardContent from './DashboardContent'

/**show Page Dashboard 
 *  
 * @returns {JSX}
 */

 export default function Dashboard(){
  
  
  return ( 
    <DashboardContextProvider>
      <DashboardContent/>
    </DashboardContextProvider>
  )   

}
