import React, { useContext } from "react";
import { AppContext } from "../../configuration/deliveryComponent";
import "./breadCrumb.scss";

export default function BreadCrumb() {
  const { searchResultList } = useContext(AppContext);
  return (
    <section className="breadCrumb">
      <ul className="breadCrumb__list">
        {searchResultList.categories?.map((item, index) => {
          return (
            <li className="breadCrumb__item">
              <p className="breadCrumb__text">
                &nbsp;{item} &nbsp;
                {index === searchResultList.categories.length - 1 ? "" : ">"}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
