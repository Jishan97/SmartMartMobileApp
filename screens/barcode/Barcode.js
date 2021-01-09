import React,{Component} from 'react';
import {Text,AppRegistry,View,Alert} from 'react-native';
import BarcodeScanner,{ pauseScanner,
  resumeScanner} from 'react-native-barcode-scanner-google';

import {Actions} from 'react-native-router-flux';
// var Datastore = require('react-native-local-mongodb')
//   , db = new Datastore();
 class Barcode  extends Component {

      state={   
          pos:[]
          // posname:[],
          // posemail:[]
  }

displayD(data){


  fetch('https://frozen-savannah-24909.herokuapp.com/carttoadd',{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
         username:global.SampleVar,
         barcode:data
          }), 
          })
          .then((response)=>response.json())
            .then(responseJson=>this.setState({pos:responseJson}));



console.log(this.state.pos)

}
  render() {
    return (
      <View style={{flex: 1}}>
          <BarcodeScanner
              style={{flex: 1, justifyContent: 'center',
        alignItems: 'center'}}
              onBarcodeRead={({data, type}) => {
 // console.log(data)


   {this.displayD(data)}

   pauseScanner().then(()=>{
    Actions.cart();
   }).catch(e => {
    // Print error if scanner stream could not be resumed.
    console.log(e);
});


              }} >


          </BarcodeScanner>

<View style={styles.frame}>
<Text style={styles.btn2}>scan products! </Text>
              </View>

      </View>
    );
  }
}
 


const styles ={
  frame:{
      
      justifyContent:'center',
      alignItems:'center',
      // height:200,
      // width:300, 
      backgroundColor:'black',
      // // borderWidth:2
  
  },
  chk:{
  //     flex:1,
     
  //     justifyContent:'space-between',
  //   alignItems:'center'
  },
  btn2:{
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
      height:50,
     backgroundColor:'black',
      color:'white',
      fontSize:18
  
  
    },   
     containerStyle1:{
      // marginTop:100,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#FF5656',
      height:50,
      width:200, 
  
      elevation   : 30,
  
      borderRadius:30
    },

  containerStyle:{
    marginBottom:100,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#1D2645',
      height:100,
      width:300, 
  
      elevation   : 30,
  
      borderRadius:30
    },
  container: {
      flex: 1,
      flexDirection: 'row',
    },
    preview: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  
    },
    btn1:{
      
      justifyContent: 'center',
      color:'white',
      fontSize:15
    
 
 
    },
    btn3:{
      
 
      color:'yellow',
      fontSize:15
    
 
 
    }
}



export default Barcode;


















































































// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import { Actions } from 'react-native-router-flux';

// const BlueScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text
//         style={styles.welcome}
//         onPress={() => Actions.maize()}
//       >
//         Blue Screen
//       </Text>
//       <Text
//         style={styles.welcome}
//         onPress={() => Actions.modal()}
//       >
//         Open Modal
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#00274c',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     color: '#ffffff',
//   },
// });

// export default BlueScreen;