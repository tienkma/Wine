import React, { useEffect, useLayoutEffect, useState } from "react";
import AddToCard from "../components/Quantity";
import PageHero from "../components/PageHero";
import { Loading } from "../components";
import { useParams } from "react-router-dom";
import { getItem } from "../utils/apiGetItem";
import { Rating } from "@mui/material";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const WineItemPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false)
  const [wineItem, setWineItem] = useState<any>({}) 
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
      setLoading(true)
      try {
        const result = await getItem(id || "")
        setWineItem(result)
        
      } catch (error) {
        throw new Error(error as string || "")
      } finally {
        setLoading(false)
      }
    })()
  }, [id])

  const { wine=1, winery, price, description, available, rating, image } =
  wineItem;

    const item_error = false
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
    <main id="itemPage" className="minHeight" >
      {loading || !wine ? (
        <Loading className="absolute w-1/2 h1/2 translate-x-1/2 translate-y-1/2" />
      ) : item_error ? (
        <h2>there was an error...</h2>
      ) : (
        <>
          <PageHero title="products" product={wine} />
          <section className="itemPage grid gap-10 container mx-auto py-7" style={{gridTemplateColumns: "400px 1fr"}} > 
            <div className="img" style={{height: 450}}>
              <img className="h-full object-contain" src={image || "https://images.vivino.com/thumbs/cohA0QIVTGmupg938tBbbQ_pb_x300.png"} alt="wine" />
            </div>
            <div className="itemContent flex flex-col">
              <h1 className="text-3xl mb-2 text-background capitalize">{wine}</h1>
              <h3 className="text-xl mb-1 capitalize text-background/90">{winery}</h3>
              <p>{available} available</p>
              {/* <Rating average={rating.average} reviews={rating.reviews} /> */}
              <Rating className="my-4" name="read-only" icon={<AiFillStar color="#891826" />} emptyIcon={<AiOutlineStar />} value={rating?.average} readOnly />
              <p className="price text-amber-600 text-lg font-bold mb-5">${price}</p>
              <p className="description text-background text-base mb-5" style={{lineHeight: 2}}>{description}</p>
              <hr className="mt-3 my-7" />
              <AddToCard
                decreAmount={decreAmount}
                increAmuont={increAmuont}
                count={count}
                id={id || ""}
              />
              <button
                className="mt-5 flex w-36 py-2 uppercase justify-center items-center rounded transition-colors hover:bg-color bg-background"
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
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default WineItemPage;
