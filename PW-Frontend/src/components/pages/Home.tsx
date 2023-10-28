import Content from "components/content/Content";
import Hero from "components/hero/Hero";
import Navbar from "components/navbar/Navbar";
import CustomScrollbar from "components/scrollbar/CustomScrollbar";
import { SectionContext } from "./Context";
import { useState } from "react";

const Home = () => {
  const [section, setSection] = useState<string | null>("Home");
  return (
    <>
      <div className="noise" />
      <CustomScrollbar />
      <SectionContext.Provider value={{ section, setSection }}>
        <Navbar />
        <Hero />
        <Content />
      </SectionContext.Provider>
    </>
  );
};

export default Home;
