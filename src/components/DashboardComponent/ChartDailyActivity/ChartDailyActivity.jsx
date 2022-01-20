import React from 'react';
import './ChartDailyActivity.css';
import {BarChart,Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,Legend } from 'recharts';
import propTypes from 'prop-types';


/**show chart daily activity 
 * 
 * @param {Object} props 
 * @param {Array} props.dataActivity
 * @returns {JSX}
 */

export default function ChartDailyActivity(props){

    const activity=props.dataActivity;
    const payload=[
        {value:'Poids(kg)',type:'pointsN',id:'1'},
        {value:'Calories brûlées(kCal)',type:'pointsR', id:'2'}
    ]
    const renderLegend=()=>{
        return (
            <div className='containerLegend'>
                <h3>Activité quotidienne</h3>
               <ul className='listLegend'>
                    {
                        payload.map((elt)=>(
                            <li key={`item-${elt.id}`} className={`${elt.type}`} >
                                <p className='listLegendText'>{elt.value}</p>
                            </li> 
                        ))   
                    }     
                </ul> 
            </div>
            
        )
    }
    const tickDate=(value)=>(new Date(value)).getDate()
    const CustomTooltip=({active,payload})=>{
        if (active && payload && payload.length) {
            return (
              <div className="Tooltip">
                <p className="TooltipText">{`${payload[0].value} kg`}</p>
                <p className="TooltipText">{`${payload[1].value} Kcal`}</p>
              </div>
            );
        }
        
        return null;
    }
    if(activity){
        return ( 
            <div className='ChartDailyActivity'>  
              <ResponsiveContainer>
                <BarChart 
                    data={activity}
                    margin={{
                        top: 20,
                        left:5
                    }}
                    >
                  <CartesianGrid vertical={false} />
                  <XAxis  
                    dataKey='day' 
                    tickLine={false}
                    tickFormatter={tickDate}
                    />
                  <YAxis 
                    dataKey="kilogram" 
                    yAxisId='kilogram'
                    orientation='right'
                    axisLine={false}
                    tickLine={false} 
                    domain={['dataMin-2','dataMax+2']}
                    tickCount={5}
                  />
                  <YAxis 
                    dataKey="calories"  
                    yAxisId="calories"
                    domain={['dataMin-100','dataMax+100']}
                    hide={true} 
                   />
                  
                  <Tooltip content={<CustomTooltip/>}/>
                  <Legend content={renderLegend}  verticalAlign='top' height={36}  />
                  <Bar dataKey="kilogram" yAxisId='kilogram' fill="#282d30" barSize={10}  radius={[5,5,0,0]}/>
                  <Bar dataKey="calories" yAxisId='calories'  fill="#e60000" barSize={10} radius={[5,5,0,0]}/> 
                </BarChart> 
              </ResponsiveContainer>
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
ChartDailyActivity.propTypes = {
    activity: propTypes.array.isRequired,
};