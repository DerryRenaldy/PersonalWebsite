import React, { createContext, useContext } from "react";

interface ISectionContextValue {
  section: string | null;
  setSection: React.Dispatch<React.SetStateAction<string | null>>;
  isScrolledCtx: boolean;
  setIsScrolledCtx: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with an initial empty object of type MyContextData
export const SectionContext = createContext<ISectionContextValue | undefined>(
  undefined
);

export const useSectionContext = () => {
  const sectionContext = useContext(SectionContext);

  if (sectionContext === undefined) {
    throw new Error("useSection context must be used with SectionContext");
  }

  return sectionContext;
};

// // Create a provider component
// export const SectionContextProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [username, setUsername] = React.useState<string>("");

//   const setUser = (name: string) => {
//     setUsername(name);
//   };

//   // Provide the context value to the components down the tree
//   const contextValue: MyContextData = {
//     username,
//     setUser,
//   };

//   return (
//     <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
//   );
// };

// // Custom hook for consuming the context
// export const useMyContext = () => {
//   const context = useContext(MyContext);
//   if (!context) {
//     throw new Error("useMyContext must be used within a MyContextProvider");
//   }
//   return context;
// };
