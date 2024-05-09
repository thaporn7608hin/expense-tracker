import React, { useEffect } from 'react'
import { View,Text,Animated,StyleSheet, TouchableOpacity,FlatList} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import Items from './Items';
import { ScrollView } from 'react-native';
// import Animated from "react-native-reanimated"
const HomeScreen = ({navigation}) => {


  const {transactions} = useSelector((state)=>state.transactions)

  const prices = transactions.map((transaction) => transaction.price)
  const totalPrice = prices.reduce((prev,cur)=> (prev+=cur),0)
  const expense = prices.filter((price) => price < 0).reduce((prev,cur) => (prev+=cur),0)* -1
  return (
    <Animated.View style={{
      flex:1,
      alignItems:"center",
      paddingVertical:10,
      paddingHorizontal:20,
    }}>
    <LinearGradient style={style.Box} colors={["#FAAD3D","#EFC90A","#F1CB0C"]}>
       <View style={{width:"70%",alignItems:"flex-start"}}>
          <Text style={{
            fontSize:15,
            color:"#fff",
            fontFamily:"Lato-Regular",
            fontWeight:"600"
          }}>
            Current Balance
          </Text>
          <Text 
            style={{
              
              fontFamily:'Lato-Medium',
              fontSize:32,
              color:"#fff",
              fontWeight:'700'

            }}>
              {totalPrice}
          </Text>
          <Text style={{
            marginTop:60,
            color:"white",
            fontSize:18,
            fontWeight:'700'
          }}>

            2341**** **** 4589
          </Text>
       </View>
       <View style={{alignItems:"flex-end",width:"30%",justifyContent:"space-between"}}>
        <Text style={{color:"white",fontSize:18,fontWeight:"700"}}>NGN</Text>
        <TouchableOpacity style={{
          backgroundColor:"background-color: rgb(236 72 153)",
          padding:8,
          borderRadius:10,
        }}
        onPress={()=>navigation.navigate("Add")}>
          <Text style={{color:"white",fontSize:18,fontWeight:"700"}}>Add</Text>
        </TouchableOpacity>
        <View>
          <Text style={{textAlign:"right",color:"white",fontSize:15,fontWeight:"700"}}>Expense</Text>
          <Text style={{color:"white",fontSize:18,fontWeight:"700"}}>${expense}</Text>
        </View>
       </View>
    </LinearGradient>
    <ScrollView style={{width:"100%",marginTop:40}}>
      <FlatList data={transactions} renderItem={({item,index}) => (
        <Items key={index} title={item.title} price={item.price} id={item.id}/>
      )}/>
    </ScrollView>
    </Animated.View>
  )
  
}

const style = StyleSheet.create({

  Box:{
    width:"100%",
    height:189,
    borderRadius:15,
    flexDirection:"row",
    padding:22
  }
})

export default HomeScreen