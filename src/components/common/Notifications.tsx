import { useState } from "react";
import { ScrollComponent } from "./SimpleBar";
import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";

export const Notifications = () => {
  const [open, setOpen] = useState(false);

  const [listMessage, setMessage] = useState<Record<string, any>[]>([
    {
      user: {
        name: "Slick Net",
      },
      time: new Date(),
      content: "Start following you",
      id: "fsdgsadf",
    },
    {
      user: {
        name: "Jane Doe",
      },
      time: new Date(),
      content: "Start following you",
      id: "fsdgsdasdaadf",
    },
    {
      user: {
        name: "Jane Doe 2",
      },
      time: new Date(),
      content: "Start following you",
      id: "fsdgdsadsadf",
    },
    {
      user: {
        name: "Jane Doe 3",
      },
      time: new Date(),
      content: "Start following you",
      id: "fsdgsvsvasadf",
    },
    {
      user: {
        name: "Slick Net",
      },
      time: new Date(),
      content: "Start following you",
      id: "fsdgsadf",
    },
    {
      user: {
        name: "Jane Doe",
      },
      time: new Date(),
      content: "Start following you",
      id: "fsdgsdasdaadf",
    },
    {
      user: {
        name: "Jane Doe 2",
      },
      time: new Date(),
      content: "Start following you",
      id: "fsdgdsadsadf",
    },
    {
      user: {
        name: "Jane Doe 3",
      },
      time: new Date(),
      content: "Start following you",
      id: "fsdgsvsvasadf",
    },
    {
      user: {
        name: "Slick Net",
      },
      time: new Date(),
      content: "Start following you",
      id: "fsdgsadf",
    },
    {
      user: {
        name: "Jane Doe",
      },
      time: new Date(),
      content: "Start following you",
      id: "fsdgsdasdaadf",
    },
    {
      user: {
        name: "Jane Doe 2",
      },
      time: new Date(),
      content: "Start following you",
      id: "fsdgdsadsadf",
    },
    {
      user: {
        name: "Jane Doe 3",
      },
      time: new Date(),
      content: "Start following you",
      id: "fsdgsvsvasadf",
    },
    {
      user: {
        name: "Slick Net",
      },
      time: new Date(),
      content: "Start following you",
      id: "fsdgsadf",
    },
    {
      user: {
        name: "Jane Doe",
      },
      time: new Date(),
      content: "Start following you",
      id: "fsdgsdasdaadf",
    },
    {
      user: {
        name: "Jane Doe 2",
      },
      time: new Date(),
      content: "Start following you",
      id: "fsdgdsadsadf",
    },
    {
      user: {
        name: "Jane Doe 3",
      },
      time: new Date(),
      content: "Start following you",
      id: "fsdgsvsvasadf",
    },
  ]);

  return (
    <>
      <div className=" mr-3">
        <div className="relative">
          <button
            className="relative z-10 block rounded-md text-white p-1 focus:outline-none cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <NotificationsIcon sx={{ width: "30px", height: "30px" }} />
            <span className="absolute w-6 h-6 bg-red-600 rounded-full center -top-2 text-sm -right-2">
              3
            </span>
          </button>

          <div
            className={`fixed inset-0 h-full w-full z-10 ${
              open ? "" : "hidden"
            }`}
            onClick={() => setOpen(false)}
          ></div>

          <div
            className={`absolute right-0 mt-2 bg-white rounded-md shadow-2xl overflow-hidden  z-20 ${
              open ? "" : "hidden"
            }`}
          >
            <ScrollComponent className="py-2 max-h-[500px]  overflow-y-auto w-96">
              <>
                {listMessage.map((message, idx) => {
                  return (
                    <Link
                      to="#"
                      className="flex items-center px-4 py-3 border-b hover:bg-gray-100"
                      key={idx}
                    >
                      <img
                        className="h-8 w-8 rounded-full object-cover mx-1"
                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        alt="avatar"
                      />
                      <p className="text-gray-600 text-sm mx-2">
                        <span className="font-bold">{message.user?.name}</span>{" "}
                        start following you . 45m
                      </p>
                    </Link>
                  );
                })}
              </>
            </ScrollComponent>
            <Link
              to="#"
              className="block bg-background hover:bg-color transition-colors text-white text-center font-bold py-2"
            >
              See all notifications
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
