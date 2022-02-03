import React from 'react';
import {PieChart, Pie, Legend, ResponsiveContainer,Cell, Label } from 'recharts';
import './Score.css' ;
import propTypes from 'prop-types';

/** show diet Score
 * 
 * @param {object} props 
 * @param {object} props.dataUser 
 * @returns {JSX}
 */

 export default function Score(props){
  const user=props.dataUser
  if(user){
    const scoreTab=[
      {'value': user.todayScore|| user.score},
      {'value':1-user.todayScore || 1-user.score},
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
    return(
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
              content={<CustomLabel objectif={user.todayScore|| user.score}/>}                  
            />
          </Pie>
          <Legend content={legendScore}/>
        </PieChart>
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


Score.propTypes = {
  dataUser: propTypes.object.isRequired,
};