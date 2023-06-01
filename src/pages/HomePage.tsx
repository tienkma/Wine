import { Video, Featured, Shopify, Commit, Footer } from "../components";
import { relatedProduct } from "./WineItemPage";

export const HomePage = () => {
  return (
    <main>
      <Video />
      <Featured />
      <Shopify />
      <Commit />
      <Footer />
    </main>
  );
};
