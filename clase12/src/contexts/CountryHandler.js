import axios from 'axios';
import React, {createContext, useReducer, useState} from 'react';

export const CountryContext = createContext();

const countryReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COUNTRY': {
      return {
        ...state,
        country: action.country,
        slug: action.slug,
      };
    }
    case 'ADD_COUNTRY_DATA':
      return {
        ...state,
        ...action.countryData,
      };
    case 'CLEAN_DATA':
      return {
        ...state,
        confirmed: 0,
        confirmedPoints: [],
        recovered: 0,
        recoveredPoints: [],
        deaths: 0,
        deathsPoints: [],
        active: 0,
        activePoints: [],
      };
    default:
      return state;
  }
};

const defaultState = {
  country: null,
  slug: null,
  confirmed: null,
  confirmedPoints: [],
  recovered: null,
  recoveredPoints: [],
  deaths: null,
  deathsPoints: [],
  active: null,
  activePoints: [],
};

const CountryHandler = ({children}) => {
  const [states, dispatch] = useReducer(countryReducer, defaultState);
  const [isLoading, updateIsLoading] = useState(false);

  const getLastValue = (currentData = [], key) => {
    const lastValue = currentData.slice(-1); // ultimo objeto del arreglo

    //[{}].length = 1
    if (lastValue.length) {
      return lastValue[0][key];
    }
    return 0;
  };

  const fetchDataByCountry = async (countryName, countrySlug) => {
    updateIsLoading(true);

    dispatch({
      type: 'CLEAN_DATA',
    });

    try {
      const {data, status} = await axios.get(
        `https://api.covid19api.com/country/${countrySlug}`,
      );

      if (status === 200) {
        dispatch({
          type: 'ADD_COUNTRY',
          country: countryName,
          slug: countrySlug,
        });

        const countryData = {
          confirmed: getLastValue(data, 'Confirmed'),
          confirmedPoints: data.map(currentData => currentData.Confirmed),
          recovered: getLastValue(data, 'Recovered'),
          recoveredPoints: data.map(currentData => currentData.Recovered),
          deaths: getLastValue(data, 'Deaths'),
          deathsPoints: data.map(currentData => currentData.Deaths),
          active: getLastValue(data, 'Active'),
          activePoints: data.map(currentData => currentData.Active),
        };

        dispatch({
          type: 'ADD_COUNTRY_DATA',
          countryData,
        });
        // navigation.navigate('Home', {countryName, data});
        updateIsLoading(false);
        return;
      }

      updateIsLoading(false);
    } catch {
      updateIsLoading(false);
    }
  };

  return (
    <CountryContext.Provider
      value={{
        isLoading,
        fetchDataByCountry,
        states,
      }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryHandler;
