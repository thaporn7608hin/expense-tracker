import {View,Text, TouchableOpacity} from "react-native"
import { ScrollView } from "react-native"
import { useDispatch } from "react-redux"
import { delelteTransaction } from "../store/actions/transactionsAction"
import { Entypo } from '@expo/vector-icons';

export default function Items({title,price,id}){
    
    const dispatch = useDispatch()
    
    return (
        <ScrollView style={{padding:22}}>
            <View style={{display:"flex",paddingBottom:17,flexDirection:"row",justifyContent:"space-between",borderBottomWidth:1,borderColor:"rgb(203 213 225)",width:"100%"}}>
                <View  style={{flexDirection:"row",width:120,}}>
                    <TouchableOpacity style={{marginRight:20}} onPress={()=> dispatch(delelteTransaction(id))}>
                        <Entypo name="circle-with-cross" size={24} color="red" />
                    </TouchableOpacity>
                    <Text style={{fontWeight:"700",fontSize:16}}>{title}</Text>
                </View>
                <Text
                    style={{
                        color:price>0 ? "rgb(6 182 212)" : "red"
                    }}>{price}
                </Text>
            </View>
        </ScrollView>
    )
}