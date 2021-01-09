import React, { Component } from 'react';
import { View,StyleSheet,
  ScrollView,
  Image,
  Dimensions,TouchableOpacity } from 'react-native';
import axios from 'axios'
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch,Separator,Thumbnail,Button  } from 'native-base';

import { Actions } from 'react-native-router-flux';
console.disableYellowBox = true;




class Cart extends Component{
  
    state = {
      albums:[],
        data:[],
        total:'',
        mined:[]     
      };
      async  componentWillMount(){

        var date = new Date().toJSON().slice(0,10);
        fetch('https://frozen-savannah-24909.herokuapp.com/cartH',{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
         username:global.SampleVar,
         currentDate:date
          }), 
          })
          .then((response)=>response.json())
            .then(responseJson=>this.setState({data:responseJson}));
            console.log(this.state.data)






//dssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
//dssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
//dssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
//dssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss


axios.get('https://frozen-savannah-24909.herokuapp.com/api/pointofsale')
.then(response=>this.setState({albums:response.data}));

console.log(this.state.albums)









//dssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
//dssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
//dssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
//dssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
//dssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss











            fetch('https://frozen-savannah-24909.herokuapp.com/gettotal',{
              method:'POST',
              headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
              },
              body:JSON.stringify({
             username:global.SampleVar,
             currentDate:date
              }), 
              })
              .then((response)=>response.json())
              .then(responseJson=>this.setState({total:responseJson}));
              console.log(this.state.total)



  
////////
////



try {
  const config = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body:JSON.stringify({
          username:global.SampleVar
           })
  }
  const response = await fetch('https://frozen-savannah-24909.herokuapp.com/apriori', config)
  const json = await response.json()
  this.setState({mined:json})
  console.log(json);
} catch (error) {
      console.log(erro)
}


        }



      
      Cart(){
        if(this.state.data) {
             return this.state.data.map(one=>
                
         <View key={one.id}>  

<ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: one.image }} />
              </Left>
              <Body>
                <Text>{one.name}</Text>
                {/* <Text note numberOfLines={1}>{one.name}</Text> */}
              </Body>
              <Right>
                <Button transparent>
                  <Text>Rs. {one.price}</Text>
                </Button>
              </Right>
            </ListItem>



    {/* <ListItem>
    <Left>
   
      <Text >{one.name}</Text>
    
    </Left>
    
    <Right>
    <Text>{one.price} Rs</Text>
    </Right>
  </ListItem> */}
        
     
       </View>  
                )
                
    
      }
    }

minig(){





  return this.state.albums.map((one)=>{

      

    if(this.state.mined.includes(one.Product_Name)){
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




// if(this.state.mined) {
//   return this.state.mined.map(one=>
   

//     <View style={{height:'auto',width:'auto',padding:10,marginLeft:20,borderWidth:0.5,borderColor:'#dddddd',
//     justifyContent:'center',alignContent:'center',alignItems:'center',backgroundColor:'#29AB87'}}>


//       <Text style={{color:'white'}}>
//           {one}
//           </Text>
          
// </View>

//     )
   




// }  else{
//   return <Text></Text>
// }

}

    render(){
  return (






    <Container>
    
    <Content>
    <View style={{flex:1, backgroundColor:'white',paddingTop:15}}>
    <Text   style={{color:'black',fontSize:14,fontWeight:'700',paddingHorizontal:20}}>
   Hey {global.SampleVar} dont forget to buy this
    </Text>
    {/* <Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text> */}
    </View>

<View style={{marginTop:20}}>
<ScrollView horizontal={true}
showsHorizontalScrollIndicator={false}>

{this.minig()}

</ScrollView>


    </View>












    <ListItem itemDivider>
 
            <Left>
            
              <Text>Shopping Cart</Text>
          
            </Left>
         
            <Right>
             
            <Text>Price</Text>
            </Right>
          </ListItem>
          {/* <ListItem itemDivider>
              <Text>All products</Text>
            </ListItem>       */}

     {this.Cart()}

     <Separator bordered>
         <Text>Total products {this.state.data.length}</Text>
       </Separator>


       <ListItem>
 
 <Left>
   <Text>Total Amount </Text>
 </Left>
 <Right>
 <Text>Rs. {this.state.total}</Text>
 </Right>
</ListItem>

    </Content>
  </Container>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default Cart;