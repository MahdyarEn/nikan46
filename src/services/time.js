import axios from "axios";

const BASE_URL = "http://nikan46.ir/api/time.php";

export const getTime = async () =>{
    const response = await axios.get(BASE_URL);
    return response.data;
}