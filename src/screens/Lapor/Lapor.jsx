import { ScrollView, StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign';
import Iconn from 'react-native-vector-icons/Fontisto';
import DocumentPicker from 'react-native-document-picker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import TextAreaResizable from 'react-native-textarea-resizable'
import { useEffect, useState } from "react";
import axios from "axios";
import fetchApi from "../../api/fetchApi";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
const Lapor = ({navigation})=> {
    const idUser = 1;
    const route = useRoute()
    const [ date,setDate] = useState(new Date());
    const [file,setFile] = useState('');
    const { id_client } = route.params;
    const [value, setValue] = useState({
        judul_laporan:'',
        id_jenis_laporan: '',
        lokasi: '',
        isi: '',
    })
    useEffect(()=> {
        console.log(date)
    },[date])
    const onClickNext = () =>{
        return navigation.replace('Navigasi', {
            screen: 'Home',
            params: {id_client: id_client},
          });
    }
    const handleFilePick = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            setFile(res[0]);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
            // User cancelled the picker, exit any dialogs or menus and move on
        } else {
            throw err;
        }
        }
  };
  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };
  
  const showDatepicker = () => {
    showMode('date');
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };
  const onSubmit = async() => {
    try{
        const formData = new FormData();
        formData.append('foto',file);
        formData.append('judulLaporan',value.judul_laporan);
        formData.append('id_jenis_laporan',value.id_jenis_laporan);
        formData.append('lokasi',value.lokasi);
        formData.append('tanggal','2023-12-28T00:08:00.000Z');
        formData.append('isi',value.isi);
        // console.log(formData)
        // console.log(file.name)
        console.log(formData)
        const ress = await fetchApi.post(
            `/laporan/${id_client}`,
            formData,      
            {   
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
                }
            }
        );
        console.log(ress)
        if(ress.status ==201){
            setTimeout(()=>{
                console.warn(ress.data);
            },1000)
            return navigation.replace('Navigasi', {
                screen: 'Home',
                params: {id_client: id_client},
              });
        }

    }catch(error) {
        console.log(error)
    }
  }
    return(
        <ScrollView>
        <View style={Styles.header}>
            <TouchableOpacity style={Styles.headerItem} onPress={onClickNext}>
                <Text style={{color: 'red'}}>Lewati</Text>
                <Icon name="right" size={20} color="red" /> 
            </TouchableOpacity>
        </View>
        <View style={Styles.body}>
            <View style={Styles.instruction}>
                <Icon name="questioncircleo" size={20} color="#000" /> 
                <Text style={{width: '90%'}}>Perhatikan cara menyampaikan pengaduan yang baik dan benar</Text>
            </View>
            <View>
                <TextInput 
                    placeholder="Judul laporan"
                    style={Styles.input}
                    defaultValue={value.judul_laporan}
                    onChangeText={val=>setValue({...value,judul_laporan: val})}
                />
                <TextInput 
                    placeholder="jenis_laporan"
                    style={Styles.input}
                    defaultValue={value.id_jenis_laporan}
                    onChangeText={val=>setValue({...value,id_jenis_laporan: val})}
                />
                <TextInput 
                    placeholder="Lokasi"
                    style={Styles.input}
                    defaultValue={value.lokasi}
                    onChangeText={val=>setValue({...value,lokasi: val})}
                />
                {/* <TextInput 
                    placeholder="Tanggal"
                    style={Styles.input}
                /> */}
                <TouchableOpacity style={Styles.date} onPress={showDatepicker}>
                    <Text>Tanggal</Text>
                    <Iconn name="date" size={20} color="#000" /> 
                </TouchableOpacity>
                <TextAreaResizable
                    style={Styles.textArea}
                    // multiline={true}
                    placeholder="Description"
                    defaultValue={value.isi}
                    onChangeText={val=>setValue({...value,isi: val})}
                />
                {/* <Button 
                    title="upload bukit" 
                    color={'grey'} 
                    style={Styles.btnBukti}
                    onPress={showDatepicker}
                /> */}
                <Button 
                    title="upload bukit" 
                    color={'grey'} 
                    style={Styles.btnBukti}
                    onPress={handleFilePick}
                />
            </View>
        <Button 
            title="LAPOR"  
            onPress={()=>onSubmit()}
            color="green"
        />
        </View>
        </ScrollView>
    )
};

const Styles = StyleSheet.create({
    body: {
        paddingHorizontal: 15,
        // marginTop: 30,
        gap: 20
    },
    header: {
        height: 50,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 20,
        flexDirection: 'row',
        // backgroundColor: 'red',
    },

    headerItem: {
        // height: 50,
        // backgroundColor: 'red',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
        width: 100
    },
    instruction: {
        // height: 50,
        backgroundColor: '#fff',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
        // borderRadius: 10
    },
    input: {
        backgroundColor: "#fff",
        height: 45,
        paddingLeft: 10,
        borderRadius: 5,
        marginBottom: 15,
        borderColor: 'gray',
        borderWidth: 1,
    },
    date: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        height: 45,
        borderRadius: 5,
        marginBottom: 15,
        borderColor: 'gray',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    textArea: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        // paddingVertical: 8,
        fontSize: 16,
        backgroundColor: '#fff',
        height: 80,
        // flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    btnBukti: {
        color: 'red'
    }
});

export default Lapor