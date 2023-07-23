import { useEffect } from "react";
import Video from "../components/pages/home/Video";
import { Featured } from "../components/pages/home/Featured";
import Shopify from "../components/Shopify";
import Commit from "../components/pages/home/Commit";
import Footer from "../components/common/Footer";

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
