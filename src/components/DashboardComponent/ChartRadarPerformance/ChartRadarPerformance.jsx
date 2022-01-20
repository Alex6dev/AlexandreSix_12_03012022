import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from 'recharts';
import './ChartRadarPerformance.css' 
import propTypes from 'prop-types';

/**show chart radar performance
 * 
 * @param {Object} props 
 * @param {Array} props.dataPerformance 
 * @returns {JSX}
 */
 export default function ChartRadarPerformance(props){
    const performance=props.dataPerformance;
    const kindTab=[
            'Cardio',
            'Energie',
            'Endurance',
            'Force',
            'Vitesse',
            'Intensité'
        ]
    const tickKind=(value)=>kindTab[value-1]    
    if(performance){
        return (  
            <div className='ChartRadarPerformanceContainer'>
                <ResponsiveContainer
                    width="100%" 
                    height="100%"
                    >
                    <RadarChart 
                        cx="48%" 
                        cy="50%" 
                        outerRadius="60%" 
                        data={performance}
                        >
                        <PolarGrid radialLines={false}/>
                        <PolarAngleAxis 
                            dataKey="kind" 
                            tickFormatter={tickKind}
                            tick={{
                                fill:'#ffffff',
                                fontSize:'0.65rem'
                            }}
                        />
                        <Radar 
                            dataKey="value" 
                            fill="#FF0101" 
                            fillOpacity={0.7} 
                            />
                    </RadarChart>
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


ChartRadarPerformance.propTypes = {
    performance: propTypes.array.isRequired,
};