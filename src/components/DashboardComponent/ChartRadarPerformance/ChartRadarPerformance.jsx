import { Component } from 'react';
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import './ChartRadarPerformance.css' 

const data = [
    {
        userId: 12,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 80,
                kind: 1
            },
            {
                value: 120,
                kind: 2
            },
            {
                value: 140,
                kind: 3
            },
            {
                value: 50,
                kind: 4
            },
            {
                value: 200,
                kind: 5
            },
            {
                value: 90,
                kind: 6
            }
        ]
    },
    {
        userId: 18,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 200,
                kind: 1
            },
            {
                value: 240,
                kind: 2
            },
            {
                value: 80,
                kind: 3
            },
            {
                value: 80,
                kind: 4
            },
            {
                value: 220,
                kind: 5
            },
            {
                value: 110,
                kind: 6
            }
        ]
    }
]
  
class ChartRadarPerformance extends Component {

    render(){
        const kindTab=[
            'Cardio',
            'Energie',
            'Endurance',
            'Force',
            'Vitesse',
            'Intensité'
        ]
        const tickKind=(value)=>kindTab[value-1]    
        
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
                        data={data[0].data}
                        >
                        <PolarGrid />
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

    }

}

export default ChartRadarPerformance;