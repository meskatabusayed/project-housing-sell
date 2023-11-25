import { useEffect, useState } from "react";


const Review = ({propertyTitle}) => {
    console.log(propertyTitle);
    const [review , setReview] = useState([]);
    const [loading , setLoading] = useState(true);
    

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res =>res.json())
        .then(data => {
            setReview(data);
            setLoading(false);
        })

    } ,[])

    const reviews = review.filter(item => item.propertyTitle === propertyTitle);
    console.log(reviews);

    return (
        <div>
            <h2 className="text-3xl text-center font-extrabold my-10">All Review</h2>
           <div>
           {
                reviews.map((rev , index) => <h1 className="text-2xl font-extrabold text-green-700 my-2 text-justify" key={rev._id}>Review  {index +1} : {rev.review}</h1>)
            }
           </div>
        </div>
    );
};

export default Review;