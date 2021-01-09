import React, { Component } from 'react';
import { View, Text,StyleSheet,ImageBackground,Image,TextInput,Dimensions,TouchableOpacity,AsyncStorage,ToastAndroid } from 'react-native';
import {Actions} from 'react-native-router-flux'
import bgImage from '../../assets/login_background.jpg'
import logo from '../../assets/logo.png'
var Datastore = require('react-native-local-mongodb')
  , db = new Datastore();
  import * as Animatable from 'react-native-animatable';

const {width:WIDTH} = Dimensions.get('window')

 class Login extends Component {

    constructor(){
 
        super();
        state = { userName:''};

        
       // global.SampleVar = this.state.userName;
      }
     
   




    componentDidMount(){
    
    }

    userRegister =()=>{





        //AsyncStorage.setItem('username', this.state.userName);
        var date = new Date().toJSON().slice(0,10);
        global.SampleVar = this.state.userName;
    console.log(date)
    console.log(this.state.userName);
    console.log('------------------------------')

   fetch('https://frozen-savannah-24909.herokuapp.com/cartfirsttime',{
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      username:this.state.userName,
      currentDate:date,
      
    }), 
    }).then((response)=>response.json())
    .then((responseJson)=> {
        
    //console.log(responseJson)
      })

//////////////////////////////////////////////////////
///////////////////////////////////////////////////////


fetch('https://frozen-savannah-24909.herokuapp.com/whishlistfirst',{
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      username:this.state.userName
      
    }), 
    }).then((response)=>response.json())
    .then((responseJson)=> {
        
    //console.log(responseJson)
      })


/////////////////////////////////////////////////////
////////////////////////////////////////////////////



fetch('https://sheltered-crag-29551.herokuapp.com/api/genres/validate',{
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      name:this.state.userName
    }), 
    })
    .then((response)=>response.json())
    .then((responseJson)=> {
      
      if(responseJson === 'logged in') {
        Actions.tabbar(); Actions.home()
        ToastAndroid.showWithGravity(
            `logged in`,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
            25,
            50
          );
       
      } else{
        ToastAndroid.showWithGravity(
            `failed`,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
            25,
            50
          );
      }



    })
   






///////////////////////////////////////////////////////
fetch('https://frozen-savannah-24909.herokuapp.com/storyfirsttime',{
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      username:this.state.userName

      
    }), 
    }).then((response)=>response.json())
    .then((responseJson)=> {
        
    //console.log(responseJson)
      })

// //
         

    }
//     componentDidMount(){
//         fetch('https://vast-lowlands-27846.herokuapp.com/parchaseHistory',{
//       method:'POST',
//       headers:{
//         'Accept':'application/json',
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify({
//      username:'anisa'
//       }), 
//       })
//       .then((response)=>response.json())
//         .then(responseJson=>this.setState({albums:responseJson}));
//       }


//       renderAlbums(){
//         console.log(this.state.albums)
//         // const {title, artist, thumbnail_image,image,url}= albums;
//         return this.state.albums.map(album=>
// <Text> {album} </Text>

//         );s
//       }
  




  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
{/* <Text style={styles.heading}> SmartMart </Text> */}
            <View style={styles.box}>
            
     <View style={styles.logoContainer}>
<Image source={logo} style={styles.logo} />
<Text style={styles.logoText}> Smart way to shop! </Text>
     </View>


<View>

<TextInput  
style={styles.input}
placeholder={'username'}
placeholderTextColor={'white'}
underlineColorAndroid='transparent'
onChangeText={userName  => this.setState({userName})}  

/>

<TextInput  
style={styles.input}
placeholder={'password'}
placeholderTextColor={'white'}
underlineColorAndroid='transparent'
secureTextEntry 

/>

    </View>

<TouchableOpacity
        onPress={this.userRegister}

style={styles.btn}>
<Animatable.Text animation="fadeIn" style={styles.text} > Login</Animatable.Text>

    </TouchableOpacity>


    {/* <TouchableOpacity  onPress={()=>Actions.register()} style={styles.btn1}>
<Animatable.Text animation="fadeIn" style={styles.text1} > Register</Animatable.Text>

    </TouchableOpacity> */}

    <View style={{marginTop:60}}>
    <TouchableOpacity
       onPress={Actions.register} 

style={styles.btnS}>
        <Text style={{color:'white',fontWeight:'200'}}>Dont have an account? Sign Up</Text>
        </TouchableOpacity>
    </View>



</View>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
    heading:{
    fontSize:50,
    color:'white',
    marginBottom: 30,
    fontFamily: 'sans-serif-condensed'
    },
    box:{
           // backgroundColor:'white',
            alignItems:'center',
            height:460,
            borderRadius:25,
           // elevation:20,
           // marginTop:100,

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
        width:220,
        height:220
    },
    logoText:{
        color:'white',
        fontSize: 20,
      //  fontWeight:'bold',
        marginTop: 5,
        //opacity:0.5,
        fontFamily: 'monospace',

    },

    input:{
        width:WIDTH-90,
        height:45,
        borderRadius: 10,
        fontSize:16,
        paddingLeft:15,
       // backgroundColor:'white',
        color:'#0A0A68',
        marginHorizontal: 25,
        marginTop:10,
        borderColor: 'white',
        borderWidth:2,

    },
    btn:{
        width:WIDTH-200,
        height:45,
        borderRadius:10,
       // backgroundColor:'#FF55D1',
        justifyContent:'center',
        marginTop:10,
        borderWidth:2,
        borderColor:'white'
    
    },
    btnS:{
        width:WIDTH-100,
        height:45,
        borderRadius:10,
       // backgroundColor:'#FF55D1',
        justifyContent:'center',
        alignItems:'center',
       // marginTop:10,
        borderWidth:2,
        borderColor:'white'
    
    },
    btn1:{
        width:WIDTH-200,
        height:45,
        borderRadius:10,
       backgroundColor:'white',
        justifyContent:'center',
        marginTop:10
      //  borderWidth:1,
       // borderColor:'white'
    
    },
    text:{
        color:'white',
        fontSize:16,
        textAlign:'center'
    },
    text1:{
        color:'#0A0A68',
        fontSize:16,
        textAlign:'center'
    }

})


export default Login;