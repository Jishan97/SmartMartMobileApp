import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
Dimensions,
TouchableOpacity,
ToastAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { Actions } from 'react-native-router-flux';
const {height,width} = Dimensions.get('window');
const {width:WIDTH} = Dimensions.get('window')

const Like = (props) => {
  //  console.log(props.album.Product_Price);
 insertToLike=()=>{
     console.log(global.SampleVar);
     console.log(props.album.Product_Type);

    
    fetch('https://frozen-savannah-24909.herokuapp.com/likes  ',{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
            username: global.SampleVar,
          likes:props.album.Product_Type
          
        }), 
        })
        .then((response)=>response.json())
        .then((responseJson)=> {
        
            //console.log(responseJson)
              })
              
       Actions.home();
       ToastAndroid.showWithGravity(
        `you liked ${props.album.Product_Name}`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
        25,
        50
      );
       
}



  return (
    <View style={styles.container}>


<View style={{marginTop:20,paddingHorizontal:20,alignItems:'center'}}>
    <Animatable.Text  animation="fadeIn"
    style={{color:'#b63838',fontSize:20,fontWeight:'700'}}
    > Mega Sale
     </Animatable.Text>
        <Animatable.Text 
        animation="fadeIn"
        style={{fontWeight:'100',marginTop:5}}> On selected products only </Animatable.Text>



    <Animatable.View 
    animation="fadeIn" easing="ease-in"
    style={{width:width-40, height:300,marginTop:20}}>
<Image 
       style={{flex:1,width:null,height:null,resizeMode:'cover',borderRadius:5,borderWidth:1,borderColor:'#dddddd'}}
       source={{uri:props.album.imageUrl}}

/>


</Animatable.View>
</View>


{/* this is products list */}


<View style={{justifyContent:'center',marginTop:5,alignItems:'center'}}>

{/* <Text>{props.name}</Text>s */} 

<Text> Name: {props.album.Product_Name}</Text>
<Text>Price: {props.album.Product_Price}inr</Text>

</View>


{/* this is products list */}

<View style={{marginTop:20,paddingHorizontal:20,justifyContent:'center',flexDirection:'row'}}>

<View >
<TouchableOpacity style={styles.btnY}
onPress={this.insertToLike}
>
<Text style={{color:'white'}} > Yes!
</Text>
    </TouchableOpacity>
    </View>


    <View >
    <TouchableOpacity style={styles.btnN}
onPress={()=> Actions.pop()}
>
<Text style={{color:'white'}}> No! </Text>

    </TouchableOpacity>
    </View>


    </View>



    <View 
    style={{marginTop:20,paddingHorizontal:20,justifyContent:'center',flexDirection:'row'}}>
<TouchableOpacity style={styles.btn1}
onPress={()=> Actions.pop()}
>
<Text style={styles.text} ><Icon name="close" color="white"   size={30} />
</Text>

    </TouchableOpacity>

    </View>








    </View>
  );
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
  btnY:{
    width:80,
    height:45,
    borderRadius:25,
    backgroundColor:'#5AB5B2',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    marginLeft: 5,
    elevation:4

},
btnN:{
    width:80,
    height:45,
    borderRadius:25,
    backgroundColor:'#ED2939',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    marginLeft: 5,
    elevation:4

},
btn1:{
    width:100,
    height:45,
    borderRadius:25,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
    marginTop:1,
    marginLeft: 5,
    elevation:4,
    color:'black'

}
});

export default Like;