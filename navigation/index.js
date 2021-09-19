import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from './homeNavigator';


const MainNavigator = () => {
  const userId = useSelector(state => state.auth.userId)

  return (
    <NavigationContainer>
        <HomeNavigator></HomeNavigator>

      {/*userId
        ? <PcGamerNavigation />
      : <AuthNavigator />*/}
    </NavigationContainer>
  );
};

export default MainNavigator;