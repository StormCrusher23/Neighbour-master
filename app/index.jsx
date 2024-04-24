import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput, FlatList, Text, View } from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Data = [
  {
    title: `Elctricity`,
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
  {
    title: `Celling`,
    time: `3`,
    disc: `rerum provident amet beatae quia voluptate, culpa obcaecati ut quaerat,`,
  },
  {
    title: `Septic tank`,
    time: `13`,
    disc: `delectus sequi consequuntur inventore aperiam repudiandae qui omnis doloremque.`,
  },
  {
    title: `Elctricity`,
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
    title: `Celling`,
    time: `8`,
    disc: `rerum provident amet beatae quia voluptate, culpa obcaecati ut quaerat,`,
  },
  {
    title: `Septic tank`,
    time: `14`,
    disc: `delectus sequi consequuntur inventore aperiam repudiandae qui omnis doloremque.`,
  },{
    title: `Elctricity`,
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

const Card = ({ item }) => {
  return(
    <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.disc}>{item.disc}</Text>
        <Text style={styles.time}>{item.time}</Text>
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
    <Stack.Navigator>
      <Stack.Screen
        name='App'
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
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
      backgroundColor: '#419dff',
  },
  title:{
    fontSize: 25,
  },
  disc:{
    color: '#000000',
    fontSize: 15,
  },
  time:{
    fontSize: 20,
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
