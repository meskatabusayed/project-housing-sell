import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";



const MyProfile = () => {

    const {user} = useContext(AuthContext);


  return (
    <div className="text-center">
      <h2 className="text-3xl my-5 text-green-700 font-extrabold">
         Profile
      </h2>
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1 ">
            <div className="avatar mr-2">
              <div className="w-24 rounded">
                <img src={user?.photoURL} />
              </div>
            </div>
            <span className="text-xl font-bold">
              Name : {user?.displayName}
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
