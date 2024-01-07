import axios from "axios";
import { useState } from "react";
import { StyleSheet, View, Text,Button, Image, TextInput } from "react-native"
import fetchApi from "../../api/fetchApi";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({navigation})=> {
    const [value,setValue] = useState({ 
        namaLengkap: "",
        email: "",
        password: ""
    })
    const onNavigate =  async()=> {
        console.log(value)
        try {
            const ress = await fetchApi.post('/user',value);
            AsyncStorage.setItem('user',JSON.stringify(ress.data.user))
            console.log(ress.data);
            if(ress.status == 201) {
                setTimeout(()=>{
                    console.warn('Berhasil membuat akun!');
                },1000)
                return navigation.replace('LengkapiProfile',ress.data)
            }
        }catch(err) {
            console.log(err)
        }
        
    }
    return(
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Text style={Styles.title}>Daftar</Text>
                <Image
                    source={require('./../../../public/image/logo.png')}
                    style={Styles.image}
                />
            </View>
            <View style={Styles.body}>
                <TextInput 
                    placeholder="Nama lengkap"
                    style={Styles.input}
                    valueDefault={value.namaLengkap}
                    onChangeText={(val)=> setValue({...value,namaLengkap: val})}
                />
                <TextInput 
                    placeholder="Email"
                    style={Styles.input}
                    valueDefault={value.email}
                    onChangeText={(val)=> setValue({...value,email: val})}
                />
                <TextInput 
                    placeholder="Password"
                    style={Styles.input}
                    valueDefault={value.password}
                    onChangeText={(val)=> setValue({...value,password: val})}
                />
                <TextInput 
                    placeholder="Konfirmasi password"
                    style={Styles.input}
                />
                <Button 
                    title="Daftar" 
                    onPress={()=>onNavigate()} 
                    style={Styles.button}
                    color={"#C07F1F"}
                />
                <Text >
                    Sudah punya akun,
                    <Text style={{color:'blue',fontWeight:'bold'}} onPress={()=>navigation.navigate('Login')}> Login?</Text>
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
        marginTop: 30
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40
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
    }
});

export default Register