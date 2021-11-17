import axios from "axios";

const BASE_URL = "https://api.github.com/repos/MahdyarEn/nikan46";

export const getGithubInfo = async () =>{
    const response = await axios.get(BASE_URL);
    return response.data;
}