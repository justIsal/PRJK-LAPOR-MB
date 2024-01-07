import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import fetchApi from "../../api/fetchApi";
import { useRoute } from '@react-navigation/native';
const Home = ()=> {
    const route = useRoute()
    const [data, setData ] = useState([])
    const [idUser, setIdUser ] = useState('');
    const [reload,setReload] = useState(0);
    const { id_client } = route.params;
    console.log(id_client)
    const getData = async () => {
        try {
        //   const datas = await AsyncStorage.getItem('user');
        //   const users = JSON.parse(datas);
        //   setIdUser(users.id_client)
        //   if(users){
            const ress = await fetchApi.get(`/laporan/${id_client}`);
            setData(ress.data);
        //   }
          
        } catch (error) {
          console.log(error);
        }
      };
    useEffect(()=> {
       getData();
    },[reload]);
    const CustomStatus = ({ data }) => {
        let statusColor = '';
        let statusText = '';
        switch (data) {
          case 0:
            statusColor = 'red';
            statusText = 'ditolak';
            break;
          case 1:
            statusColor = 'green';
            statusText = 'pending';
            break;
          case 2:
            statusColor = 'blue';
            statusText = 'diterima';
            break;
          default:
            return null;
        }
      
        return (
          <View style={[Styles.status, { backgroundColor: statusColor }]}>
            <Text style={{color: "white"}}>{statusText}</Text>
          </View>
        );
      };
    return(
        <ScrollView style={Styles.container}>
            <TouchableOpacity  style={Styles.header} onPress={()=>setReload(reload +1)}>
                <Text style={Styles.title}>Laporan Saya</Text>
                <View style={{width: 120,height: 2,backgroundColor: 'red',position: 'absolute',bottom: -1}}></View>
            </TouchableOpacity>
            <View style={Styles.body}>
                { data && data.length > 0 ? (
                    data.map((item,index)=> (
                        <View style={Styles.cardItem} key={index}>
                            <CustomStatus data={item.status} />
                            <Text style={{color: "black", fontSize: 16, fontWeight: "bold"}}>{item.judulLaporan}</Text>
                            <Text style={{color: "black", fontSize: 10,marginTop: 15}}>{item.tanggal}</Text>
                        </View>
                    ))
                ): (
                    <View style={Styles.notFound}>
                        <Image
                        source={require('./../../../public/image/open-box.png')}
                        style={Styles.image}
                        />
                        <Text style={{marginVertical: 20}}>Anda belum lapor</Text>
                        <TouchableOpacity style={Styles.btnLapor} onPress={() => console.log('Tombol diklik!')}>
                            <Text style={Styles.btnText}>Buat Laporan!</Text>
                        </TouchableOpacity>
                    </View>
                )}

            </View>
        </ScrollView>
    )
};

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F1F1',
        height: '100%',
        width: '100%'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fff',
        height: 50,
        position: 'relative',
    },
    title: {
        backgroundColor: '#fff',
        width: 'red',
        // fontWeight: 'bold',
        color: '#000'
    },
    body: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: 500,
        width: 'screen',
        gap: 10,
        padding: 5
    },
    notFound: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
        width: 'screen',
    },
    btnLapor: {
        width: 150,
        height: 35,
        backgroundColor: 'green',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#fff',
    },
    cardItem: {
        backgroundColor: "white",
        width: "100%",
        padding: 10,
        borderRadius: 2,
        position: "relative",
        elevation: 5
    },
    status: {
        position: "absolute",
        top: 10,
        right: 10,
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 2,
        
    }
});

export default Home