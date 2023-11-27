import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";


const ManageProperties = () => {

    const axiosPublic = useAxiosPublic();

    const {refetch , data: buys = [] }  = useQuery({
        queryKey: ['buys'],
        queryFn: async () => {
            const res = await axiosPublic.get('/buys')
            return res.data;        
        }
    })


    return (
        <div>
        <div className="flex justify-evenly my-4">
          <h2 className="text-3xl">Manage Properties</h2>
          <h2 className="text-3xl">Total Properties {buys.length}</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>property title</th>
                <th>Property location</th>
                <th>Agent email</th>
                <th>Agent name</th>
                <th>Price Range</th>
                <th>Verify</th>
                <th>Reject</th>
              </tr>
            </thead>
            <tbody>
              {
                  buys.map((item , index) => <tr key={item._id}>
                      <th>{index + 1}</th>
                      <td>{item.propertyTitle}</td>
                      <td>{item.propertyLocation}</td>
                      <td>{item.buyerEmail}</td>
                      <td>{item.buyerName}</td>
                      <td>${item.amount}</td>
  
                      <td>
                      <button  className="btn btn-success">Verify</button> 
                      </td>
  
                      <td>
                      <button  className="btn btn-error">Reject</button> 
                      </td>
  
                     
                    </tr>)
              }
              
              
              
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageProperties;