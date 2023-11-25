import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {  data: users = [] , refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = user =>{
    axiosSecure.patch(`users/admin/${user._id}`)
    .then(res => {
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an Admin Now`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })

  }

  const handleMakeAgent = user => {
    axiosSecure.patch(`users/agent/${user._id}`)
    .then(res => {
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an Agent Now`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })

  }
 
  const handleDeleteUser = user => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/users/${user._id}`)
          .then((res) => {
              console.log(res.data)
            if(res.data.deletedCount> 0) {
                refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
        }
      });

  }







  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">Manage Users</h2>
        <h2 className="text-3xl">Total Users {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>User name</th>
              <th>User email</th>
              <th>Make admin</th>
              <th>Make agent</th>
              <th>Mark as fraud</th>
              <th>Delete user</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user , index) => <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        {
                            user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-primary">Admin</button>
                        }
                    </td>

                    <td>
                        {
                            user.role === 'agent' ? 'Agent' : <button onClick={() => handleMakeAgent(user)} className="btn btn-accent">Agent</button>
                        }
                    </td>

                    <td>
                        {
                            user.role === 'agent' && <button className="btn btn-warning">Fraud</button>
                        }
                    </td>

                    <td><button onClick={() => handleDeleteUser(user)} className="btn btn-error">Delete</button></td>
                  </tr>)
            }
            
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
