import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const ManageReview = () => {

    const axiosPublic = useAxiosPublic();

    const {refetch , data: reviews = [] }  = useQuery({
        queryKey: ['buys'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews')
            return res.data;        
        }
    })


    const handleDeleteReview =  (review) => {
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
                const res = await axiosPublic.delete(`/review/${review._id}`);
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
            <h2 className="text-3xl text-center my-10 font-extrabold">Manage Reviews :  {reviews.length} </h2>
            <div className="flex justify-center items-center my-10">
            <div>
                {
                    reviews.map(review => <div key={review._id} className="card w-96 bg-base-100 shadow-xl my-5">
                    <figure><img src={review.ReviewerImage} alt="Reviewer Photo" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">Reviewer Name : {review.ReviewerName}</h2>
                      <p>Review : {review.review}</p>
                      <p>Review email : {review.email}</p>
                      <div className="card-actions justify-end">
                        <button onClick={() => handleDeleteReview(review)} className="btn btn-primary">Delete</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
            </div>
        </div>
    );
};

export default ManageReview;