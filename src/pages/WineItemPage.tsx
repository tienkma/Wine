import React, { useEffect, useLayoutEffect, useState } from "react";
import AddToCard from "../components/Quantity";
import PageHero from "../components/common/PageHero";
import { CartItem, Loading } from "../components";
import { useParams } from "react-router-dom";
import { getItem } from "../utils/apiGetItem";
import { Rating } from "@mui/material";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import { Comments } from "../components/pages/products/Comments";
import LoadingPage from "../components/common/LoadingPage";

const WineItemPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [wineItem, setWineItem] = useState<any>({});
  // const { getItemWine } = useHomeContact();
  // const { getCartItem } = useCartContext();
  // const {
  //   state: { role },
  // } = UseUserContext();

  // const history = useHistory();
  // useLayoutEffect(() => {
  //   getItemWine(id);
  // }, [id]);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const result = await getItem(id || "");
        setWineItem(result);
      } catch (error) {
        throw new Error((error as string) || "");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const {
    wine = 1,
    winery,
    price,
    description,
    available,
    rating,
    image,
    discount
  } = wineItem;

  const item_error = false;
  const [count, setCount] = useState(1);

  const decreAmount = (id?: string) => {
    setCount((count) => {
      let newCount = count - 1;
      if (newCount < 1) {
        return 1;
      }
      return newCount;
    });
  };
  const increAmuont = (id?: string) => {
    setCount((count) => {
      let newCount = count + 1;
      if (newCount > available) {
        return available;
      }
      return newCount;
    });
  };

  return (
    <main id="itemPage" className="minHeight">
      <LoadingPage
        loading={loading}
        className="absolute w-1/2 h1/2 translate-x-1/2 translate-y-1/2"
      >
        <>
          <PageHero title="products" product={wine} />
          <div className="container  mx-auto ">
            <section
              className="itemPage grid gap-10 pt-7 pb-16"
              style={{ gridTemplateColumns: "400px 1fr" }}
            >
              <div className="img" style={{ height: 450 }}>
                <img
                  className="h-full object-contain"
                  src={
                    image ||
                    "https://images.vivino.com/thumbs/cohA0QIVTGmupg938tBbbQ_pb_x300.png"
                  }
                  alt="wine"
                />
              </div>
              <div className="itemContent flex flex-col">
                <h1 className="text-3xl mb-2 text-background capitalize">
                  {wine}
                </h1>
                <h3 className="text-lg mb-1 capitalize text-background/90">
                  {winery}
                </h3>
                  {
                    discount ?  <div className="flex items-center relative">
                    <p className="mr-2 text-xl font-semibold text-color dark:text-white">
                    ${price * (100 - (+discount)) / 100}
                    </p>
                    <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                    ${price}
                    </p>
                    <p className=" text-base font-medium text-red-500 ">
                      (-{discount}%)
                    </p>
                  </div> : 
                <p className="price text-color text-xl font-bold">${price}</p>
                  }

                {/* <Rating average={rating.average} reviews={rating.reviews} /> */}
                <Rating
                  className="my-4"
                  name="read-only"
                  icon={<AiFillStar color="#891826" />}
                  emptyIcon={<AiOutlineStar />}
                  value={rating?.average}
                  readOnly
                />
                <p
                  className="description text-background/80 font-15  mb-5"
                  style={{ lineHeight: 2 }}
                >
                  {description}
                </p>
                <hr className="mt-3 my-7" />
                {/* <AddToCard
                  decreAmount={decreAmount}
                  increAmuont={increAmuont}
                  count={count}
                  id={id || ""}
                /> */}
                <div className="flex items-center">
                  <div className="flex items-center border border-gray-200 rounded">
                    <button
                      type="button"
                      className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75 center"
                    >
                      <AiOutlineMinus />
                    </button>

                    <input
                      type="number"
                      id="Quantity"
                      defaultValue="1"
                      className="h-10 w-16 !border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none focus:ring-transparent "
                    />

                    <button
                      type="button"
                      className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75 center"
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <p className="text-slate-500 ml-3">
                    {available} products available
                  </p>
                </div>
                <div className="flex">
                  <button
                    className="mt-5 flex px-12 py-3 capitalize text-sm justify-center items-center transition-colors hover:bg-color bg-background"
                    // onClick={async () => {
                    //   if (!getLocal("users")) {
                    //     return history.replace("/login");
                    //   }
                    //   await getCartItem(id, wine, price, available, image, count);
                    //   history.push('/cart')
                    // }}
                  >
                    add to cart
                  </button>

                  <button
                    className="mt-5 ml-4 flex px-12 py-3 capitalize text-sm justify-center items-center transition-colors hover:bg-color bg-transparent hover:border-color border-background text-background hover:text-white border font-medium"
                  >
                    checkout
                  </button>
                </div>
              </div>
            </section>
            <hr />
            <Comments item={wineItem} />
            <h1 className="my-10 text-4xl text-center text-background">
              Related Product
            </h1>

            <div
              className="listProduct grid gap-3 my-7"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              }}
            >
              {relatedProduct.map((item, idx) => (
                <CartItem key={idx} {...item} />
              ))}
            </div>
          </div>
        </>
      </LoadingPage>
    </main>
  );
};

export const relatedProduct = [
  {
    winery: "Petrus",
    wine: "Amarone della Valpolicella Riserva N.V.",
    rating: {
      average: 5,
      reviews: "75 ratings",
    },

    image:
      "https://images.vivino.com/thumbs/nC9V6L2mQQSq0s-wZLcaxw_pb_x300.png",
    price: 6,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    id: "2",
    available: 74,
  },
  {
    winery: "Cartuxa",
    wine: "Pera-Manca Tinto 1990",
    rating: {
      average: 5,
      reviews: "72 ratings",
    },

    image:
      "https://images.vivino.com/thumbs/L33jsYUuTMWTMy3KoqQyXg_pb_x300.png",
    price: 6,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    id: "3",
    available: 74,
  },
  {
    winery: "Schrader",
    wine: "Cabernet Sauvignon RBS Beckstoffer To Kalon Vineyard 2015",
    rating: {
      average: 5,
      reviews: "72 ratings",
    },

    image:
      "https://images.vivino.com/thumbs/GpcSXs2ERS6niDxoAsvESA_pb_x300.png",
    price: 6,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    id: "4",
    available: 74,
  },
  {
    winery: "Petrus",
    wine: "Wraith Cabernet Sauvignon 2013",
    rating: {
      average: 5,
      reviews: "68 ratings",
    },

    image:
      "https://images.vivino.com/thumbs/PBhGMcRNQ7aVnVNr7VgnWA_pb_x300.png",
    price: 6,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    id: "5",
    available: 74,
  },
];

export default WineItemPage;
