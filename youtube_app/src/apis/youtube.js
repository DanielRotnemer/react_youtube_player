import axios from "axios";

const KEY = "AIzaSyDdB-lumxBXM3tKl5u6YRQe374u10lNUxc";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'videos',
        maxResults: 5,
        key: KEY
    }
});