import React from "react";
import Rating from "./Rating";
import { FeaturedReview, ReviewInterface } from "../interfaces";
import Image from "./Image";

const ReviewItem: React.FC<{ review: FeaturedReview }> = ({ review }) => {
  return (
    <div key={review.id} className="py-8">
      <div className="flex items-center">
        <Image
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
