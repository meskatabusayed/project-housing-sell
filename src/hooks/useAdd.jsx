import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";


const useAdd = () => {
    // const [add , setAdd] = useState([]);
    // const [loading , setLoading] = useState(true);
    
    // useEffect(() => {
    //     fetch('https://meskat-ph-assign-12-server.vercel.app/add')
    //     .then(res =>res.json())
    //     .then(data => {
    //         setAdd(data);
    //         setLoading(false);
    //     })
    // } ,[])


    const axiosSecure = useAxiosSecure();
    const {refetch , data: add = [] }  = useQuery({
        queryKey: ['add'],
        queryFn: async () => {
            const res = await axiosSecure.get('/add')
            return res.data;        
        }
    })


    return [add , refetch]
};

export default useAdd;