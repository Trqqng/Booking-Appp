import React from "react";

const RoomList = React.memo(
  ({ part, title, isNot, handleRoomSelect, isRoomSelected, isSearching }) => {
    console.log("roomList re-render");
    return (
      <div>
        {isSearching && (
          <>
            <h2
              className={`text-xl font-bold mb-2 ${isNot ? "" : "text-white"}`}
            >
              {title}
            </h2>
            {part.map((room) => (
              <div key={room._id} className="mb-4">
                <h3 className="">{room.title}</h3>
                <div className="flex gap-10">
                  <p className="text-green-500">${room.price}</p>
                  <div className="text-green-500">
                    {room.maxPeople}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-3 mb-1 inline"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  {room.roomNumbers
                    .filter((number) => number.available)
                    .map((number) => (
                      <label key={number._id} className="inline-block mr-2">
                        <input
                          type="checkbox"
                          className="mr-1"
                          checked={isRoomSelected(room._id, number._id)}
                          onChange={() =>
                            handleRoomSelect(room._id, number._id, room.price)
                          }
                        />
                        {number.number}
                      </label>
                    ))}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    );
  },
);

export default RoomList;
