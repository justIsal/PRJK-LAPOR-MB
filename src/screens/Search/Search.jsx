import { ScrollView, StyleSheet, Text, View, TextInput } from "react-native"
import { SearchIcon } from "../../../public/icon/icons";

const Search = ()=> {
    return(
        <ScrollView style={Styles.container}>
            <View style={Styles.header}>
                <SearchIcon color="#000" size={30} />
                <TextInput 
                    placeholder="Teangan..."
                    style={Styles.inputSearch}
                />
            </View>
            <View style={Styles.body}>

            </View>
        </ScrollView>
    )
};

const Styles = StyleSheet.create({
    container: {

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal:15,
        gap: 10,
        backgroundColor: '#fff',
        paddingLeft: 10
    },
    inputSearch: {
        backgroundColor: "#fff",
        height: 45,
        paddingLeft: 10,
        // borderRadius: 5,
        width: '87%'
    },
    body: {

    }
});

export default Search