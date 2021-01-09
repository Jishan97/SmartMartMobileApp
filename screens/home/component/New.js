import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';

export default class New extends Component {

  render() {
    return (
        <View style={{width:this.props.width/2-30,height:this.props.width/2-30,borderWidth:0.5,borderColor:'#dddddd',marginBottom:10}}>

       <View style={{flex:1}}>
       <Image 
        style={{flex:1,width:null,height:null,resizeMode:'cover'}}
       source={require('../../../assets/2.jpeg')} />
       </View> 

        <View sstyle={{flex:1,alignItems:'flex-start',justifyContent:'space-evenly',paddingLeft:10}}>
        <Text style={{fontSize:10,color:'#b63838'}}> Jacket </Text>
        <Text style={{fontSize:12,fontWeight:'bold'}}> Clothing </Text>
        <Text style={{fontSize:10}}> 1000/- </Text>
       </View> 

    
    </View>
    );
  }
}
