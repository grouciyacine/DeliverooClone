/*import { useDeviceOrientation } from '@react-native-community/hooks';
import React, { useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  SafeAreaViewBase,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Button,
  Alert,
  Platform,
  Dimensions,
  ImageBackground,
  ImageBackgroundComponent,
} from 'react-native';

import {

  
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const App: () => Node = ()=>{

  //const {landscape}=useDeviceOrientation()
  const moh =()=>{
console.log("mooooh")
}
/*Image by NET:
<Image source={{
width:200,
height:200,
uri:"https:\\www----",
}}

  
  return (
<SafeAreaView style={[styles.first,contain]}>
<View style={{backgroundColor:"#fff",flex:1,flexDirection:"row",
justifyContent:"center",alignItems:"center",alignContent:"center",flexWrap:"wrap",}}>
<View style={{backgroundColor:'black',width:100,height:100,flexBasis:100,flex:1}}/>
<View style={{backgroundColor:"gold",width:100,height:100}}/>
<View style={{backgroundColor:"tomato",width:100,height:100,left:20,position:"absolute"}}/>
<View style={{backgroundColor:"greenyellow",width:100,height:100}}/>
<View style={{backgroundColor:"grey",width:100,height:100}}/>
</View>


<Text  numberOfLines={2} onPress={moh}>
hello world 
</Text>
<TouchableOpacity onPress={()=>console.log("image tapped")}>
<Image style={styles.image}
blurRadius={1}
fadeDuration={1000}
source={require('./m.jpg')}/>
</TouchableOpacity>
<TouchableHighlight onPress={()=>console.log("image tapped")}>
<Image style={styles.image}
blurRadius={1}
fadeDuration={1000}
source={require('./m.jpg')}/>
</TouchableHighlight>
<TouchableNativeFeedback onPress={()=>console.log("image tapped")}>
<Image style={styles.image}
blurRadius={1}
fadeDuration={1000}
source={require('./m.jpg')}/>
</TouchableNativeFeedback>
<Button color='orange' title='Click ME' 
onPress={()=>Alert.alert('My Title',"my Message",
[
  {text:"yes",onPress:()=>console.log("yes")},
  {text:"No",onPress:()=>console.log("No")}
])}>Click Me</Button>
<Button title='2' 
onPress={()=>Alert.prompt("my title","My message",
text=>console.log(text))}>
2
</Button>
<Button title='1' onPress={()=>Alert.prompt('enter name')}>
  21
</Button>
</SafeAreaView>
)
return(
<ImageBackground style={styles.back} source={require('./m.jpg')}>
 <View style={{position:'absolute',top:70,alignItems:'center'}}>
<Image style={styles.logo} source={require('./rr.png')}/> 
<Text style={{fontSize:30,top:100,color:"#ffffff"}}>hola amigo </Text>
 </View>

<View style={{backgroundColor:"black",width:"100%",height:70}}/>
<View style={{backgroundColor:"dodgerblue",width:"100%",height:70}}/>
</ImageBackground>



)
;};

const contain={backgroundColor:"dodgerblue"}
const styles = StyleSheet.create({
first:{
//backgroundColor:'dodgerblue',
alignItems:"center",
justifyContent:"center",
paddingTop:Platform.OS==="android"?StatusBar.currentHeight:0,
flex:1,
},
image:{
width:300,
height:200,
borderColor:'black',
position:'relative',

},
back:{
flex:1,
justifyContent:'flex-end',
alignItems:'center',
alignContent:'center'
},
logo:{
width:"100%",
height:"100%",
alignItems:"center",
alignContent:'center',
position:'absolute',
top:0,
left:50,

}


});

export default App;*/