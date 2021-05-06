import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = ({user, password}) => {
  console.log({user, password});
  return dispatch => {
    dispatch({
      type: 'LOADING',
      isLoading: true,
    });

    setTimeout(() => {
      if (user === 'test' && password === 'test') {
        AsyncStorage.setItem('user', user);
        AsyncStorage.setItem('password', password);

        dispatch({
          type: 'LOGIN_IN',
        });
      }

      dispatch({
        type: 'LOADING',
        isLoading: false,
      });
    }, 2000);
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

// export const setLoading = isLoading => {
//   return {
//     type: 'LOADING',
//     loading: isLoading,
//   };
// };
