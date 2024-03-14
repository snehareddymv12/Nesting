import {View,Text,Button} from 'react-native';
import * as React from 'react';
import { useFocusEffect } from '@react-navigation/native';
function DetailsScreen({navigation}){
    useFocusEffect(
        React.useCallback(()=>{
            alert("DetailScreen was Focused");
            return ()=>{
              alert("HomeScreen was Focused");
            };
         },[])
    );
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>Details</Text>
            <Button title="Go to Home" onPress={()=>navigation.navigate("Home")}/>
        </View>
    )
}
export default DetailsScreen;