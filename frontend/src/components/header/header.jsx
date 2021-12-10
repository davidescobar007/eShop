import React, { useState, useContext, useEffect, useMemo } from "react";
import "./header.scss";
import {
  Input,
  Button,
  AppContext,
} from "../../configuration/deliveryComponent";
import { useLocation, useHistory, Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

export default function Header() {
  const [inputClassName] = useState("header__input");
  const [buttonClassName] = useState("header__submitButton");
  const [search, setSearch] = useState("");
  const { setSearchResultList, setLoading } = useContext(AppContext);

  let history = useHistory();

  const handleSubmit = (event, item) => {
    event && event.preventDefault();
    let url = `http://localhost:5000/search?item=${item || search}`;
    history.push(`/item?search=${item || search}`);
    setLoading(true);
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setSearchResultList(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert(
          "😥 Algo inesperado ha sucedido en nuestros servidores, intenta de nuevo en unos momentos"
        );
      });
  };

  const useQuery = () => {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  };
  let query = useQuery();

  useEffect(() => {
    if (query.get("search")) {
      handleSubmit(null, query.get("search"));
    }
  }, []);

  return (
    <header className="header">
      <section className="header__container--center flex">
        <Link to="/" className="header__logo">
          <img
            src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.2/mercadolibre/logo__large_plus.png"
            alt="MercadoLibre logo"
          />
        </Link>
        <div className="header__inputSearch">
          <form onSubmit={handleSubmit} className="header__form flex">
            <Input
              className={inputClassName}
              type={"text"}
              placeholder={"Buscar productos, marcas y más..."}
              ariaLabel={"Buscar productos, marcas y más"}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <Button
              className={buttonClassName}
              type={"submit"}
              text={<BiSearch />}
              ariaLabel={"buscar"}
            />
          </form>
        </div>
      </section>
    </header>
  );
}
