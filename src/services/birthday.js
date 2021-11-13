import axios from "axios";

const BASE_URL = "https://lightem.senatorhost.com/test/index2.php";

export const getBirthday = async () =>{
    const response = await axios.get(BASE_URL);
    return response.data;
}