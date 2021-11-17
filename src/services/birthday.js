import axios from "axios";

const BASE_URL = "http://nikan46.ir/api/birthday.php";

export const getBirthday = async () =>{
    const response = await axios.get(BASE_URL);
    return response.data;
}