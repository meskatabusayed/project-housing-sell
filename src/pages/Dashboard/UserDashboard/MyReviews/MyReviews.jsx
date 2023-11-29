import { useContext, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";


const MyReviews = () => {


    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
  
    const [myReviews, setMyReviews] = useState([]);

    const url = `https://meskat-ph-assign-12-server.vercel.app/review?email=${user.email}`;

    const { data: review = [] , refetch } = useQuery({
        queryKey: [url],
        queryFn: async() => {
            const res = await axios.get(url);
            setMyReviews(res.data);
        }
    })

    

    const handleDeleteReview =  (myR) => {
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
                const res = await axiosPublic.delete(`/review/${myR._id}`);
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
        <div>
            <h2 className="text-3xl my-10 font-extrabold text-center">Reviews</h2>
            {/* {
                myReviews.map((myR , index) => <div className="flex my-5  justify-center items-center" key={myR._id}>
                    
                    <div>
                        <h2>{index + 1} . {myR.review}</h2>
                    </div>
                    <div>
                    <button onClick={() => handleDeleteReview(myR)} className="btn ml-2 btn-outline btn-error">Delete</button>
                    </div>
                
                </div>)
            } */}
            {
                myReviews.map(myR => <div key={myR._id} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Property Title: 
                  {myR.propertyTitle}</h2>
                  <p>Reviewer Name :{myR.ReviewerName}</p>
                  <p>Name : {myR.review}</p>
                  <div className="card-actions justify-end">
                    <button onClick={() => handleDeleteReview(myR)} className="btn btn-primary">Delete</button>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default MyReviews;