import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ListView from './list_view';
import RiderLog from './rider_log';


class TaxiList extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ListView />
      </View>
    );
  }
}
const TaxiTab = createStackNavigator({
    Home: TaxiList,
  }, {
  defaultNavigationOptions: {
    title: "조회 / 모집",
  }
});

class CarpoolList extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Carpool List Screen</Text>
      </View>
    )
  }
}
const CarpoolTab = createStackNavigator({
    Home: CarpoolList,
  }, {
  defaultNavigationOptions: {
    title: "조회 / 모집",
  }
});

class RideHistory extends Component {
  render() {
    return (
      <View style={{ flex: 1,}}>
        <RiderLog />
      </View>
    )
  }
}
const RideHistoryTab = createStackNavigator({
    Home: RideHistory,
  }, {
  defaultNavigationOptions: {
    title: "탑승 내역",
  }
});

class MyPage extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>MyPage Screen</Text>
      </View>
    )
  }
}
const MyPageTab = createStackNavigator({
    Home: MyPage,
  }, {
  defaultNavigationOptions: {
    title: "설정",
  }
});

const TabNavigator = createBottomTabNavigator({
  TaxiList: {
    screen: TaxiTab,
    navigationOptions: {
      title: "택시",
    },
  },
  CarpoolList: {
    screen: CarpoolTab,
    navigationOptions: {
      title: "카풀",
    },
  },
  RideHistory: {
    screen: RideHistoryTab,
    navigationOptions: {
      title: "내역",
    },
  },
  MyPage: {
    screen: MyPageTab,
    navigationOptions: {
      title: "설정",
    },
  },
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Icon;
      let iconName;
      
      switch (routeName) {
      case 'TaxiList':
        iconName = 'taxi';
        break;
      case 'CarpoolList':
        iconName = 'car';
        break;
      case 'RideHistory':
        iconName = 'clock';
        break;
      case 'MyPage':
        iconName = 'sliders-h';
        break;
      }

      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'skyblue',
    inactiveTintColor: 'gray',
  },
});

export default createAppContainer(TabNavigator);