import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Review from "./Review";
import { useContext} from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";


const AddDetails = () => {
  
  
  const houseDetails = useLoaderData();
  const {user } = useContext(AuthContext);
  
  
  console.log(houseDetails);
  const {
    _id,
    propertyImage,
    propertyLocation,
    minPrice,
    maxPrice,
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
    const ReviewerName = form.ReviewerName.value;
   const newReview = { review  , propertyTitle , email , ReviewerName};
    console.log(newReview);
    form.reset();
    fetch(`https://meskat-ph-assign-12-server.vercel.app/reviews`, {
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



  const handleAddWish = event => {
    event.preventDefault();
    const form = event.target;
    const propertyTitle  = form.propertyTitle.value;
    const propertyImage  = form.propertyImage.value;
    const propertyLocation  = form.propertyLocation.value;
    const agentName  = form.agentName.value;
    const email = form.email.value;
    const verificationStatus = form.verificationStatus.value;
    const minPrice = form.minPrice.value;
    const maxPrice = form.maxPrice.value;
    const myWish = form.myWish.value;
   const newWish = { verificationStatus , propertyTitle , propertyImage , propertyLocation , agentName , email , minPrice , maxPrice , myWish};
    console.log(newWish);
    
    fetch(`https://meskat-ph-assign-12-server.vercel.app/wishes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newWish),
    })
      .then((res) => res.json())
      .then((data) => {
        
        console.log(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Added Successfully",
          showConfirmButton: false,
          timer: 1500
        });
      });
   
      
  }




  return (
    <div>
      <h2 className="text-3xl text-center font-extrabold my-10">Details</h2>
      <div className="flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Property Title : {propertyTitle}</h2>
            <p className="font-bold">Description : {description}</p>
            <p className="font-bold">Price Range : ${minPrice} - {maxPrice}</p>
            <p className="font-bold">Agent Name : {agentName}</p>
            <div className="card-actions justify-end">
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn btn-primary"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Add to Wishlist
              </button>
              <dialog
                id="my_modal_1"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg"> </h3>
                  <form onSubmit={handleAddWish}>
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
                        type="text"
                        name="propertyImage"
                        value={ propertyImage}
                        readOnly
                        className="w-full border rounded py-2 px-3"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        
                      </label>
                      <input
                        type="text"
                        name="propertyLocation"
                        value={ propertyLocation}
                        readOnly
                        className="w-full border rounded py-2 px-3"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        
                      </label>
                      <input
                        type="text"
                        name="agentName"
                        value={agentName}
                        readOnly
                        className="w-full border rounded py-2 px-3"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        
                      </label>
                      <input
                        type="text"
                        name="verificationStatus"
                        value={verificationStatus}
                        readOnly
                        className="w-full border rounded py-2 px-3"
                      />
                    </div>


                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        
                      </label>
                      <input
                        type="text"
                        name="minPrice"
                        value={minPrice}
                        readOnly
                        className="w-full border rounded py-2 px-3"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        
                      </label>
                      <input
                        type="text"
                        name="maxPrice"
                        value={maxPrice}
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
                      <label className="block text-sm font-medium text-gray-600">
                        
                      </label>
                      <input
                        type="text"
                        name="myWish"
                        value='wish'
                        readOnly
                        className="w-full border rounded py-2 px-3"
                      />
                    </div>
                   
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-700"
                      >
                        Add to Wishlist
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



                <div>

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
                        type="text"
                        name="ReviewerName"
                        value={ user.displayName}
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
      </div>
      <Review propertyTitle={propertyTitle}></Review>
    </div>
  );
};

export default AddDetails;
