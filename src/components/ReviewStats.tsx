import React from "react";
import Rating from "./Rating";
import { ReviewInterface } from "../interfaces";

const ReviewStats: React.FC<{ reviews: ReviewInterface }> = ({ reviews }) => {
  return (
    <>
      <div className="mt-3 flex items-center">
        <div>
          <div className="flex items-center">
            <Rating rating={5} />
          </div>
          <p className="sr-only">{reviews.average} out of 5 stars</p>
        </div>
        <p className="ml-2 text-sm text-white">
          Based on {reviews.totalCount} reviews
        </p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Review data</h3>

        <dl className="space-y-3">
          {reviews.counts.map((count) => (
            <div key={count.rating} className="flex items-center text-sm">
              <dt className="flex flex-1 items-center">
                <p className="w-3 font-medium text-white">
                  {count.rating}
                  <span className="sr-only"> star reviews</span>
                </p>
                <div
                  aria-hidden="true"
                  className="ml-1 flex flex-1 items-center"
                >
                  <Rating rating={count.rating} showOnlyActive />

                  <div className="relative ml-3 flex-1">
                    <div className="h-3 rounded-full border border-gray-700 bg-gray-800" />
                    {count.count > 0 ? (
                      <div
                        className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                        style={{
                          width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                        }}
                      />
                    ) : null}
                  </div>
                </div>
              </dt>
              <dd className="ml-3 w-10 text-right text-sm tabular-nums text-white">
                {Math.round((count.count / reviews.totalCount) * 100)}%
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
};

export default ReviewStats;
