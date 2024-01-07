import { useState } from "react";
import { StyleSheet, View, Text,Button, Image, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const Login = ({navigation})=> {
    const [ value,setValue ] = useState({
        email: "jhondoe@example.com",
        password: "12345678"
    });
    const [loading,setLoading] = useState(false)
    const onSubmitLogin =  async()=> {
        console.log(value)
        try{
            const ress = await axios.post('http://192.168.191.46:5174/login',value);
            console.log(ress.data)
            AsyncStorage.setItem('user',JSON.stringify(ress.data.user))
            AsyncStorage.setItem('authToken',ress.data.accessToken)
            console.log({id_client: ress.data.user.id_client})
            if(ress.status == 200) {
                return navigation.navigate('Navigasi', {
                    screen: 'Home',
                    params: ress.data.user,
                  });
            };
            
        }catch(err){
            console.log(err)
        }
    }
    return(
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Text style={Styles.title}>Login</Text>
                <Image
                    source={require('./../../../public/image/logo.png')}
                    style={Styles.image}
                />
            </View>
            <View style={Styles.body}>
                <TextInput 
                    placeholder="Email"
                    style={Styles.input}
                    defaultValue={value.email}
                    onChangeText={val=>setValue({...value,email: val})}
                />
                <TextInput 
                    placeholder="Password"
                    style={Styles.input}
                    defaultValue={value.password}
                    onChangeText={val=>setValue({...value,password: val})}
                />
                <Button 
                    title="Login" 
                    onPress={()=>onSubmitLogin()} 
                    style={Styles.button}
                    color={"#C07F1F"}
                />
                <View style={Styles.flex}>
                    <View style={Styles.span}></View>
                    <Text>Atau melalui</Text>
                    <View style={Styles.span}></View>
                </View>

                <TouchableOpacity 
                    style={Styles.btnGoogle}
                >
                    <Icon name="google" size={20} color="#000" /> 
                    <Text style={{ color:"#000", marginLeft: 10 }}>GMAIL</Text> 
                </TouchableOpacity>

                <Text >
                    Belum punya akun,
                    <Text style={{color:'blue',fontWeight:'bold'}} onPress={()=>navigation.navigate('Register')}> daftar!</Text>
                </Text>
            </View>
        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFE500',
        height: '100%',
    },
    header: {
        justifyContent: 'center',
        width: '100%',
        alignItems: "center",
        marginTop: 50
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30
    },
    image: {
        width: 190,
        height: 192,
    },
    body: {
        paddingHorizontal: 20,
        marginTop: 30,
        gap: 20
    },
    input: {
        backgroundColor: "#fff",
        height: 45,
        paddingLeft: 10,
        borderRadius: 5
    },
    button: {
        height: 45,
        paddingLeft: 10,
        borderRadius: 10
    },
    btnGoogle: {
        flexDirection: 'row',  
        alignItems: 'center', 
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5, 
        justifyContent: 'center',
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    span: {
        width: '36%',
        height: 4,
        backgroundColor: '#6D6868',
        borderRadius: 3
    }
});

export default Login