import { ScrollView, StyleSheet, Text, View, FlatList  } from "react-native"
import { ListItem, Avatar } from '@rneui/themed';
// import Icon from 'react-native-vector-icons/material';
const Notifikasi = ()=> {
    return(
        <ScrollView>
            <ListItem bottomDivider>
            {/* <Icon name="person-outline" /> */}
                {/* <Avatar
                    rounded
                    icon={{
                        name: "person-outline",
                        type: "material",
                        size: 30,
                    }}
                    containerStyle={{ backgroundColor: "#c2c2c2" }}
                /> */}
                <ListItem.Content>
                    {/* <ListItem.Title>Alba King</ListItem.Title> */}
                    <ListItem.Subtitle>Laporan #00505764 telah diarsipkan oleh Pengelola LAPORKEUN (Admin Pusat) karena “Laporan anda telah diarsipkan karena informasi yang disampaikan berulang” </ListItem.Subtitle>
                    <Text>46 menit yang lalu</Text>
                </ListItem.Content>
            </ListItem>

        </ScrollView>
    )
};

const Styles = StyleSheet.create({

});

export default Notifikasi