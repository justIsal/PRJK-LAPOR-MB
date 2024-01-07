import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  Alert,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/Login/Login';
import Navigasi from './src/navigations/Navigasi';
import RegisterScreen from './src/screens/Register/Register';
import LengkapiProfileScreen from './src/screens/LengkapiProfile/LengkapiProfile';
import LaporScreen from './src/screens/Lapor/Lapor';



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [value,setValue] = useState({
    name: 'udin',
    email: 'udin@email',
    lokasi: '',
    nik: '',
  })
  const [imgSrc,setImgSrc] = useState('')
  const [file,setfile] = useState('')
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onSubmit = async()=> {
    try{
      const formData = new FormData();
      formData.append('foto', file[0]);
      formData.append('data', value.name);
      formData.append('path', file[0]);
      const response = await axios.post('http://192.168.188.46:5174/laporan',formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response)
    }catch(err) {
      console.log(err)
    }
  }
  const AlertCoba = ()=> {
    const formData = new FormData();
    formData.append('file', file[0]);
    return Alert.alert(file[0]);
  }
  // useEffect(()=> {
  //   const getData = async()=> {
  //     const headers = {
  //       "Content-Type": "application/json"
  //     };
  //     const url = "http://192.0.0.1:5174/admin";
  //     console.log('mulai')
  //     try{
  //       const res = await axios.get('http://192.168.188.46:5174/laporan');
  //       console.log(res)
  //       setValue(res||[])
  //       console.log('oke')
  //     }catch(err){
  //       console.log(err)
  //       console.log('eror')
  //     }
  //     console.log('bres')
  //   }
  //   getData()
  // },[])
  
  const Stack = createNativeStackNavigator()
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false,headerTitleAlign: 'center'}}>
          <Stack.Group>
              <Stack.Screen 
                name="Login" 
                component={LoginScreen}
              />
              <Stack.Screen 
                name="Register" 
                component={RegisterScreen} 
              />
              <Stack.Screen 
                name="Navigasi" 
                component={Navigasi}  

              />
              <Stack.Screen 
                  name="LengkapiProfile" 
                  component={LengkapiProfileScreen}
                  options={{
                    headerShown: true,
                    headerStyle: {
                      backgroundColor: '#FFE500',
                    },
                    headerBackVisible: false,
                    title: 'Lengkapi Profile',
                  }} 
              />
              <Stack.Screen 
                name="Lapor" 
                component={LaporScreen}
                options={{
                  headerShown: true,
                  headerStyle: {
                    backgroundColor: '#FFE500',
                  },
                  title: 'Buat Laporan',
                  headerTintColor: '#000',
                  // headerBackButtonMenuEnabled: true,
  
                  // headerTitleStyle: {
                  //   fontWeight: 'bold',
                  // },
                }} 
              />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
