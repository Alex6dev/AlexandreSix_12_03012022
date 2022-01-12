import { Component } from 'react';
import React from 'react';
import './ChartDailyActivity.css';
import {BarChart,Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,Legend } from 'recharts';


const data = [
  {
      userId: 12,
      sessions: [
          {
              day: '2020-07-01',
              kilogram: 80,
              calories: 240
          },
          {
              day: '2020-07-02',
              kilogram: 80,
              calories: 220
          },
          {
              day: '2020-07-03',
              kilogram: 81,
              calories: 280
          },
          {
              day: '2020-07-04',
              kilogram: 81,
              calories: 290
          },
          {
              day: '2020-07-05',
              kilogram: 80,
              calories: 160
          },
          {
              day: '2020-07-06',
              kilogram: 78,
              calories: 162
          },
          {
              day: '2020-07-07',
              kilogram: 76,
              calories: 390
          }
      ]
  },
  {
      userId: 18,
      sessions: [
          {
              day: '2020-07-01',
              kilogram: 70,
              calories: 240
          },
          {
              day: '2020-07-02',
              kilogram: 69,
              calories: 220
          },
          {
              day: '2020-07-03',
              kilogram: 70,
              calories: 280
          },
          {
              day: '2020-07-04',
              kilogram: 70,
              calories: 500
          },
          {
              day: '2020-07-05',
              kilogram: 69,
              calories: 160
          },
          {
              day: '2020-07-06',
              kilogram: 69,
              calories: 162
          },
          {
              day: '2020-07-07',
              kilogram: 69,
              calories: 390
          }
      ]
  }
]

             /* */
class ChartDailyActivity extends Component {
  render(){
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
      return ( 
        <div className='ChartDailyActivity'>  
          <ResponsiveContainer>
            <BarChart 
                data={data[0].sessions}
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
  }

}

export default ChartDailyActivity;

/*
import React, { PureComponent } from 'react';


export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      
    );
  }
}

*/