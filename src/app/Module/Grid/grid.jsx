// src/app/Module/Grid/grid.js
import React from "react";
import Card from "../Card/card";

function Grid({ productos }) {
    return (
        <div className="container text-center mt-5">
            <div className="row gap-5">
                {productos.map((producto, index) => (
                    <div className="col" key={index}>
                        <Card title={producto.nombre} description={producto.descripcion} img={producto.img} datos={producto.datos} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Grid;
