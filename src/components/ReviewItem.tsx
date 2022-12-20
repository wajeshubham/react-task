import React from "react";
import Rating from "../icons/rating";
import { FeaturedReview, ReviewInterface } from "../interfaces";

const ReviewItem: React.FC<{ review: FeaturedReview }> = ({ review }) => {
  return (
    <div key={review.id} className="py-8">
      <div className="flex items-center">
        <img
          src={review.avatarSrc}
          alt={`${review.author}.`}
          className="h-12 w-12 rounded-full"
        />
        <div className="ml-4">
          <h4 className="text-sm font-bold text-white">{review.author}</h4>
          <div className="mt-1 flex items-center">
            <Rating rating={review.rating} />
          </div>
          <p className="sr-only">{review.rating} out of 5 stars</p>
        </div>
      </div>

      <div className="mt-4 space-y-6 text-base italic text-white">
        {review.content}
      </div>
    </div>
  );
};

export default ReviewItem;
