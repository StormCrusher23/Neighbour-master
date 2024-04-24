import React, {useState ,useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput, FlatList, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { initializeApp } from '@firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useNavigation } from '@react-navigation/core'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Data = [
  {
    title: `Electricity`,
    time: `2`,
    disc: `Blackout at 2nd floor since 1AM`,
  },
  {
    title: `Water`,
    time: `6`,
    disc: `No supply since yesterday`
  },
  {
    title: `Gas`,
    time: `11`,
    disc: `Gas pipeline leaking nearby weste gate`,
  },
  {
    title: `Ceiling`,
    time: `3`,
    disc: `Noo maintainance at room 26, Ceiling cracked since March 2024`
  },
  {
    title: `Septic tank`,
    time: `13`,
    disc: `Septic tank overflowing, Needs cleaning`
  },
  {
    title: `Electricity`,
    time: `4`,
    disc: `oogas afiahsb IAGFiadsf asdfblv salfkhbai akshkfbaiybgwiaub`,
  },
  {
    title: `Water`,
    time: `5`,
    disc: `fugiat nulla doloribus recusandae eaque est corporis incidunt. Modi!`,
  },
  {
    title: `Gas`,
    time: `7`,
    disc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora aut earum,`,
  },
  {
    title: `Ceiling`,
    time: `8`,
    disc: `rerum provident amet beatae quia voluptate, culpa obcaecati ut quaerat,`,
  },
  {
    title: `Septic tank`,
    time: `14`,
    disc: `delectus sequi consequuntur inventore aperiam repudiandae qui omnis doloremque.`,
  },{
    title: `Electricity`,
    time: `2`,
    disc: `oogas afiahsb IAGFiadsf asdfblv salfkhbai akshkfbaiybgwiaub`,
  },
  {
    title: `Water`,
    time: `6`,
    disc: `fugiat nulla doloribus recusandae eaque est corporis incidunt. Modi!`,
  },
  {
    title: `Gas`,
    time: `11`,
    disc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora aut earum,`,
  },
];

const firebaseConfig = {
  apiKey: 'AIzaSyA0zu28tbv2ShBRkaNmqbH5xU41SNNSkC0',
  authDomain: 'fir-auth-1f5c0.firebaseapp.com',
  projectId: 'fir-auth-1f5c0',
  storageBucket: 'fir-auth-1f5c0.appspot.com',
  messagingSenderId: '918131323751',
  appId: '1:918131323751:web:781bd31b9dba658ec0f5c2',
};

firebase.initializeApp(firebaseConfig);


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
const navigation = useNavigation()
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Panel")
            }
        })   
    })

    const handleLogin = () => {
        firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with : ', user.email);
        })
        .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
     <View>
        <Text style={styles.welcome}>Welcome Back!</Text>
      </View>
    
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>
  
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            onPress={handleLogin}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }

const Card = ({ item }) => {
  return(
    <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.disc}>- {item.disc}</Text>
        <Text style={styles.time}>Estd : {item.time} Hours</Text>
    </View> 
  )
}

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>  
         <FlatList data={Data} renderItem={({ item }) => <Card item={item} />} />
    </SafeAreaView>
  );
};


const sendIssue = () => {
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    >
     <View style={styles.inputContainer}>
      <TextInput
        placeholder="Title"
        onChangeText={text => setEmail(text)}
        style={styles.input}
        />
      <TextInput
        placeholder="Discription"
        onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
        />
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        >
        <Text style={styles.buttonText}>Raise Issue</Text>
      </TouchableOpacity>
    </View>
  </KeyboardAvoidingView>
)
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='Client'>
      <Drawer.Screen name='Client' component={HomeScreen} />
      <Drawer.Screen name='Raise Issue' component={sendIssue} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName='App' >
      <Stack.Screen
        name='App'
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='login'
      component={Login}
      options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
      margin: 10,
      padding: 10,
      paddingLeft: 20,
      borderRadius: 20,
      backgroundColor: 'lightgray',
  },
  title:{
    paddingBottom : 5,
    fontSize: 25,
  },
  disc:{
    color: '#000000',
    fontSize: 15,
  },
  time:{
    textAlign: 'right',
    color: 'gray',
    fontSize: 15,
    paddingTop : 5,
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  welcome:{ 
    marginBottom: 20,
    fontSize: 42,
  },
  button: {
    backgroundColor: '#419dff',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 10,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },

});
