import React, { useContext, useEffect } from "react";
import { AppContext } from "../../configuration/deliveryComponent";
import { Link } from "react-router-dom";
import "./searchList.scss";

export default function SearchList() {
  const { searchResultList, loading } = useContext(AppContext);

  return (
    <>
      {loading && <p className="seacrhList seacrhList-loading">cargando...</p>}
      <main className="seacrhList">
        {searchResultList.results?.map((item, index) => {
          return (
            <section key={index} className="flex seacrhList__item">
              <img src={item.picture} alt="" className="seacrhList__img" />
              <div>
                <h1 className="searchList__price">$ {item.price.amount}</h1>
                <Link className="searchList__title" to={`/items/${item.id}`}>
                  {item.title}
                </Link>
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
