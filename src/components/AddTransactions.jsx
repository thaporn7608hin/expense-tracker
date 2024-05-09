import React, { useState } from 'react'
import { View,Text,TextInput, Alert,Button, TouchableOpacity, SafeAreaView} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addTransactions } from '../store/actions/transactionsAction'
import { Formik } from 'formik'
import { ScrollView } from 'react-native'

const AddTransactions = ({navigation}) => {


  const [title,setTitle] = useState('')
  const [price,setPrice] = useState('')
  const dispatch = useDispatch()

  const {transactions} = useSelector((state)=>state.transactions)
  const prices = transactions.map((transaction) => transaction.price)
  const totalPrice = prices.reduce((prev,cur)=> (prev+=cur),0)
  
  const submitText = () => {
     const id = Math.floor(Math.random()*60000);
    const newTransaction = {
      id,
      title,
      price:Number(price)
      
    }
    const numberCheck = Number(totalPrice) + newTransaction.price
    if (numberCheck < 0){
      alert("Not enough money")
      return;
    }

    if(!prices || !title){
      alert("Please inset title and price")
      return
    }
 
    dispatch(addTransactions({...newTransaction}))
    navigation.navigate("Home")
    
    
  }

  return (
    <View style={{padding:42,justifyContent:"center",height:"100%",backgroundColor:'rgb(229 231 235)'}}>
       
          <SafeAreaView style={{backgroundColor:'white',height:400,justifyContent:"space-between",borderRadius:10,padding:20}}>
              <Text style={{fontSize:20,fontWeight:"700"}}>Add transaction</Text>
              <View style={{marginTop:50}}>
                <Text style={{fontSize:16,marginBottom:5}}>Add transaction</Text>
                < TextInput onChangeText={(text)=> setTitle(text)} placeholder='pizza' style={{borderBottomColor:"rgb(212 212 216)",borderBottomWidth:1}}/>
              </View>
              <View style={{marginTop:50,marginBottom:30}}>
                <Text style={{fontSize:16,marginBottom:5}}>Add transaction</Text>
                < TextInput onChangeText={(text)=> setPrice(text)} placeholder='-90 or 90' style={{borderBottomColor:"rgb(212 212 216)",borderBottomWidth:1}}/>
              </View>
             
              <TouchableOpacity style={{width:'100%',padding:12,borderRadius:7,backgroundColor:'rgb(34 211 238)'}} onPress={submitText}>
                <Text style={{textAlign:"center",color:'white'}}>Submit</Text>
              </TouchableOpacity>
          </SafeAreaView>
    
    </View>
  )
}

export default AddTransactions
