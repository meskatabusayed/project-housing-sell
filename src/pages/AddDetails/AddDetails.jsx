import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Review from "./Review";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const AddDetails = () => {
  const houseDetails = useLoaderData();
  const {user} = useContext(AuthContext);
  console.log(houseDetails);
  const {
    _id,
    propertyImage,
    propertyLocation,
    priceRange,
    verificationStatus,
    agentName,
    description,
    propertyTitle,
  } = houseDetails || {};

  const handleAddReview = event => {
    event.preventDefault();
    const form = event.target;
    const propertyTitle  = form.propertyTitle.value;
    const email = form.email.value;
    const review = form.review.value;
   const newReview = { review  , propertyTitle , email};
    console.log(newReview);
    form.reset();
    fetch(`http://localhost:5000/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h2 className="text-3xl text-center font-extrabold my-10">Details</h2>
      <div className="flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Property Title : {propertyTitle}</h2>
            <p className="font-bold">Description : {description}</p>
            <p className="font-bold">Price Range : ${priceRange}</p>
            <p className="font-bold">Agent Name : {agentName}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add to wishlist</button>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn btn-primary"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Review
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg"> </h3>
                  <form onSubmit={handleAddReview}>
                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        
                      </label>
                      <input
                        type="text"
                        name="propertyTitle"
                        value={ propertyTitle}
                        readOnly
                        className="w-full border rounded py-2 px-3"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={ user.email}
                        readOnly
                        className="w-full border rounded py-2 px-3"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 text-xl font-bold my-2">Review</label>
                      <textarea
                        name="review"
                        className="w-full border rounded py-2 px-3"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-700"
                      >
                        Review
                      </button>
                    </div>
                  </form>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
      <Review propertyTitle={propertyTitle}></Review>
    </div>
  );
};

export default AddDetails;
