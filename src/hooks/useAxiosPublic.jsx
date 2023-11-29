import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://meskat-ph-assign-12-server.vercel.app'
})


const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;