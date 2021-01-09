/** @format */

import {AppRegistry,Text,StyleSheet,View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Router, Scene, Tabs} from 'react-native-router-flux'

//Login Screen
import Login from './screens/login/Login'
//Resgier Screen
import Register from './screens/register/Register'
//Home Screen
import Home from './screens/home/Home'
//Barcode Screen 
import Barcode from './screens/barcode/Barcode'
//Profile Screen
import Profile from './screens/profile/Profile'
//Like Screen
import Like from './screens/home/component/like'
//Mega list screen
import Megalist from './screens/home/component/Megalist'
//Cart Screen
import Cart from './screens/cart/Cart'
//wishlist 
import wishlist from './screens/home/component/whishlist'


const TabIcon = ({ selected, title }) => {
    return (
      <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
    );
  }

  const barcode1 = () => {
    return (
        <Icon name="barcode"  size={25} />
    );
  }

  const user1 = () => {
    return (
        <Icon name="shopping-cart"  size={25} />
    );
  }

  const home1 = () => {
    return (
        <Icon name="home"   size={25} />
    );
  }
  
  
  const wishlist1 = () => {
    return (
        <Icon name="heart"    size={25} />
    );
  }


const App = ()=>{
  
    return(
        
            <Router>
                <Scene key="root">



<Scene key="login" component={Login}  hideNavBar={true} />
<Scene key="register" component={Register}  hideNavBar={true} />


                <Scene  
                key="tabbar"
                tabs
                tabBarStyle = {{backgroundColor:'white'}}
                hideNavBar={true}
                activeTintColor="black"
                inactiveTintColor="gray"
                >


                <Scene
                key="osu" title="HOME"   icon={home1} >

                          <Scene  
                key="home"
                component={Home}
                title="home"
                hideNavBar={true}
                initial
                />

 
                 <Scene  
                key="like"
                component={Like}
                title="Like"
                hideNavBar={true}
                
                />

                <Scene  
                key="megalist"
                component={Megalist}
                title="Mega sale!"
                //hideNavBar={true}
                
                />

                 <Scene  
                key="cart"
                component={Cart}
                title="Cart"
                //hideNavBar={true}
                
                />

                </Scene>

                <Scene
                key="um" title="SCAN" icon={barcode1} >
                        <Scene  
                key="barcode"
                component={Barcode}
                title="barcode"
                hideNavBar={true}
                initial
                />


                </Scene>

                 <Scene
                key="umm" title="CART" icon={user1} >
                        <Scene  
                key="cart"
                component={Cart}
                title="cart"
                hideNavBar={true}
                
                />

                </Scene>


                <Scene
                key="ummm" title="wishlist" icon={wishlist1} >
                        <Scene  
                key="wishlist"
                component={wishlist}
                title="wishlist"
                hideNavBar={true}
                
                />

                </Scene>






                    </Scene>


                </Scene>



          
                </Router>

    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#bb0000'
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin: 10,
        color:'white'
     }
})

AppRegistry.registerComponent('Smart', () => App);
