import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../screens/Search/Search";
import Home from "../screens/Home/Home";
import Lapor from "../screens/Lapor/Lapor";
import Notifikasi from "../screens/Notifikasi/Notifikasi";
import Profile from "../screens/Profile/Profile";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from "react-native";
import Svg, { G, Path } from 'react-native-svg';
import BuatLapor from "../screens/Lapor/BuatLapor";
import { HomeIcon, NotifikasiIcon, PlusIcon, SearchIcon, UserIcon } from "../../public/icon/icons";

const Tab = createBottomTabNavigator()
const screenOptions = {
    tabBarStyle:{
      // backgroundColor:'black',
      position:'absolute',
      backgroundColor: '#fff',
      borderTopWidth: 2,       // Ketebalan border atas
      borderTopColor: '#9E9E9E', // Warna border atas (dalam hal ini, warna hitam)
      borderTopStyle: 'solid',
    //   marginHorizontal: 6,
    //   marginBottom: 6,
    //   borderRadius: 5,
      height: 70,
      paddingBottom: 1,
      
    },
    tabBarItemStyle:{
      backgroundColor: '#FFE500',
 
    },
    tabBarActiveTintColor: '#FF0000',
    tabBarInactiveTintColor: '#655C5C',
    // tabBarActiveBackgroundColor: '#39A7FF' ,
    // tabBarBackground: () => (
    //   <BlurView  intensity={30} style={StyleSheet.absoluteFill} />
    // ),
    tabBarLabelStyle: {
      fontSize: 14,
    //   fontWeight: 'bold',
    },
    headerStyle: {
        backgroundColor: '#FFE500',
    },
    headerTitleAlign: 'center',
    // title: 'LAPORKEUN!!',
    // header: ({ navigation, options }) => {
    //   const title = getHeaderTitle(options, route.name);
    //   return <MyHeader title={title} style={options.headerStyle} />;
    // },
};
const Navigasi = ()=> {
    return(
        <Tab.Navigator {...{ screenOptions }}>
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <HomeIcon color={color} size={size} />
                    ),
                    headerTitle: "HOME"
                }}
            />
            <Tab.Screen 
                name="Search" 
                component={Search} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <SearchIcon size={size} color={color} />
                    ),
                    headerTitle: "SEARCH"
                }}
            />
            <Tab.Screen 
                name="Lapor" 
                component={BuatLapor} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <PlusIcon size={size} color={color} />
                    ),
                    headerTitle: "LAPOR"
                }}
            />
            <Tab.Screen 
                name="Notifikasi" 
                component={Notifikasi} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <NotifikasiIcon size={size} color={color} />
                    ),
                    headerTitle: "NOTIFIKASI",
                    tabBarBadge: 1
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <UserIcon size={size} color={color} />
                    ),
                    headerTitle: "PROFILE"
                }}
            />
        </Tab.Navigator>
    )
}

export default Navigasi;