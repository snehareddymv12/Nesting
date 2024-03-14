import {View,Text,Button} from 'react-native';


function SettingsScreen({navigation}){
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>settings</Text>
            <Button title="Go to profile" onPress={()=>navigation.navigate("Profile")}/>
        </View>
    )
}
export default SettingsScreen;