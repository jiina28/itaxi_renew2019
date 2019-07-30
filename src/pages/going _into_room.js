import React, { Component } from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import TaxiElement from '../components/taxiElement';
import {seatImg} from '../variable/assets';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import TaxiList from '../pages/taxiList';
import ModalControl from '../variable/modalControl';


export default class intoRoom extends Component{
  constructor(props){
      super(props);
  }

    render(){
        const seat_img=seatImg;
        return(
            
            <View style={styles.list}>
                <View style={styles.top}>
                    <Text style={{color:'gray',fontSize:15 }}>방들어가기</Text>
                </View>
                <View style={styles.calendar}>
                    <TaxiElement time="13:20" from="한동대학교" to="포항역"/>
                </View>
                <View style={styles.time_person_bag}>
                    <View style={styles.flextwo}>
                        <Text style={{color:'gray' }}>시간</Text>
                    </View>
                    <View style={{flex:5,justifyContent:'center',alignItems:'center',}}>
                        <Text style={{color:'#4dabf7',fontSize:25,}}>16:25</Text>
                    </View>
                    <View style={{flex:1,}}></View>
                </View>
                <View style={styles.time_person_bag}>
                    <View style={styles.flextwo}>
                        <Text style={{color:'gray' }}>나의 캐리어</Text>
                    </View>
                    <View style={{flex:5,justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',}}>
                        <Icon name="numeric-1-circle-outline" size={30} color="#4dabf7"/>
                        <Icon name="numeric-2-circle-outline" size={30} color="#4dabf7"/>
                        <Icon name="numeric-3-circle-outline" size={30} color="#4dabf7"/>
                    </View>
                    <View style={{flex:1,}}></View>
                </View>
                <View style={styles.button}>
                  <TouchableOpacity onPress={() => {
                      ModalControl.modalVisible=false;
                      this.props.navigation.navigate('TaxiRoom')
                    }}>
                    <Text style={{color:'#4dabf7',fontSize:17 }}>확인</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                      ModalControl.modalVisible=false;
                      this.props.navigation.goBack();
                    }}>
                    <Text style={{color:'#4dabf7',fontSize:17 }}>취소</Text>
                  </TouchableOpacity>
                </View>
            </View>
        )
    }
  }
  
  const styles=StyleSheet.create({
    list:{
        height:400,
        backgroundColor:'white',
        width:300,
        margin:20,
        marginLeft:37,
        shadowColor:'gray',
        shadowOpacity:0.3,
        elevation: 3,
        flexDirection:'column',
      },
      flextwo:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
      },
      site:{
        width:30,
        height:30,
        margin:10
      },
      top:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      calendar:{
        flex:3,
        margin:5
      },
      time_person_bag:{
        flex:2,
        flexDirection:'row',
      },
      button:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginHorizontal: 50,
      }
    })


