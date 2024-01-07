import { ScrollView, StyleSheet, Text, View, ImageBackground, Alert } from "react-native";

import { UserIcon } from "../../../public/icon/icons";
import { Button } from '@rneui/themed';
import { ListItem, Avatar } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';
const Profile = ({navigation})=> {
    const onClickLogout=()=>{
        return navigation.replace('Login')
    }
    const showAlert = () =>{
        return Alert.alert(
            'Yakin keluar',
            'Logout?',
            [
                {
                    text: 'Cancel',
                    // onPress: () => Alert.alert('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Oke',
                    onPress: () => navigation.replace('Login'),
                    style: 'cancel',
                },
            ],
            {
            cancelable: true,
            onDismiss: () =>
                Alert.alert(
                'Terlalu banyak tindakan',
                ),
            })
    }
    return(
        <ScrollView>
            <View style={Styles.header}>
                <ImageBackground
                    source={require('./../../../public/image/background.png')}
                    style={Styles.imageBackground}
                > 
                    <UserIcon color="brown" size={100} />
                    <Text>User1</Text>
                    <Text>user1@example.com</Text>
                    <View style={Styles.reportLapor} >
                        <Text style={{color: '#fff'}}>Laporan saya : {9}</Text>
                    </View>
                </ImageBackground>
            </View>
            <View>
                <ListItem bottomDivider onPress={()=>console.log('oke')}>
                    <Icon name="user-edit" size={20} color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Edit profile</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem bottomDivider>
                    <Iconn name="lock" size={22} color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Edit password</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem bottomDivider onPress={showAlert}>
                    <Iconn name="logout" size={25} color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>Logout</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            </View>
            {/* <Button title="Logout" onPress={onClickLogout} /> */}
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
        height: 260,
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
        borderColor: 'gray',
        borderBottomWidth: 1,
        position: 'relative',
        paddingBottom: 20
    },
    reportLapor: {
        backgroundColor: '#1DA1F2',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        position: 'absolute',
        left: 10,
        bottom: 10
    }
});

export default Profile