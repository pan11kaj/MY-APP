import React from 'react';
import { Text, View } from 'react-native';

export default class InstaGram extends React.Component {
  render(){
    return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text style={{color:'red',fontSize:30,fontFamily:'fantasy'}}>InstaGram</Text>
    </View>
  );}
}