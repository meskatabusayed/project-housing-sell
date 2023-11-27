// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const UserBought = () => {
  const [myBuys , setMyBuys] = useState([]);
  const {user} = useContext(AuthContext);



  const url = `http://localhost:5000/buy?buyerEmail=${user.email}`;

    const { data: buy = [] } = useQuery({
        queryKey: [url],
        queryFn: async() => {
            const res = await axios.get(url);
            setMyBuys(res.data);
        }
    })


  // const axiosPublic = useAxiosPublic();
  // const { data: buys = [], refetch } = useQuery({
  //   queryKey: ["buys"],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get("/buys");
  //     return res.data;
  //   },
  // });


  console.log(myBuys);

  return (
    <div className="flex justify-center items-center my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> 

            {
               myBuys.map(buy => <div key={buy._id} className="card w-96 bg-base-100 shadow-xl">
               <figure><img src={buy.propertyImage}alt="Shoes" /></figure>
               <div className="card-body">
                 <h2 className="card-title">Property Title : {buy.propertyTitle}</h2>
                 <p>Property Location : {buy.propertyLocation}</p>
                 <p>Agent Name : {buy.agentName}</p>
                 <p>Offered  Amount : {buy.amount}</p>
                 <p>Status: {buy.status ? buy.status : 'Pending'}</p>
                 {buy.status === 'accept' ? <Link to="/dashboard/payment"><button  className="btn btn-primary">Pay</button></Link>
                 :
                 <button disabled className="btn btn-primary">Pay</button>
                }
               </div>
             </div>) 
            }

        </div>
    </div>
  );
};

export default UserBought;
