import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    fetch("https://meskat-ph-assign-12-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);

  return (
    <div>
      <h2 className="text-3xl text-center font-extrabold mt-10">
        Latest User review section
      </h2>
      <div className="mt-5 mb-10">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {allReviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="m-24">
                <div className="flex items-center justify-center">
                <div className="avatar">
                  <div className="w-24 rounded">
                    <img  src={review.ReviewerImage} />
                  </div>
                </div>
                </div>
                <p>{review.review}</p>
                <h1 className="text-2xl text-orange-400 text-center">
                  {review.ReviewerName}
                </h1>
                <h1 className="text-2xl text-green-600 text-center">
                  {review.propertyTitle}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
