import axios from "axios";

const BASE_URL = "https://lightem.senatorhost.com/test/index.php";

export const getTime = async () =>{
    const response = await axios.get(BASE_URL);
    return response.data;
}