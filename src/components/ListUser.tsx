import { omit } from "lodash";
import React, { useEffect, useState } from "react";
import { Toasts } from "../utils/notification";
import { Requests } from "../utils/request";
import { URL_REQUEST } from "../utils/URL";
import "../css/listUser.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { getLocal, UseUserContext } from "../context/UserContext";
import LoaddingPage from "./LoaddingPage";

const ListUser = () => {
  const history = useHistory();
  const [listUser, setListUser] = useState([]);
  const [loadding, setLoadding] = useState(true);

  const getListUser = async () => {
    setLoadding(true);
    const data = await Requests.get(`${URL_REQUEST}/api/v1/user`);
    setLoadding(false);
    if (data?.errors) {
      return Toasts.error(data.errors.msg);
    }
    const list = data.users.map((item: any) => omit(item, "password"));
    setListUser(list);
  };

  useEffect(() => {
    getListUser();
  }, []);

  const handleRemove = async (id: string) => {
    try {
      const data = await Requests.delete(`${URL_REQUEST}/api/v1/user/${id}`);
      if (data?.error) {
        return Toasts.error("Remove Error");
      }
      getListUser();
      Toasts.success("User deleted successfully");
    } catch (error) {}
  };

  if (loadding) {
    return <LoaddingPage />;
  }

  return (
    <div id="list_user">
      <div className="d-flex justify-content-between">
        <h1>List User</h1>
        <button className="btn" onClick={() => history.push(`/create_user`)}>
          Add User
        </button>
      </div>
      <hr />
      <div className="list_container">
        {listUser.map((user: any, idx: number) => {
          if (idx === 0) {
            return (
              <div key={user.id || user._id}>
                <div className="title_line d-grid">
                  <h4>Email</h4>
                  <h4>Name</h4>
                  <h4>Phone Number</h4>
                  <h4>Address</h4>
                  <h4>Role</h4>
                  {getLocal("users").roles != "employee" ? (
                    <h4>Action</h4>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="title_line  d-grid">
                  <p>{user.email}</p>
                  <p>{user.name}</p>
                  <p>{user.numberPhone}</p>
                  <p>{user.address}</p>
                  <p>{user.roles}</p>
                  {getLocal("users").roles != "employee" ? (
                    <div className="btn-action">
                      <button
                        onClick={() => history.push("/create_user", user)}
                      >
                        <AiFillEdit />
                      </button>
                      <button onClick={() => handleRemove(user.id || user._id)}>
                        <AiFillDelete />
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            );
          }
          return (
            <div className="title_line  d-grid" key={user.id || user._id}>
              <p>{user.email}</p>
              <p>{user.name}</p>
              <p>{user.numberPhone}</p>
              <p>{user.address}</p>
              <p>{user.roles}</p>
              {getLocal("users").roles != "employee" ? (
                <div className="btn-action">
                  <button onClick={() => history.push("/create_user", user)}>
                    <AiFillEdit />
                  </button>
                  <button onClick={() => handleRemove(user.id || user._id)}>
                    <AiFillDelete />
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListUser;
