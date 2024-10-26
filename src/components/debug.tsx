import {
  DEBUG,
  STEP1,
  STEP2,
  STEP3,
  STEP4,
  SUMMARY,
  RECIPE
} from '../i18n/constants';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as CookingLabSlice from '../redux/cookingLabSlice';

const Debug = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const DEBUG_CONFIG = {
    cuisine: 'asian',
    mealType: 'lunch',
    diet: 'low-fat',
    health: 'peanut-free'
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  function jumpStep1(){
    dispatch(CookingLabSlice.setCuisine(DEBUG_CONFIG.cuisine));
    navigate('/step1');
  }

  function jumpStep2(){
    dispatch(CookingLabSlice.setCuisine(DEBUG_CONFIG.cuisine));
    dispatch(CookingLabSlice.setMealType(DEBUG_CONFIG.mealType));
    navigate('/step2');
  }

  function jumpStep3(){
    dispatch(CookingLabSlice.setCuisine(DEBUG_CONFIG.cuisine));
    dispatch(CookingLabSlice.setMealType(DEBUG_CONFIG.mealType));
    dispatch(CookingLabSlice.setDiet(DEBUG_CONFIG.diet));
    navigate('/step3');
  }

  function jumpStep4(){
    dispatch(CookingLabSlice.setCuisine(DEBUG_CONFIG.cuisine));
    dispatch(CookingLabSlice.setMealType(DEBUG_CONFIG.mealType));
    dispatch(CookingLabSlice.setDiet(DEBUG_CONFIG.diet));
    dispatch(CookingLabSlice.setHealth(DEBUG_CONFIG.health));
    navigate('/step4');
  }

  function jumpSummary(){
    dispatch(CookingLabSlice.setCuisine(DEBUG_CONFIG.cuisine));
    dispatch(CookingLabSlice.setMealType(DEBUG_CONFIG.mealType));
    dispatch(CookingLabSlice.setDiet(DEBUG_CONFIG.diet));
    dispatch(CookingLabSlice.setHealth(DEBUG_CONFIG.health));
    dispatch(CookingLabSlice.setEditing(true));
    navigate('/summary');
  }

  function jumpRecipe(){
    dispatch(CookingLabSlice.setCuisine(DEBUG_CONFIG.cuisine));
    dispatch(CookingLabSlice.setMealType(DEBUG_CONFIG.mealType));
    dispatch(CookingLabSlice.setDiet(DEBUG_CONFIG.diet));
    dispatch(CookingLabSlice.setHealth(DEBUG_CONFIG.health));
    dispatch(CookingLabSlice.setEditing(true));
    navigate('/recipe');
  }

  return (
    <div>
      <button className="btn btn-dark cooking-lab-btn" onClick={toggleVisibility}>
        {DEBUG}
      </button>
      {isVisible && (
        <div className="debug-content">
          <p className="debug-item" onClick={jumpStep1}>{STEP1}</p>
          <p className="debug-item" onClick={jumpStep2}>{STEP2}</p>
          <p className="debug-item" onClick={jumpStep3}>{STEP3}</p>
          <p className="debug-item" onClick={jumpStep4}>{STEP4}</p>
          <p className="debug-item" onClick={jumpSummary}>{SUMMARY}</p>
          <p className="debug-item" onClick={jumpRecipe}>{RECIPE}</p>
        </div>
      )}
    </div>
  );
};

export default Debug;