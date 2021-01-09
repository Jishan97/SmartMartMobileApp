import React, { Component } from 'react';
import {Header,Left,Right, Body, Title, Container, Content,Thumbnail,Card,CardItem,AsyncStorage,Spinner} from 'native-base';
import { View, Text,StyleSheet,
ScrollView,
Image,
Dimensions,TouchableOpacity } from 'react-native';
import axios from 'axios'
import Category from '../home/component/Category';
import New from '../home/component/New';
import { Actions } from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';
import Emoji from 'react-native-emoji';

const {height,width} = Dimensions.get('window')


 class Home extends Component {
  state = {
    albums:[],
    userName:'',
    newP:[],
    userLikes:[]
  };

    async componentWillMount(){
  this.setState({
    userName:global.SampleVar
  })
    axios.get('https://frozen-savannah-24909.herokuapp.com/api/story')
    .then(response=>this.setState({albums:response.data}));



  // get likes

  fetch('https://frozen-savannah-24909.herokuapp.com/getlike',{
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
   username:global.SampleVar
    }), 
    })
    .then((response)=>response.json())
      .then(responseJson=>this.setState({userLikes:responseJson}));
      

      

// get new products


axios.get('https://frozen-savannah-24909.herokuapp.com/api/newProducts')
.then(response=>this.setState({newP:response.data}));

    




  }


     


  renderAlbums(){
    
    // const {title, artist, thumbnail_image,image,url}= albums;
    return this.state.albums.map(album=>
      <Animatable.View   key={album.Product_Barcode}   animation="zoomIn">
      <TouchableOpacity  
      onPress={()=>Actions.like({album})} 
        
      >
      <Thumbnail  
       style={{marginHorizontal:5,borderColor:'#000080',borderWidth:2}}
       source={{uri:album.imageUrl}} />
       </TouchableOpacity>
       </Animatable.View>
    );
  }



  newProducts(){
    return this.state.newP.map(album=>
      <View  key={album.Product_Barcode} style={{width:width/2-30,height:width/2-30,borderWidth:0.5,borderColor:'#dddddd',marginBottom:10}}>

       <View style={{flex:1}}>
       <Image 
        style={{flex:1,width:null,height:null,resizeMode:'cover'}}
        source={{uri:album.imageUrl}} />
       </View> 

        <View sstyle={{flex:1,alignItems:'flex-start',justifyContent:'space-evenly',paddingLeft:10}}>
        <Text style={{fontSize:10,color:'#b63838'}}> {album.Product_Title} </Text>
        <Text style={{fontSize:12,fontWeight:'bold'}}> Clothing </Text>
        <Text style={{fontSize:10}}> 1000/- </Text>
       </View> 

    
    </View>
    );


  }


  liked(){



   return this.state.albums.map((one)=>{

      

     if(this.state.userLikes.includes(one.Product_Type)){
      return(
        <View style={{height:130,width:130,marginLeft:20,borderWidth:0.5,borderColor:'#dddddd'}}>
        <View style={{flex:2}}>
          <Image  source={{uri:one.imageUrl}}
          style={{flex:1,width:null, height:null,resizeMode:'cover'}}
          />
        </View>
          <View style={{flex:1,paddingLeft:10,paddingTop:10}}>
          <Text style={{fontSize:10}}>
              {/* {this.props.name} */}
              {one.Product_Name}
              </Text>
              </View>
      
</View>
      )

     }




    })













//     return(
//       this.state.albums.map(one=>
// <View style={{height:130,width:130,marginLeft:20,borderWidth:0.5,borderColor:'#dddddd'}}>
//         <View style={{flex:2}}>
//           <Image  source={{uri:one.imageUrl}}
//           style={{flex:1,width:null, height:null,resizeMode:'cover'}}
//           />
//         </View>
//           <View style={{flex:1,paddingLeft:10,paddingTop:10}}>
//           <Text>
//               {/* {this.props.name} */}
//               {one.Product_Title}
//               </Text>
//               </View>
      
// </View>
//       )
//     )








  }






  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>   
    <ScrollView  
    scrollEventThrottle={16}
    >

    <View style={{flex:1, backgroundColor:'white',paddingTop:20}}>
        <Text   style={{color:'black',fontSize:24,fontWeight:'700',paddingHorizontal:20}}>
        <Emoji name="raising_hand" style={{fontSize: 20}} />What can we help you find, {this.state.userName}?
        </Text>
        {/* <Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text> */}
        </View>

    <View style={{height:130,marginTop:20}}>
<ScrollView horizontal={true}
showsHorizontalScrollIndicator={false}>

   

{this.liked()}


  {/* <Category imageUri={require('../../assets/1.png')} 
  name="Tommy Hilfiger"
  />

  <Category imageUri={require('../../assets/2.jpeg')} 
  name="Tommy Hilfiger"
  />

    <Category imageUri={require('../../assets/3.jpeg')} 
  name="Tommy Hilfiger"
  />

    <Category imageUri={require('../../assets/4.jpeg')} 
  name="Tommy Hilfiger"
  /> */}

    </ScrollView>


        </View>









 <View style={{height:100}}>
     <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'
        , alignItems:'center', paddingHorizontal:7,marginTop:5,paddingHorizontal:20
    }}> 
     <Text style={{color:'black',fontFamily:'verdana',
    fontWeight: 'bold'
    }}>TOP BRANDS </Text>
     
     </View>


 <View  style={{flex:3}}>
 <ScrollView
 horizontal={true}
 showsHorizontalScrollIndicator={false}
 contentContainerStyle={{
     alignItems:'center',
     paddingStart:5,
     paddingEnd:20
     
 }}
 >


 {this.renderAlbums()}


     {/* <Thumbnail  
       style={{marginHorizontal:5,borderColor:'darkblue',borderWidth:2}}
      source={require('../img/shoes.jpg')} />
  <Thumbnail  
       style={{marginHorizontal:5,borderColor:'darkblue',borderWidth:2}}
      source={require('../img/tshirt.jpg')} />
        <Thumbnail  
       style={{marginHorizontal:5,borderColor:'darkblue',borderWidth:2}}
      source={require('../img/heels.jpg')} />
        <Thumbnail  
       style={{marginHorizontal:5,borderColor:'darkblue',borderWidth:2}}
      source={require('../img/heels1.jpg')} />
        <Thumbnail  
       style={{marginHorizontal:5,borderColor:'darkblue',borderWidth:2}}
      source={require('../img/jeans.jpg')} />

        <Thumbnail  
       style={{marginHorizontal:5,borderColor:'darkblue',borderWidth:2}}
      source={require('../img/tshirt.jpg')} />
        <Thumbnail  
       style={{marginHorizontal:5,borderColor:'darkblue',borderWidth:2}}
      source={require('../img/heels.jpg')} />
        <Thumbnail  
       style={{marginHorizontal:5,borderColor:'darkblue',borderWidth:2}}
      source={require('../img/heels.jpg')} /> */}


     </ScrollView>

     </View>

  


     </View>











<View style={{marginTop:20,paddingHorizontal:20,alignItems:'center'}}>
    <Animatable.Text  animation="fadeIn" easing="ease-in"
    style={{color:'black',fontSize:20,fontWeight:'700'}}
    >
 <Emoji name="balloon" style={{fontSize: 20}} />Introducing Mega Sale<Emoji name="balloon" style={{fontSize: 20}} />
     </Animatable.Text  >
        <Animatable.Text 
         animation="fadeIn" easing="ease-in"
        style={{fontWeight:'100',marginTop:5}}> On selected products only </Animatable.Text>


<TouchableOpacity onPress={()=>Actions.megalist()}>
    <View 
     
    style={{width:width-40, height:200,marginTop:20}}>
<Image 
       style={{flex:1,width:null,height:null,resizeMode:'cover',borderRadius:5,borderWidth:1,borderColor:'#dddddd'}}
source={require('../../assets/1.png')}


/>
</View>
</TouchableOpacity>



</View>



  
        








<View style={{marginTop:40}}>
    <Text style={{color:'black',fontSize:24,fontWeight:'700',
            paddingHorizontal:20
}}>Newly arrived </Text>

<View style={{paddingHorizontal:20,marginTop:20,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>


    {this.newProducts()}

</View>


</View>





        </ScrollView>
      </View>
    );
  }
}

export default Home;