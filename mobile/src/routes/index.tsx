import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import Header from "../components/Header";

import OrphanagesMap from "../pages/OrphangesMap";
import OrphangeDetail from "../pages/OrphanageDetails";
import OrphanageData from "../pages/CreateOrphanages/OrphanageData";
import SelectMapPosition from "../pages/CreateOrphanages/SelectMapPosition";

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#f2f3f5'
          }
        }}
      >
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
        <Screen 
          name="OrphanageDetails" 
          component={OrphangeDetail} 
          options={{
            headerShown: true,
            header: () => <Header title="Orphanage"/>
          }}
        />
        <Screen 
          name="OrphanageData" 
          component={OrphanageData} 
          options={{
            headerShown: true,
            header: () => <Header showCancel={true} title="Orphanage"/>
          }}
        />
        <Screen 
          name="SelectMapPosition" 
          component={SelectMapPosition} 
          options={{
            headerShown: true,
            header: () => <Header showCancel={true} title="Orphanage"/>
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
