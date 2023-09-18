import Content from "components/content/Content";
import Hero from "components/hero/Hero";
import Navbar from "components/navbar/Navbar";
import CustomScrollbar from "components/scrollbar/CustomScrollbar";

const Home = () => {
  return (
    <>
      <div className="noise" />
      {/* <CustomScrollbar /> */}
      <Navbar />
      <Hero />
      <Content />
    </>
  );
};

export default Home;
