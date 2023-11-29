import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img
          className="w-[500px] mt-20"
          src="https://i.ibb.co/CwtDRPp/Untitled-design-8.png"
          alt="Error"
        />
       
      </div>
      <div className="flex justify-center items-center">
      <Link to="/">
          <button className="btn btn-primary">Please Go To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
