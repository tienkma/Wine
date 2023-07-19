import { useEffect } from "react";
import { Video, Featured, Shopify, Commit, Footer } from "../components";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

export default HomePage;
