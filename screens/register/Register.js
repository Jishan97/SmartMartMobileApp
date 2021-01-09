import React, { Component } from 'react';
import { View, Text,StyleSheet,ImageBackground,Image,TextInput,Dimensions,TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux'
import bgImage from '../../assets/login_background.jpg'
import logo from '../../assets/logo.png'

const {width:WIDTH} = Dimensions.get('window')

 class Register extends Component {
  state = {

    userName:'',
    userEmail:'',
    userPassword:''

  };

  userRegister = ()=>{
    //alert('sf');
    const {userName} = this.state;
    const {userEmail} = this.state;
    const {userPassword} = this.state;
  console.log('start');

  console.log(userName);
  console.log(userEmail);
  console.log(userPassword);

    fetch('https://sheltered-crag-29551.herokuapp.com/api/genres',{
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      name:userName,
      email:userEmail,
      password:userPassword
    }), 
    })
    .then((response)=>response.json())
    .then((responseJson)=> {
      
      if(responseJson === 'Registration done!') {
        Actions.login();
        alert(responseJson);
      }
    })
   
    
  }




  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
{/* <Text style={styles.heading}> SmartMart </Text> */}
            <View style={styles.box}>
            
     <View style={styles.logoContainer}>
<Image source={logo} style={styles.logo} />
<Text style={styles.logoText}> Register </Text>
     </View>


<View>

<TextInput  
style={styles.input}
placeholder={'username'}
placeholderTextColor={'black'}
underlineColorAndroid='transparent'
onChangeText={userName  => this.setState({userName})}  

/>

<TextInput  
style={styles.input}
placeholder={'email'}
placeholderTextColor={'black'}
underlineColorAndroid='transparent'
onChangeText={userEmail  => this.setState({userEmail})}  

/>

<TextInput  
style={styles.input}
placeholder={'password'}
placeholderTextColor={'black'}
underlineColorAndroid='transparent'
onChangeText={userPassword  => this.setState({userPassword})}    
secureTextEntry 
/>

<TextInput  
style={styles.input}
placeholder={'confirm password'}
placeholderTextColor={'black'}
underlineColorAndroid='transparent'
secureTextEntry 
/>

    </View>

<TouchableOpacity style={styles.btn}
onPress={this.userRegister}
>
<Text style={styles.text} > Login</Text>

    </TouchableOpacity>


</View>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
    heading:{
    fontSize:50,
    color:'white',
   // marginBottom: 30,
    fontFamily: 'sans-serif-condensed'
    },
    box:{
            // backgroundColor:'white',
            alignItems:'center',
            height:'auto',
            borderRadius:25,
            // elevation:20
    },
    backgroundContainer:{
        flex:1,
     width:null,
       height:null,
        justifyContent:'center',
        alignItems: 'center',
       
    },
    logoContainer:{
            alignItems:'center'
    },
    logo:{
     // marginTop:30,
        width:200,
        height:200
    },
    logoText:{
        color:'white',
        fontSize: 20,
        // fontWeight:'500',
        marginTop: 5,
        // opacity:0.5,
        fontFamily: 'monospace',

    },

    input:{
        width:WIDTH-90,
        height:45,
        borderRadius: 10,
        fontSize:16,
        paddingLeft:15,
        backgroundColor:'white',
        color:'black',
        marginHorizontal: 25,
        marginTop:10,
        // borderColor: 'black',
        // borderWidth:1,

    },
    btn:{
        width:WIDTH-200,
        height:45,
        borderRadius:10,
        // backgroundColor:'#253C5B',
        justifyContent:'center',
        marginTop:10,
        borderColor: 'white',
        borderWidth:2,
    
    },
    text:{
        color:'white',
        fontSize:16,
        textAlign:'center'
    }

})




export default Register;