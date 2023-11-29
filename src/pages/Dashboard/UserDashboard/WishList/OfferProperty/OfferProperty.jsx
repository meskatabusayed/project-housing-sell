import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import Swal from "sweetalert2";


const OfferProperty = () => {
    const {user} = useContext(AuthContext);
    const wish = useLoaderData();
    const axiosPublic = useAxiosPublic();

    const {
        _id ,
        verificationStatus ,
        propertyTitle , 
        propertyImage,
        maxPrice , 
        minPrice , 
        propertyLocation , 
        priceRange ,
        agentName , agentEmail} = wish || {}




        const handleAddOffer = event => {
          event.preventDefault();
          const form = event.target;

          const propertyTitle  = form.propertyTitle.value;
          const date  = form.date.value;
          const propertyLocation  = form.propertyLocation.value;
          
          const buyerEmail = form.buyerEmail.value;
          const buyerName= form.buyerName.value;
          const amount = form.amount.value;
          const agentName = form.agentName.value;
          const propertyImage = form.propertyImage.value;
         const newBuy = { agentName , propertyTitle ,  propertyLocation ,  date ,  buyerEmail , amount , buyerName , propertyImage};
          console.log(newBuy);
          
          fetch(`https://meskat-ph-assign-12-server.vercel.app/buys`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newBuy),
          })
            .then((res) => res.json())
            .then((data) => {
              form.reset();
              console.log(data);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Offer Completed",
                showConfirmButton: false,
                timer: 1500
              });
            });
         
            
        }
      
    





    return (
        <div>
    
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-lg w-96 my-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Offer Property
          </h2>
          <form onSubmit={handleAddOffer} className="space-y-4">

          <div>
              <label className="block text-sm font-medium text-gray-600">
               Agent Name
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
                Offer Amount
              </label>
              <input
                type="number"
                name="amount"
                className="w-full border rounded py-2 px-3"
                placeholder="offer Price"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Property Title
              </label>
              <input
                type="text"
                name="propertyTitle"
                defaultValue={propertyTitle}
                readOnly
                className="w-full border rounded py-2 px-3"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
               Property Location
              </label>
              <input
                type="text"
                name="propertyLocation"
                defaultValue={propertyLocation}
                readOnly
                className="w-full border rounded py-2 px-3"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
              Property Image 
              </label>
              <input
                type="text"
                name="propertyImage"
                defaultValue={propertyImage}
                readOnly
                className="w-full border rounded py-2 px-3"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
               Buyer Name
              </label>
              <input
                type="text"
                name="buyerName"
                value={user.displayName}
                readOnly
                className="w-full border rounded py-2 px-3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
               Buyer Email
              </label>
              <input
                type="text"
                name="buyerEmail"
                value={user.email}
                readOnly
                className="w-full border rounded py-2 px-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Date
              </label>
              <input
                type="date"
                name="date"
                className="w-full border rounded py-2 px-3"
              />
            </div>
            
            

            
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-700"
              >
                Offer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default OfferProperty;