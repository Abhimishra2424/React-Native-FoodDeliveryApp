import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {MainLayout} from '../screens';
import {COLORS, FONTS, SIZES, constants, icons, dummyData} from '../constants';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({navigation}) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1}}>
      <View style={{flex: 1, paddingHorizontal: SIZES.radius}}>
        {/* "close" */}
        <View style={{alignItems: 'flex-start', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigation.closeDrawer()}>
            <Image
              source={icons.cross}
              style={{
                height: 35,
                width: 35,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
        </View>
        {/* Profile */}
        {/* drawer Items */}
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <Drawer.Navigator
        screenOptions={{
          drawerType: 'slide',
          overlayColor: 'transparent',
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
          drawerStyle: {
            flex: 1,
            width: '65%',
            paddingRight: 20,
            backgroundColor: 'transparent',
          },
        }}
        initialRouteName="MainLayout"
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="MainLayout">
          {props => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
