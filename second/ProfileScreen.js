import { useFocusEffect } from '@react-navigation/native';
import {View,Text,Button} from 'react-native';
import * as React from 'react';


function ProfileScreen({navigation}){
    useFocusEffect(
        React.useCallback(() => {
          alert('ProfileScreen was focused');
          return () => {
            alert('Setting Screen was focused');
        
          };
        }, [])
      );
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>profile</Text>
            <Button title="Go to settings" onPress={()=>navigation.navigate("Settings")}/>
        </View>
    )
}
export default ProfileScreen;