
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import  FaceBook from './Screens/fb';
import  InstaGram from './Screens/insta';

export default class App extends React.Component {
 render(){
  return (
    <Appcontainer/>
  );
}}
const createNavigator = createBottomTabNavigator({
 FaceBook:FaceBook,
 InstaGram:InstaGram,

})
var Appcontainer = createAppContainer(createNavigator);
