import { useEffect, useState } from "react";
import { ScrollComponent } from "./SimpleBar";
import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useAppDispatch, useAppSelector } from "../../redux/root/hooks";
import {
  selectNotificationList,
  selectNotificationLoading,
  selectNotificationError,
  getNotifications,
} from "../../redux/silces/notificationSlide";
import LoadingPage from "./LoadingPage";

export const Notifications = () => {
  const [open, setOpen] = useState(false);

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
          {open ? <ListNotifi /> : <></>}
        </div>
      </div>
    </>
  );
};

const ListNotifi = () => {
  const notificationList = useAppSelector(selectNotificationList);
  const notificationLoading = useAppSelector(selectNotificationLoading);
  const notificationError = useAppSelector(selectNotificationError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNotifications({ params: { limit: 10, page: 1 } }));
  }, []);

  console.log("gfdnjgkdsf", notificationLoading, notificationError);
  return (
    <>
      <div
        className={`absolute right-0 mt-2 bg-white rounded-md shadow-2xl overflow-hidden  z-20 `}
      >
        <ScrollComponent className="py-2 max-h-[500px]  overflow-y-auto w-96 min-h-[400px]">
          <LoadingPage
            loading={notificationLoading}
            error={notificationError || !notificationList?.length}
          >
            <>
              {notificationList?.map((message, idx) => {
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
          </LoadingPage>
        </ScrollComponent>
      </div>
    </>
  );
};
