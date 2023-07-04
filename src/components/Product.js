import React from "react";
import Headline from "./Headline";
import Card from "./Card";

function Product() {
  return (
    <section id="product" className="max-w-[1640px] mx-auto p-4 py-16">
      <Headline title="Products"/>
      {<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-20 py-16">
        <Card image="/assets/consultoria02.jpg" title="Software" rel="preload"/>
        <Card image="/assets/consultoria03.jpg" title="Paginas Web" rel="preload"/>
        <Card image="/assets/consultoria04.jpg" title="Apps Movil" rel="preload"/>
        <Card image="/assets/consultoria05.jpg" title="Apps Web" rel="preload"/>
        <Card image="/assets/s-design04.jpg" title="Apps Desktop" rel="preload"/>
        <Card image="/assets/s-development01.png" title="E-Marketing" rel="preload"/>
        <Card image="/assets/s-medida.png" title="Social media" rel="preload"/>
        <Card image="/assets/s-design05.png" title="Mantenimiento" rel="preload"/>
      </div>}
    </section >
  );
}

export default Product;
