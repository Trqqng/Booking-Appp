import React from "react";
import { format } from "date-fns";

const ReviewCard = ({ user, isVisible }) => {
  const trendingReviews = user.reviews.filter(
    (review) => review.trending === "true",
  );

  if (trendingReviews.length === 0) {
    return null;
  }

  return (
    <div
      className={`flex relative group review-card transition-transform duration-500 ease-in-out ${
        isVisible
          ? "transform translate-y-0 opacity-100"
          : "transform translate-y-96 opacity-0"
      }`}
    >
      <div className="relative">
        <img
          src={user.profilePicture}
          alt={user._id}
          className="w-44 h-32 object-cover rounded-lg"
        />
        {trendingReviews.map((review, index) => (
          <div key={index} className="absolute top-0 left-0 text-white rounded">
            <div className="flex items-center text-black">
              <span className="flex items-center text-black px-2 py-1 bg-yellow-300 rounded-md shadow-md">
                {review.likes.length}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                  />
                </svg>
              </span>

              <div className="pl-3 pr-3 flex flex-col text-gray-300 text-xs leading-tight bg-purple-500 items-center rounded-md">
                <span>{format(new Date(review.createdAt), "dd")}</span>
                <span className="align-center">
                  {format(new Date(review.createdAt), "MMM").slice(0, 3)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex bg-white rounded-lg shadow-md w-full p-2 ">
        <div className="text-black">
          <div className="font-bold text-md">{user.fullName}</div>
          {trendingReviews.map((review, index) => (
            <div key={index} className="mt-2">
              <span className="flex items-center text-gray-400 text-sm">
                Rating: {review.rating}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4 inline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </span>
              <div className="text-gray-700">{review.comment}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
