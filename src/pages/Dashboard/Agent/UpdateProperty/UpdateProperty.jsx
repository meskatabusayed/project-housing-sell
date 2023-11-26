import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const UpdateProperty = () => {
  const property = useLoaderData();
  const axiosPublic = useAxiosPublic();
  console.log(property);

  const {
    _id ,
    propertyImage , 
    maxPrice , 
    minPrice , 
    propertyLocation , 
    propertyTitle , 
    agentName , agentEmail} = property || {}


  const handleUpdateProperty = async (event) => {
    event.preventDefault();
    const form = event.target;
    const agentEmail  = form.agentEmail.value;
    const agentName       = form.agentName.value;
    const propertyTitle       = form.propertyTitle.value;
    const propertyLocation    = form.propertyLocation.value;
    
    const minPrice       = form.minPrice.value;
    const maxPrice       = form.maxPrice.value;
    const propertyImage       = form.propertyImage.value;
    const UpdateProperty = {agentEmail ,agentName  , propertyTitle , propertyLocation  , minPrice , maxPrice  , propertyImage}
    console.log(UpdateProperty);

    const propertyRes = await axiosPublic.patch(`/adds/${_id}` , UpdateProperty);
        console.log(propertyRes.data);
        if(propertyRes.data.modifiedCount > 0){
            // show success popup
            form.reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Property Updated Successfully",
                showConfirmButton: false,
                timer: 1500
              });
        }

  }

  return (
    <div>
    
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-lg w-96 my-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Update a Property
          </h2>
          <form onSubmit={handleUpdateProperty} className="space-y-4">

          <div>
              <label className="block text-sm font-medium text-gray-600">
                Name
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
                Email
              </label>
              <input
                type="text"
                name="agentEmail"
                value={agentEmail}
                readOnly
                className="w-full border rounded py-2 px-3"
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
                className="w-full border rounded py-2 px-3"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Minimum Price
                </label>
                <input
                  type="number"
                  name="minPrice"
                  defaultValue={minPrice}
                  className="w-full border rounded py-2 px-3"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Maximum Price
                </label>
                <input
                  type="number"
                  name="maxPrice"
                  defaultValue={maxPrice}
                  className="w-full border rounded py-2 px-3"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="photoURL" className="block text-gray-600 text-sm font-medium mb-2">
              Property Image
              </label>
              <input
                type="text"
                id="propertyImage"
                name="propertyImage"
                defaultValue={propertyImage}
                className="w-full p-3 bg-gray-100 border border-gray-400 rounded focus:ring focus:ring-indigo-400"
                placeholder="Photo URL"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-700"
              >
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProperty;
