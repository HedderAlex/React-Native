import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Linking, Image} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack= createStackNavigator();
const linkedin = "https://www.google.com.br/";
const github = "https://www.youtube.com/";
const email = "mailto:heddercontato@gmail.com";

//Tela Home principal
function HomeScreen({navigation}){
   return (
      <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      }}>
        <Image
        source={require('./images/foto.jpg')}
      />
         <Text style={{fontSize: 30}}>
            Hédder Alex Versiane Barduco Filho
         </Text>
         <TouchableOpacity style={{width:240}}>
          <Text style={{
            backgroundColor:"black",
            color: "white",
            padding: 10,
            borderRadius: 10,
            marginVertical: 10,
            fontSize: 25,
            textAlign: "center"
          }}>Linkedin</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{width:240}}>
          <Text style={{
            backgroundColor:"black",
            color: "white",
            padding: 10,
            borderRadius: 10,
            marginVertical: 10,
            fontSize: 25,
            textAlign: "center"
          }}>Github</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{width:240}}>
          <Text style={{
            backgroundColor:"black",
            color: "white",
            padding: 10,
            borderRadius: 10,
            marginVertical: 10,
            fontSize: 25,
            textAlign: "center"
          }}>E-mail</Text>
         </TouchableOpacity>
         <TouchableOpacity
          onPress={()=>navigation.navigate('Minhas Habilidades')}
          style={{width:240}}>
          <Text style={{
            backgroundColor:"black",
            color: "white",
            padding: 10,
            borderRadius: 10,
            marginVertical: 10,
            fontSize: 25,
            textAlign: "center"
          }} >Minhas Habilidades</Text>
         </TouchableOpacity>

         
      </View>
   );
}
//Tela segundária
function HomeSecundaria({navigation}){
  return (
     <View style={{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
     }}>
        <Text style={{fontSize: 20}}>
           Minhas Habilidades
        </Text>
        <Text>HTML</Text>
        <Text>CSS</Text>
        <Text>JavaScript</Text>
        <Text>Python</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Hédder Alex Versiane Barduco Filho')}><Text>Pagina Principal</Text></TouchableOpacity>


     </View>
  );
}



//Configurar as rotas no Stack Navigator 

function App(){
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
           <Stack.Screen name="Hédder Alex Versiane Barduco Filho" component={HomeScreen}/>
           <Stack.Screen name="Minhas Habilidades" component={HomeSecundaria} />
        </Stack.Navigator>
      </NavigationContainer>
     );
}
export default App;