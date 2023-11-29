import { Link } from "react-router-dom";
import useAdd from "../../../hooks/useAdd";


const Advertisement = () => {
    const [add] = useAdd();
    
    return (
        <div>
            <h2 className='text-3xl text-center font-extrabold my-20'>Our Advertisement Section</h2>
            
            <div className="flex items-center justify-center">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
           {
                add.map(item => <div key={item._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={item.propertyImage} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Location : {item.propertyLocation}</h2>
                  <p>Price Range : ${item.minPrice} - {item.maxPrice}</p>
                  <p>Verification Status: {item.verificationStatus}</p>
                  <div className="card-actions justify-end">
                  <Link to={`/details/${item._id}`}><button className="btn btn-primary">Details</button></Link>
                  </div>
                </div>
              </div>)
            }
           </div>
           </div>
        </div>
    );
};

export default Advertisement;