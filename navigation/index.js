import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import PcGamerNavigation from './PcGamerNavigation';
import AuthNavigator from './AuthNavigator'

const MainNavigator = () => {
  const userId = useSelector(state => state.auth.userId)

  return (
    <NavigationContainer>
<PcGamerNavigation />
      {/*userId
        ? <PcGamerNavigation />
      : <AuthNavigator /> */}
    </NavigationContainer>
  );
};

export default MainNavigator;