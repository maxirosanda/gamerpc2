import axios from "axios";

export default axios.create({
    baseURL: "https://gamerpc-693de-default-rtdb.firebaseio.com"
})