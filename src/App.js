import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { GetProductos } from "./components/Servicios";

//Mis js
import "bootstrap/dist/js/bootstrap";

//Mis css
import "bootstrap/dist/css/bootstrap.css";
import { Header } from "./components/Header";

function App() {
  const [productos, setProductos] = GetProductos();
  const [verProducto, setVerProducto] = useState(true);
  const [producto, setProducto] = useState([]);
  const [productoItems, setProductoItems]=useState([]);
  const [refreshInterval, setRefreshInterval] = useState(null);
  console.log(productos);

  const onSubmit = (event) => {
    event.preventDefault();

    var numid = Math.floor(
      Math.random() * (3999999999998 + 1 - 100000000000) + 100000000000
    );
    var num = Math.floor(Math.random() * (200 + 1 - 2) + 2);
    console.log(document.getElementById("sku").value);
    var produ = {
      id: numid.toString(),
      items: {0:{
        id: numid.toString(),
        imageUrl: null,
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        quantity: document.getElementById("cantidad").value,
        sku: document.getElementById("sku").value,
      },
      
     
    } ,
    name: "#" + num.toString(),
      number: num.toString(),
    };
    productos.push(produ);
    console.log(productos);
    setProducto(productos.number);
    console.log(productos);

    document.getElementById("sku").value = "";
    document.getElementById("name").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("price").value = "";
  };


  function pagar() {
    alert("pagaste tus articulos");
  }
  function cerrarDetalle(producto) {
    setVerProducto(true);
    setProducto([]);
    setProductoItems([]);
    clearInterval(refreshInterval);
    setProducto([]);
    setProductoItems([]);
    verDetalle(producto);
  }

  function verDetalle(producto) {
    //cerrarDetalle();
    console.log(producto.number);
    setProducto(producto.number);
    setProductoItems(producto.items);
    setVerProducto(false);
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="row pt-3 mb-4">
          <div className="col justify-content-left m-2" id="orden">
            <div className="col-lg-6 col-md-12">
              <label style={{ paddingLeft: "0", fontWeight: "600" }}>
                Id de compra
              </label>
            </div>
            {productos.length > 0 ? (
              <div className="mb-3">
                {" "}
                {productos.slice(0, productos.length).map((producto) => (
                  <div key={producto.id}>
                    <label
                      className="text-center"
                      id="labelProducto"
                      onClick={() => cerrarDetalle(producto)}
                    >
                      {producto.id}
                    </label>
                  </div>
                ))}{" "}
              </div>
            ) : (
              <div>Sin datos</div>
            )}
          </div>
          <div className="col justify-content-right m-2" id="producto">
            <div className="col-lg-6 col-md-12">
              <label style={{ paddingLeft: "0", fontWeight: "600" }}>
                Detalle de la Orden
              </label>
            </div>
            {verProducto ? (
              <div> </div>
            ) : (
              <div className="row">
                <div key={producto}>
                  <label>Numero de Orden:</label>
                  <label>{producto}</label>
                </div>
                {productoItems.length>1 ? (<>{productoItems.map((item) => (
                  
                  <div className="row">
                    <div key={item.sku}>
                      <label>SKU:</label>
                      <label>{item.sku}</label>
                    </div>
                    <div key={item.name}>
                      <label>Nombre:</label>
                      <label>{item.name}</label>
                    </div>
                    <div key={item.quantity}>
                      <label>Cantidad:</label>
                      <label>{item.quantity}</label>
                    </div>
                    <div key={item.price}>
                      <label>Precio:</label>
                      <label>{item.price}</label>
                    </div>
                  </div>
                ))}</>): (<div className="row">
                <div key={productoItems[0].sku}>
                  <label>SKU:</label>
                  <label>{productoItems[0].sku}</label>
                </div>
                <div key={productoItems[0].name}>
                  <label>Nombre:</label>
                  <label>{productoItems[0].name}</label>
                </div>
                <div key={productoItems[0].quantity}>
                  <label>Cantidad:</label>
                  <label>{productoItems[0].quantity}</label>
                </div>
                <div key={productoItems[0].price}>
                  <label>Precio:</label>
                  <label>{productoItems[0].price}</label>
                </div>
              </div>)}
                
                
                <div className="align-items-left">
                  <button className="botonPagar" onClick={() => pagar()}>Pagar</button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="container">
          <div className="row pt-3 mb-4">
            <div className=" justify-content-left m-2" id="orden">
              <div className="col-lg-6 col-md-12">
                <label style={{ paddingLeft: "0", fontWeight: "600" }}>
                  Formulario
                </label>
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <label for="sku">SKU</label>
                    <input
                      type="text"
                      className="form-control"
                      id="sku"
                      placeholder="Ingresa el SKU del producto"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="name">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Ingresa el nombre del producto"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="cantidad">Cantidad</label>
                    <input
                      type="number"
                      className="form-control"
                      id="cantidad"
                      placeholder="Numero de piezas"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="price">Precio</label>

                    <input
                      type="tel"
                      className="form-control"
                      id="price"
                      placeholder=""
                      required
                    />
                  </div>

                  <button type="submit" className="botonPagar">
                    Agregar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
