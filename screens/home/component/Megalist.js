import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  ScrollView,
  ToastAndroid
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Actions } from 'react-native-router-flux';
import axios from 'axios'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
const {height,width} = Dimensions.get('window')

class Megalist extends Component{
    state = {
        mega:[],
        userName:'',
        newP:[]
      };
    
   
    



   componentWillMount(){
      axios.get('https://frozen-savannah-24909.herokuapp.com/api/story')
      .then(response=>this.setState({mega:response.data}));
    }
  

  whislist(x,y,z) {
    fetch('https://frozen-savannah-24909.herokuapp.com/whishlist',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        username:global.SampleVar,
        name:x,
        price:y,
        image:z
        
      }), 
      }).then((response)=>response.json())
      .then((responseJson)=> {
        ToastAndroid.showWithGravity(
          `${x} is added to your wishlist`,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
          55,
          50
        );
      //console.log(responseJson)
        })
  
  }


  megalist(){
    return this.state.mega.map(one=>
        <View style={{marginTop:20,paddingHorizontal:20,alignItems:'center',elevation:4}}>
        
       
    
    
    
        <Animatable.View 
        animation="fadeInLeftBig"
        style={{width:width-40, height:200,marginTop:20}}>
    <Image 
           style={{flex:1,width:null,height:null,resizeMode:'cover',borderRadius:5,borderWidth:1,borderColor:'#dddddd'}}
           source={{uri:one.imageUrl}}  
    />
    </Animatable.View>

    <Animatable.Text  animation="fadeIn"
        style={{color:'#b63838',fontSize:12,fontWeight:'700'}}
        > {one.Product_Name}
         </Animatable.Text>
            {/* <Animatable.Text 
            animation="fadeIn"
            style={{fontWeight:'100',marginTop:2}}> Mens clothing </Animatable.Text> */}
            <Button block bordered style={{marginTop:10}} onPress={() => this.whislist(one.Product_Name,one.Product_Price,one.imageUrl)} >
            <Text>Add to wishlist</Text>
          </Button>
    
    </View>
    
    
      );
  }


    render() {
  return (
<View style={styles.container}>
<ScrollView  
    scrollEventThrottle={16}
    >
   
    {this.megalist()}
    
    </ScrollView>
    
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'black',
    margin:10,
}
});

export default Megalist;