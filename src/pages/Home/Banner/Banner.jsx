

const Banner = () => {
    return (
        <div>
        <div  className="carousel-item relative w-full h-[600px]">
        <img src="https://i.ibb.co/zhW7WHY/pexels-photo-106399.jpg" className="w-full" />
        <div className="absolute flex items-center h-full justify-between  left-0 top-0lg:top-0 bg-gradient-to-r from-[#151515] t0-[rgba(21,21,21,0)]">
         <div className="text-white pl-10 w-1/2">
            <h2 className="text-6xl font-bold mb-5">The #1 site real estate  company <span className="text-green-600">professionals trust*</span></h2>
           
            <div className="mt-5"> 
            <button className="btn btn-primary">Buy Now</button>
         </div>
         </div>
        
        </div>
        </div>
        </div>
    );
};

export default Banner;