import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";


const ManageReview = () => {

    const axiosPublic = useAxiosPublic();

    const {refetch , data: reviews = [] }  = useQuery({
        queryKey: ['buys'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews')
            return res.data;        
        }
    })


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
                      <p>Review Name : {review.email}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Delete</button>
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