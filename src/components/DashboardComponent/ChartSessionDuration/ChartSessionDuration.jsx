import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,} from 'recharts';
import './ChartSessionDuration.css'
import propTypes from 'prop-types';

/**show chart session duration
 * 
 * @param {Object} props 
 * @param {Array} props.dataSessions 
 * @returns {JSX} 
 */
 export default function ChartSessionDuration(props){
    const averageSessions= props.dataSessions;
    const dayTab={
        1:'L',
        2:'M',
        3:'M',
        4:'J',
        5:'V',
        6:'S',
        7:'D',
    }
    const itemDay=(item)=>dayTab[item]
    const CustomTooltip=({active,payload})=>{
        if (active && payload && payload.length) {
            return (
              <div className="TooltipDuration">
                <p className="TooltipTextDuration">{payload[0].value} min</p>
              </div>
            );
        }
        
        return null;
    }
    if(averageSessions){
        return (  
        <div className='ChartSessionContainer'>
           <p className='textLegendSession'>Durée moyenne des sessions</p>    
            <ResponsiveContainer width="100%" height="100%">
                <LineChart 
                    width={730}
                    height={250}
                    data={averageSessions}
                    margin={{
                        top: 5, 
                        right: 30,
                        left: 20,
                        bottom: 5 
                    }}
                >
                    <XAxis 
                        dataKey="day" 
                        axisLine={false} 
                        tickLine={false} 
                        mirror={true}
                        tickFormatter={itemDay}
                        tick={{fill:'rgba(255, 255, 255, 0.504)'}}
                    />    
                    <YAxis 
                        hide
                        domain={["dataMin-10", 'dataMax + 10']}
                    />
                    <Tooltip 
                        content={<CustomTooltip/>} 
                        cursor={{stroke:'none'}}
                    />
                    <Line 
                        type="monotone" 
                        dataKey="sessionLength" 
                        stroke="#FFFFFF" 
                        dot={false} 
                        strokeWidth={3} 
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
        )

    }else{
        return(
            <div>
                <p>chargement</p> 
            </div>
        )
    }
    

}

ChartSessionDuration.propTypes = {
    averageSessions: propTypes.array.isRequired,
};