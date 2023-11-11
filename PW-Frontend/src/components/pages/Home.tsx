import Content from "components/content/Content";
import Hero from "components/hero/Hero";
import Navbar from "components/navbar/Navbar";
import CustomScrollbar from "components/scrollbar/CustomScrollbar";
import { SectionContext } from "./Context";
import { useState } from "react";
import clsx from "clsx";

const Home = () => {
  const [section, setSection] = useState<string | null>("Home");
  return (
    <>
      <div className="noise" />
      <div className={clsx("md:block", "hidden")}>
        <CustomScrollbar />
      </div>
      <SectionContext.Provider value={{ section, setSection }}>
        <Navbar />
        <Hero />
        <Content />
      </SectionContext.Provider>
    </>
  );
};

export default Home;
