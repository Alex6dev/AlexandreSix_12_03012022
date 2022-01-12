import { Component } from 'react';
import React from 'react';
import './NutritionTable.css';
import IconCalorie from'../../../assets/IconCalories.png' 
import IconProtein from'../../../assets/IconProtein.png' 
import IconGlucides from'../../../assets/IconGlucides.png' 
import IconLipides from'../../../assets/IconLipides.png' 

const data= [
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
class NutritionTable extends Component {
  render(){ 
    function displayCardNutrition(type,value){
        switch (type){
            case'calorieCount':
                return (
                    <>
                        <img src={IconCalorie} className='imgNutrition'/>
                        <div className='containerText'>
                            <p className='textValueNutrition'>{value}kCarl</p>
                            <p className='textTypeNutrition'> Calories</p>
                        </div>
                    </>
                )
            break;
            
            case'proteinCount':
                return (
                    <>
                        <img src={IconProtein} className='imgNutrition'/>
                        <div className='containerText'>
                            <p className='textValueNutrition'>{value}g</p>
                            <p className='textTypeNutrition'> Protein</p>
                        </div>
                    </>
                )
            break;
            
            case'carbohydrateCount':
                return (
                    <>
                        <img src={IconGlucides} className='imgNutrition'/>
                        <div className='containerText'>
                            <p className='textValueNutrition'>{value}g</p>
                            <p className='textTypeNutrition'> Glucides</p>
                        </div>
                    </>
                )
            break;
            
            case'lipidCount':
                return (
                    <>
                        <img src={IconLipides} className='imgNutrition'/>
                        <div className='containerText'>
                            <p className='textValueNutrition'>{value}g</p>
                            <p className='textTypeNutrition'>Lipides</p>
                        </div>
                    </>
                )
            break;
        }

    }
    return ( 
        <div className='containerNutrition'>
            <div className='containerTypeNutrition'>
                {displayCardNutrition('calorieCount',data[0].keyData.calorieCount)}
            </div> 
            <div className='containerTypeNutrition'>
                {displayCardNutrition('proteinCount',data[0].keyData.proteinCount)}
            </div>
            <div className='containerTypeNutrition'>
                {displayCardNutrition('carbohydrateCount',data[0].keyData.carbohydrateCount)}
            </div> 
            <div className='containerTypeNutrition'>
                {displayCardNutrition('lipidCount',data[0].keyData.lipidCount)}
            </div>   
        </div>
    )
   
  }

}

export default NutritionTable;