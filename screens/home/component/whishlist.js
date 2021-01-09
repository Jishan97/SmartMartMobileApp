import React,{Component} from 'react'
import {Header,Left,Right, Body, Title, Container, Content,Thumbnail,Card,CardItem,AsyncStorage,Spinner} from 'native-base';
import { View, Text,StyleSheet,
ScrollView,
Image,
Dimensions,TouchableOpacity } from 'react-native';


const {height,width} = Dimensions.get('window')

class whishlist extends Component {
    state = {
        albums:[]
      };


    componentWillMount(){

      

    }


    wish(){

        fetch('https://frozen-savannah-24909.herokuapp.com/whishlistG',{
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
              .then(responseJson=>this.setState({albums:responseJson}));




        return this.state.albums.map(album=>
            <View  key={album.name} style={{width:width/2-30,height:width/2-30,borderWidth:0.5,borderColor:'#dddddd',marginBottom:10}}>
      
             <View style={{flex:1}}>
             <Image 
              style={{flex:1,width:null,height:null,resizeMode:'cover'}}
              source={{uri:album.image}} />
             </View> 
      
              <View sstyle={{flex:1,alignItems:'flex-start',justifyContent:'space-evenly',paddingLeft:10}}>
              <Text style={{fontSize:10,color:'#b63838'}}> {album.name} </Text>
              <Text style={{fontSize:12,fontWeight:'bold'}}> {album.price} </Text>
              {/* <Text style={{fontSize:10}}> 1000/- </Text> */}
             </View> 
      
          
          </View>
          );
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'white'}}>   
            <ScrollView  showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            >

            <View style={{marginTop:40}}>
    <Text style={{color:'black',fontSize:24,fontWeight:'700',
            paddingHorizontal:20
}}>Hey {global.SampleVar}! Your Wishlist </Text>

<View style={{paddingHorizontal:20,marginTop:20,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>

{this.wish()}
</View>


</View>
</ScrollView>
</View>


        
        )
    }

}



export default whishlist