import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const AllProperties = () => {
    const [asc , setAsc] = useState(true);
    const [properties , setProperties] = useState([]);
    const [search , setSearch] = useState('');
    


    const axiosSecure = useAxiosSecure();
    // const {refetch , data: properties = [asc] }  = useQuery({
    //     queryKey: ['add'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/add?sort=${asc ? 'asc' : 'desc'}`)
    //         return res.data;        
    //     }
    // })

    useEffect(() => {
        axiosSecure(`/addv?sort=${asc ? 'asc' : 'desc'}&search=${search}`)
        .then(res => setProperties(res.data))
    } ,[axiosSecure , asc , search])



   
    const verifiedProperty = properties.filter(item => item.verificationStatus === 'Verified');

    const handleSubmit = e => {
        e.preventDefault();
        const searchText = e.target.search.value;
        // console.log(searchText);
        setSearch(searchText);
    }





    

    return (
        <div>
        <h2 className='text-3xl text-center font-extrabold my-20'>All Properties</h2>

        <div className="flex justify-center items-center mb-5">
        <form onSubmit={handleSubmit}>
            <input type="text" className="input input-bordered input-accent " name="search" id=""/>
            {/* <input type="text" name="search" placeholder="Type here" className="input input-bordered input-accent " />*/}
            <input className="btn ml-2" type="submit" value="Search"/> 
        </form>
        </div>


       <div className="flex justify-center items-center mb-5">
        <button 
       onClick={() => setAsc(!asc)}
       className="btn btn-primary text-center">

        {asc ? 'Price Range : High to Low' : "Price Range : Low To High"}
        
        </button>
       </div>
        <div className="flex items-center justify-center">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
       {
            verifiedProperty.map(item => <div key={item._id} className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={item.propertyImage} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Property Title : {item.propertyTitle}</h2>
              <h2 className="card-title">Location : {item.propertyLocation}</h2>
              <p>Price Range : ${item.minPrice} - {item.maxPrice}</p>
              <p>Verification Status: {item.verificationStatus}</p>
              <p>Agent Name: {item.agentName}</p>
              <div className="card-actions justify-end">
              <Link to={`/details/${item._id}`}><button className="btn btn-primary">Details</button></Link>
              </div>
            </div>
          </div>)
        }
       </div>
       </div>
    </div>
    );
};

export default AllProperties;