import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import i18n from '../../i18n/locales';

import HomeStack from '../../navigation/HomeStack';
import IconHome from '../SvgIcons/HomeIcon/HomeIcon';
import { ScreenNames } from '../../screens/ScreenNames';
import ExploreIcon from '../SvgIcons/ExploreIcon/ExploreIcon';
import PatientsStack from '../../navigation/PatientsStack';
import MedsStack from '../../navigation/MedsStack';
import FireIcon from '../SvgIcons/FireIcon/FireIcon';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreenNames.Home}
      shifting={true}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name={i18n.t('HOME')}
        component={HomeStack}
        options={{
          tabBarIcon: () => {
            return <IconHome />;
          },
        }}
      />
      <Tab.Screen
        name={i18n.t('PATIENTS')}
        component={PatientsStack}
        options={{
          tabBarIcon: () => {
            return <ExploreIcon />;
          },
        }}
      />
      <Tab.Screen
        name={i18n.t('MEDS')}
        component={MedsStack}
        options={{
          tabBarIcon: () => {
            return <FireIcon />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
