import React, { useContext, useEffect } from "react";
import { AppContext, Button } from "../../configuration/deliveryComponent";
import { useParams } from "react-router";
import "./item.scss";

export default function Item() {
  const { item, setItem, loading, setLoading } = useContext(AppContext);

  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    let url = `http://localhost:5000/item?id=${id}`;
    console.log(url);
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        alert(
          "😥 Algo inesperado ha sucedido en nuestros servidores, intenta de nuevo en unos momentos"
        );
      });
  }, []);

  return (
    <>
      {loading ? (
        <p className="item item-loading">cargando...</p>
      ) : (
        <main className="item">
          <section className="item__parent flex">
            <div className="item__parentImg">
              <img
                src={item?.item?.picture[0].secure_url}
                alt={item?.item?.title}
              />
            </div>
            <div className="item__parentDetail">
              <p>
                {`${item?.item?.condition ? "nuevo " : "usado "} - ${
                  item?.item?.sold_quantity
                } vendidos`}
              </p>
              <h1>{item?.item?.title}</h1>
              <article className="item__price-size">{`$ ${item?.item?.price.amount}`}</article>
              <Button
                className="item__button"
                type="button"
                ariaLabel="Click aqui para comprar"
                text="Comprar"
              />
            </div>
          </section>

          <section className="item__description">
            <h2>Descripcion del producto</h2>
            <p>{item?.item?.description}</p>
          </section>
        </main>
      )}
    </>
  );
}
