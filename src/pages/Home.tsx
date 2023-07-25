import React from "react";
import MenuHeader from "../components/structure/MenuHeader";
import FindMenu from "../components/structure/FindMenu";
import { Divider } from "@chakra-ui/react";
import Footer from "../components/structure/Footer";
import AdditionalInfo from "../components/AdditionalInfo";
// import ProductCard from "../components/ProductCard";
import ProductCarousel from "../components/carrossel";

const Home: React.FC = () => {
  return (
    <>
      <FindMenu />
      <Divider />

      <MenuHeader />
      <Divider />

      {/* <ProductCard /> */}

      <ProductCarousel />

      <Footer />
      <Divider />

      <AdditionalInfo />
    </>
  );
};

export default Home;
