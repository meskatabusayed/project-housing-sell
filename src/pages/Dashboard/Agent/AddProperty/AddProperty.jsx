import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


// const image_hosting_Key = import.meta.env.VITE_IMAGE_HOSTION_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_Key}`;

const AddProperty = () => {
    const {user} = useContext(AuthContext);

    const axiosPublic = useAxiosPublic();


    const handleAddProperty = async (event) => {
        event.preventDefault();
        const form = event.target;
        const agentEmail  = form.agentEmail.value;
        const agentName       = form.agentName.value;
        const propertyTitle       = form.propertyTitle.value;
        const propertyLocation    = form.propertyLocation.value;
        const description       = form.description.value;
        const minPrice       = form.minPrice.value;
        const maxPrice       = form.maxPrice.value;
        const propertyImage       = form.propertyImage.value;
        const newProperty = {agentEmail ,agentName  , propertyTitle , propertyLocation , description  , minPrice , maxPrice  , propertyImage}
        // console.log(newProperty);

        const propertyRes = await axiosPublic.post('/add' , newProperty);
        console.log(propertyRes.data);
        if(propertyRes.data.insertedId){
            // show success popup
            form.reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Property Added Successfully",
                showConfirmButton: false,
                timer: 1500
              });
        }


    }





    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
        
      <div className="bg-white p-8 rounded shadow-lg w-96 my-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Property</h2>
        <form onSubmit={ handleAddProperty } className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Agent email</label>
            <input
              type="text"
              name="agentEmail"
              value={user?.email}
              readOnly
              className="w-full border rounded py-2 px-3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Agent name</label>
            <input
              type="text"
              name="agentName"
              value={user?.displayName}
              readOnly
              className="w-full border rounded py-2 px-3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Property title</label>
            <input
              type="text"
              name="propertyTitle"
              
              className="w-full border rounded py-2 px-3"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Property location</label>
            <input
              type="text"
              name="propertyLocation"
              
              className="w-full border rounded py-2 px-3"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-600">Description</label>
            <textarea
              name="description"
              
              className="w-full border rounded py-2 px-3"
              rows="4"
              required
            ></textarea>
          </div>
         
          
          <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Minimum Price</label>
                <input
                  type="number"
                  name="minPrice"
                  
                  className="w-full border rounded py-2 px-3"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Maximum Price</label>
                <input
                  type="number"
                  name="maxPrice"
                 
                  className="w-full border rounded py-2 px-3"
                  required
                />
              </div>
            </div>

           <div>

           <div className="mb-6">
              <label htmlFor="photoURL" className="block text-gray-600 text-sm font-medium mb-2">
              Property Image
              </label>
              <input
                type="text"
                id="propertyImage"
                name="propertyImage"
                className="w-full p-3 bg-gray-100 border border-gray-400 rounded focus:ring focus:ring-indigo-400"
                placeholder="Photo URL"
              />
            </div>
           

            <div>
            <input type="file" className="file-input w-full max-w-xs mb-5" />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-700"
            >
              Add Property
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default AddProperty;