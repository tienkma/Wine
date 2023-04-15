import React, { useLayoutEffect, useState } from "react";
import AddToCard from "../components/Quantity";
import PageHero from "../components/PageHero";
import { Loading } from "../components";
import { useParams } from "react-router-dom";

const WineItemPage = () => {
  const { id } = useParams();
  // const { getItemWine } = useHomeContact();
  // const { getCartItem } = useCartContext();
  // const {
  //   state: { role },
  // } = UseUserContext();
  // const history = useHistory();
  // useLayoutEffect(() => {
  //   getItemWine(id);
  // }, [id]);
  const item_data: any = {}

  // const {
  //   state: { item_error, item_loading, item_data },
  // } = useHomeContact();

  const { wine=1, winery, price, description, available, rating, image } =
    item_data;

    const item_loading = false
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
    <main id="itemPage" className="" >
      {item_loading || !wine ? (
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
              <p className="price text-amber-600 text-lg font-bold mb-5">${price}</p>
              <p className="description text-background text-base mb-5" style={{lineHeight: 2}}>{description}</p>
              <hr />
              <AddToCard
                decreAmount={decreAmount}
                increAmuont={increAmuont}
                count={count}
                id={id || ""}
              />
              <button
                className="addToCart btn"
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
