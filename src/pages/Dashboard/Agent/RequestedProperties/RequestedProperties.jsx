import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useState } from "react";
import axios from "axios";


const RequestedProperties = () => {

    const [status, setStatus] = useState( );



    const axiosPublic = useAxiosPublic();
  const { data: buys = [], refetch } = useQuery({
    queryKey: ["buys"],
    queryFn: async () => {
      const res = await axiosPublic.get("/buys");
      return res.data;
    },
  });

  const handleAccept = (item) => {
    
       setStatus('accept')
        const resultStatus = { status };
        axios.patch(`http://localhost:5000/buys/${item._id}` , resultStatus)
          .then((data) => {
            console.log(data.data);
            
          });

  }

  const handleReject = (item) =>{
    setStatus('reject')
        const resultStatus = { status };
        axios.patch(`http://localhost:5000/buys/${item._id}` , resultStatus)
          .then((data) => {
            console.log(data.data);
            
          });

  }



    return (
        <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">Manage Users</h2>
        <h2 className="text-3xl">Total Users {buys.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>property title</th>
              <th>Property location</th>
              <th>buyer email</th>
              <th>buyer name</th>
              <th>offered price</th>
              <th>Accept</th>
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
                    <button onClick={() =>
                          handleAccept(item)
                        } className="btn btn-success">Accept</button> 
                    </td>

                    <td>
                    <button onClick={() =>
                          handleReject(item)
                        } className="btn btn-error">Reject</button> 
                    </td>

                   
                  </tr>)
            }
            
            
            
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default RequestedProperties;