import React from 'react';
import './NutritionTable.css';
import IconCalorie from'../../../assets/IconCalories.png' 
import IconProtein from'../../../assets/IconProtein.png' 
import IconGlucides from'../../../assets/IconGlucides.png' 
import IconLipides from'../../../assets/IconLipides.png' 
import propTypes from 'prop-types';

/** show card nutrition
 * 
 * @param {object} props 
 * @param {object} props.dataUser 
 * @returns {JSX}
 */

export default function NutritionTable(props){
    const user =props.dataUser
    function displayCardNutrition(type,value){
        switch (type){
            case'calorieCount':
                return (
                    <>
                        <img src={IconCalorie} className='imgNutrition' alt="Icone flamme rouge"/>
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
                        <img src={IconProtein} className='imgNutrition' alt="Icone viande bleu"/>
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
                        <img src={IconGlucides} className='imgNutrition' alt="Icone pomme jaune"/>
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
                        <img src={IconLipides} className='imgNutrition' alt="Icone hamburger"/>
                        <div className='containerText'>
                            <p className='textValueNutrition'>{value}g</p>
                            <p className='textTypeNutrition'>Lipides</p>
                        </div>
                    </>
                )
            break;
        }

    }
    if(user){
        return(
            <div className='containerNutrition'>
                <div className='containerTypeNutrition'>
                    {displayCardNutrition('calorieCount',user.keyData.calorieCount)}
                </div> 
                <div className='containerTypeNutrition'>
                    {displayCardNutrition('proteinCount',user.keyData.proteinCount)}
                </div>
                <div className='containerTypeNutrition'>
                    {displayCardNutrition('carbohydrateCount',user.keyData.carbohydrateCount)}
                </div> 
                <div className='containerTypeNutrition'>
                    {displayCardNutrition('lipidCount',user.keyData.lipidCount)}
                </div>   
            </div>    
        )
    }else{
        return ( 
            <div>
                <p>chargement</p> 
            </div>        
        )
    }
}

NutritionTable.propTypes = {
    dataUser: propTypes.object.isRequired,
};