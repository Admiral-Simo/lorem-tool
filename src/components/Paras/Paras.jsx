import React, { Fragment, useEffect, useState } from "react";
import Para from "../Para";

const text =
  "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.";

const Paras = ({ paraNum }) => {
  const [paras, setParas] = useState([]);
  useEffect(() => {
    let newParas = [];
    for (let i = 0; i < paraNum; i++) {
      newParas = [...newParas, text];
    }
    setParas(newParas);
  }, [paraNum]);
  return (
    <Fragment>
      {paras.map((para, index) => {
        return <Para key={index} para={para} />;
      })}
    </Fragment>
  );
};

export default Paras;
