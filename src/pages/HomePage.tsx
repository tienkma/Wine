import { Video, Featured, Shopify, Commit, Footer } from "../components";
import { relatedProduct } from "./WineItemPage";

export const HomePage = () => {
  return (
    <main>
      <Video />
      <Featured
        listItem={relatedProduct.concat(relatedProduct)}
        lable="Featured Products"
      />
      <Featured
        listItem={relatedProduct.concat(relatedProduct)}
        lable=" Discounted products"
      />
      <Shopify />
      <Commit />
      <Footer />
    </main>
  );
};
