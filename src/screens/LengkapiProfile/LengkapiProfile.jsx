import { ScrollView, StyleSheet, Text, View, Button, TextInput,ImageBackground, Image } from "react-native"
import { PhotosUser } from "../../../public/icon/icons";
import { useState } from 'react';
import fetchApi from "../../api/fetchApi";
import { useRoute } from '@react-navigation/native';
const LengkapiProfile = ({navigation})=> {
    const userId = 12;
    const route = useRoute();
    const { id_client, email, namaLengkap } = route.params;
    console.log(id_client)
    const [value,setValue] = useState({
        namaLengkap: namaLengkap,
        email: email,
        noHp: "",
        jenisKelamin: "",
        NIK: "",
        domisili: "",
        alamatLengkap: "",
        pekerjaan: "",

    })
    const onClickNext = async()=> { 
        try {
            const ress = await fetchApi.put(`/user/${id_client}`,value);
            console.log(ress.data);
            if(ress.status == 200) {
                setTimeout(()=> {
                    console.warn('Berhasil lengkapi profile')
                },2000);
                return navigation.navigate('Lapor',{id_client: id_client})
            }
        }catch(err){
            console.log(err)
        }
    }
    return(
        <ScrollView style={Styles.container}>
            <View style={Styles.header}>
                <ImageBackground
                    source={require('./../../../public/image/background.png')}
                    style={Styles.imageBackground}
                > 
                <PhotosUser color="brown" size={100} />
                </ImageBackground>
            </View>
            <View style={Styles.body}>
                <Text style={Styles.label}>Nama lengkap</Text>
                <TextInput 
                    // placeholder="Nama lengkap"
                    style={Styles.input}
                    defaultValue={value.namaLengkap}
                    onChangeText={(val)=>setValue({...value,namaLengkap: val})}
                />

                <Text style={Styles.label}>Email</Text>
                <TextInput 
                    // placeholder="Email"
                    style={Styles.input}
                    defaultValue={value.email}
                    onChangeText={(val)=>setValue({...value,email: val})}
                />

                <Text style={Styles.label}>No hp</Text>
                <TextInput 
                    // placeholder="Email"
                    style={Styles.input}
                    defaultValue={value.noHp}
                    onChangeText={(val)=>setValue({...value,noHp: val})}
                />

                <Text style={Styles.label}>Jenis kelamin</Text>
                <TextInput 
                    // placeholder="Email"
                    style={Styles.input}
                    defaultValue={value.jenisKelamin}
                    onChangeText={(val)=>setValue({...value,jenisKelamin: val})}
                />

                <Text style={Styles.label}>NIK</Text>
                <TextInput 
                    // placeholder="Email"
                    style={Styles.input}
                    defaultValue={value.NIK}
                    onChangeText={(val)=>setValue({...value,NIK: val})}
                />

                <Text style={Styles.label}>Domisili</Text>
                <TextInput 
                    // placeholder="Email"
                    style={Styles.input}defaultValue={value.domisili}
                    onChangeText={(val)=>setValue({...value,domisili: val})}
                />

                <Text style={Styles.label}>Alamat lengkap</Text>
                <TextInput 
                    // placeholder="Email"
                    style={Styles.input}
                    defaultValue={value.alamatLengkap}
                    onChangeText={(val)=>setValue({...value,alamatLengkap: val})}
                />

                <Text style={Styles.label}>Pekerjaan</Text>
                <TextInput 
                    // placeholder="Email"
                    style={Styles.input}
                    defaultValue={value.pekerjaan}
                    onChangeText={(val)=>setValue({...value,pekerjaan: val})}
                />

            <Button 
                title="next" 
                onPress={()=> onClickNext()} 
                style={Styles.button}
                color="green"
            />
            </View>
        </ScrollView>
    )
};

const Styles = StyleSheet.create({
    container: {
        height: '100%',
        marginBottom: 20,
        // backgroundColor: '#F6F1F1'
    },
    header: {
        justifyContent: 'center',
        width: '100%',
        alignItems: "center",
        backgroundColor: 'red',
        height: 150
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
        borderColor: 'gray',
        borderBottomWidth: 1,
    },
    label: {
        marginBottom: -12,
        marginLeft: 2
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
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1,
    },
    button: {
        height: 45,
        paddingLeft: 10,
    },


});

export default LengkapiProfile