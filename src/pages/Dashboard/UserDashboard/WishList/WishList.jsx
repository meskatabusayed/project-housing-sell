import { useContext, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";


const WishList = () => {
    const { user } = useContext(AuthContext);
  
    const [myWishList, setMyWishList] = useState([]);

    const url = `https://meskat-ph-assign-12-server.vercel.app/wish?email=${user.email}`;

    const { data: wish = []  } = useQuery({
        queryKey: [url],
        queryFn: async() => {
            const res = await axios.get(url);
            setMyWishList(res.data);
        }
    })

    console.log(myWishList);




    return (
        <div className="flex justify-center items-center mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                {
                    myWishList.map(wish => <div key={wish._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={wish.propertyImage} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">Property Title : {wish.propertyTitle}</h2>
                      <p>Property Location :{wish.propertyLocation}</p>
                      <p>Agent Name : {wish.agentName}</p>
                      <p>Status : {wish.verificationStatus}</p>
                      <p>Price Range : {wish.minPrice} - {wish.maxPrice}</p>
                      <div className="card-actions justify-end">
                        <Link to={`/dashboard/offerProperty/${wish._id}`}> <button className="btn btn-primary">Make an offer</button> </Link> 
                        <button className="btn btn-primary">Remove</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default WishList;