import React, { Fragment, useEffect, useState } from "react";
import { Toasts } from "../utils/notification";
import { Requests } from "../utils/request";
import { URL_REQUEST } from "../utils/URL";
import "../css/listOrder.css";
import LoaddingPage from "./LoaddingPage";
import { getLocal } from "../context/UserContext";

interface typeProps {
  admin: boolean;
}

const ListOrder = (props: typeProps) => {
  const { admin } = props;
  const [loadding, setLoadding] = useState(true);
  const [listOrder, setListOrder] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (admin) {
          setLoadding(true);
          const data = await Requests.get(`${URL_REQUEST}/api/v1/order`);
          setListOrder(data.orders);

          setLoadding(false);
        } else {
          setLoadding(true);
          const data = await Requests.get(`${URL_REQUEST}/api/v1/order/user`, {
            email: getLocal("users").email,
          });
          setListOrder(data.order);
          setLoadding(false);
        }
      } catch (error: any) {
        setLoadding(false);

        Toasts.error(error?.message);
      }
    })();
  }, []);
  if (loadding) {
    return <LoaddingPage />;
  }

  if (!listOrder || listOrder?.length === 0) {
    return (
      <div id="list_order">
        <h1>List User</h1>
        <hr />

        <h2>No List Order</h2>
      </div>
    );
  }

  return (
    <div id="list_order">
      <h1>List User</h1>
      <hr />
      <div className="list_container">
        {listOrder.map((item: any) => {
          return (
            <div className="list_order_item" key={item._id}>
              <div className="item_header d-flex justify-content-between">
                {getLocal("users").roles != "user" ? (
                  <h4>{item.email}</h4>
                ) : (
                  <></>
                )}
                <p style={{ fontSize: "14px" }}>{item.createAt.slice(0, 25)}</p>
              </div>
              <hr />
              <div className="item_body ">
                {JSON.parse(item.cart)?.map((cartOrder: any) => {
                  return (
                    <div
                      className=" d-grid mb-4 me-4 ms-4 cartOrder"
                      key={cartOrder.id}
                    >
                      <div className="imageCart">
                        <img src={cartOrder.image} alt="" />
                      </div>
                      <p>{cartOrder.wine}</p>
                      <p>${+cartOrder.amount * +cartOrder.price}</p>
                    </div>
                  );
                })}
              </div>
              <hr />
              <p className="status">Status: {item.status}</p>
              <h5>Total: ${item.total}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListOrder;
