import Advertisement from "../Advertisement/Advertisement";
import Banner from "../Banner/Banner";
import Loan from "../Loan/Loan";
import ShowHome from "../ShowHome/ShowHome";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="my-10">
                <Advertisement></Advertisement>
            </div>
            <div className="my-10">
                <Testimonials></Testimonials>
            </div>
            <div className="my-10">
            <Loan></Loan>
            </div>
            <div className="my-10">
                <ShowHome></ShowHome>
            </div>
        </div>
    );
};

export default Home;