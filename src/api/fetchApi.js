import axios from "axios";
const getToken = async () => {
    try {
      const getToken = await AsyncStorage.getItem('authToken');
      console.log('Token yang didapatkan:', getToken);
      setToken(getToken)
    } catch (error) {
      console.error('Gagal mendapatkan token:', error);
    }
};

const fetchApi = axios.create({
    baseURL: "http://192.168.191.46:5174"
});




export default fetchApi;