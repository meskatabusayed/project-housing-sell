import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const MyAddedProperties = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  
  const [myProperties, setMyProperties] = useState([]);
  const url = `https://meskat-ph-assign-12-server.vercel.app/adds?agentEmail=${user.email}`;

//   useEffect(() => {
//     axios.get(url).then((res) => {
//       setMyProperties(res.data);
//     });
//   }, []);

        const { data: adds = [] , refetch  } = useQuery({
            queryKey: [url],
            queryFn: async() => {
                const res = await axios.get(url);
                setMyProperties(res.data);
            }
        })

  const handleDeleteProperty =  (property) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then( async (result) => {
        if (result.isConfirmed) {
            const res = await axiosPublic.delete(`/add/${property._id}`);
            console.log(res.data);
            if(res.data.deletedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Deleted",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        
        }
      });
  }

  return (
    <div className="flex justify-center items-center my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {myProperties.map((property) => (
          <div
            key={property._id}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img src={property.propertyImage} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Property Title : {property.propertyTitle}
              </h2>
              <p>Property Location : {property.propertyLocation}</p>
              <p>Price Range : {property.minPrice} - {property.maxPrice
}</p>
              <div className="avatar">
                <div className="w-24 rounded">
                  <img src={user?.photoURL} />
                </div>
                <p className="ml-2">Agent Name: {user?.displayName}</p>
                
              </div>

              <div className="card-actions justify-end">
                <Link to={`/dashboard/updateProperty/${property._id}`}><button className="btn btn-primary">Update Now</button></Link>
                <button onClick={() => handleDeleteProperty(property)} className="btn btn-primary">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAddedProperties;
