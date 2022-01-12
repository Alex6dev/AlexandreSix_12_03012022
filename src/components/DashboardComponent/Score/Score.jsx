import { Component } from 'react';
import React from 'react';
import {PieChart, Pie, Legend, ResponsiveContainer,Cell, Label } from 'recharts';
import './Score.css' 
let data =[
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
  
class Score extends Component {

    render(){   
        
        const scoreTab=[
            {'value':data[0].todayScore},
            {'value':1-data[0].todayScore},
        ]
        const pieFull=[
            {'value':1}
        ]
        const CustomLabel = ({ viewBox, objectif = 0 }) => {
            const { cx, cy } = viewBox;
            return (
              <React.Fragment>
                <text x={cx - 25} y={cy - 5}>
                  <tspan
                    style={{
                      fontWeight: 700,
                      fontSize: "26px",
                      fill: "#00000",
                      fontFamily: "Roboto"
                    }}
                  >
                    {objectif*100}%
                  </tspan>
                </text>
                <text x={cx - 30} y={cy + 15}>
                  <tspan
                    style={{
                      fontSize: "16px",
                      fill: "#A9A9A9",
                      fontFamily: "Roboto",
                      width:'1px'
                    }}
                  >
                    de votre
                  </tspan>
                </text>                
                <text x={cx - 28} y={cy + 35}>
                  <tspan
                    style={{
                      fontSize: "16px",
                      fill: "#A9A9A9",
                      fontFamily: "Roboto",
                      width:'1px'
                    }}
                  >
                    objectif
                  </tspan>
                </text>
              </React.Fragment>
            );
          };
          function legendScore(){
            return <p className='LegendScore'>Score</p>
        }

        return (  
            <div className='containerScore' > 
                <ResponsiveContainer 
                    width="100%" 
                    height="100%"
                >
                    <PieChart 
                        width={400} 
                        height={400}
                    >
                        <Pie 
                            data={pieFull}   
                            dataKey="value" 
                            cx="50%" cy="50%" 
                            outerRadius={70} 
                            fill="#ffffff"
                            startAngle={90}
                            endAngle={450} 
                        />

                        <Pie 
                            data={scoreTab}  
                            dataKey='value' 
                            cx="50%"
                            cy="50%" 
                            innerRadius={70} 
                            outerRadius={80} 
                            startAngle={90}
                            endAngle={450}
                            cornerRadius={5}
                            fill='#ffffff'
                        >
                            {scoreTab.map((entry,index)=>{
                                if(index === 1 || index === 2) {
                                    return <Cell key={`cell-${index}`} fill="#ffffff" />;
                                  }
                                  return <Cell key={`cell-${index}`} fill="#FF0000"  radius={[5,5,5,5]}/>;
                            })}
                            <Label
                                content={<CustomLabel objectif={data[0].todayScore}/>}
                                
                            />
                        </Pie>
                        <Legend content={legendScore}/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        )

    }

}

export default Score;
/*
<Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
*/