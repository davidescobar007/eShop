import React, { createContext, useState } from "react";

export const AppContext = createContext();

const ApplicationProvider = (props) => {
  const [searchResultList, setSearchResultList] = useState([]);
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{
        searchResultList,
        setSearchResultList,
        item,
        setItem,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default ApplicationProvider;
