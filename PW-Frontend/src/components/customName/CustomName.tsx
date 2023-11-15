import { useRef } from "react";

const CustomName = () => {
  const nameRef = useRef<HTMLSpanElement>(null!);

  return (
    <>
      <div className="fixed top-0 left-3/4 -translate-x-[50%] flex px-10 py-2 rounded-b-lg backdrop-blur bg-[#2a2a2a]/50 z-[10000]">
        <p className="font-rubik text-lg text-[#C49B66] font-semibold text-center">
          Welcome, <span ref={nameRef}>Unknown</span>
        </p>
      </div>
    </>
  );
};

export default CustomName;
