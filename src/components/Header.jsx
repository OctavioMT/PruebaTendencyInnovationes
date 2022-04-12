import React, {  useEffect, useState } from "react";
import styled from "styled-components";

//imagenes
import logo from "../img/TendencyInnovationes.png"

export function Header() {
  const [fechaMin, setFechaMin] = useState();
  const [horaActual, setHoraActual] = useState();

  const ContenidoH = styled.header`
    -webkit-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
    background-color: white;
    display: block;
    padding: 50px;

    & div nav img {
      height: 5vh;
    }

    position: relative;
    z-index: 99;
  `;
  /*

*/

  const Logo = styled.div`
    width: 230px;
    height: 110px;
    background-image: url(${logo});
    background-position: center center;
    background-size: 50%;
    background-repeat: no-repeat;
  `;

  const Calendario = styled.div`
    padding: 40px;
    color: rgb(51, 95, 146);
    font-size: 30px;
    font-weight: 200;
    height: 110px;
    background-position: center center;
    background-size: cover;
  `;

  function actual() {
    let fecha = new Date(); //Actualizar fecha.
    let hora = fecha.getHours(); //hora actual
    let minuto = fecha.getMinutes(); //minuto actual
    let segundo = fecha.getSeconds(); //segundo actual
    if (hora < 10) {
      //dos cifras para la hora
      hora = "0" + hora;
    }
    if (minuto < 10) {
      //dos cifras para el minuto
      minuto = "0" + minuto;
    }
    if (segundo < 10) {
      //dos cifras para el segundo
      segundo = "0" + segundo;
    }
    //ver en el recuadro del reloj:
    let mireloj = hora + ":" + minuto;
    return mireloj;
  }

  function actualizar() {
    //función del temporizador
    let mihora = actual(); //recoger hora actual
    setHoraActual(mihora);
    
  }
  //iniciar temporizador

  function fechaParaHoy() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    switch (month) {
      case 1:
        month = "ENE";
        break;
      case 2:
        month = "FEB";
        break;
      case 3:
        month = "MAR";
        break;
      case 4:
        month = "ABR";
        break;
      case 5:
        month = "MAY";
        break;
      case 6:
        month = "JUN";
        break;
      case 7:
        month = "JUL";
        break;
      case 8:
        month = "AGO";
        break;
      case 9:
        month = "SEP";
        break;
      case 10:
        month = "OCT";
        break;
      case 11:
        month = "NOV";
        break;
      case 12:
        month = "DIC";
        break;
      default:
    }
    //if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    setFechaMin(day + " / " + month + " / " + year);
    setHoraActual(date.getHours() + ":" + date.getMinutes());
  }

  useEffect(() => {
    //getFormattedDate();
    fechaParaHoy();
    setInterval(actualizar, 1000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ContenidoH>
      <div className="container">
        <div className="row">
          <div className="col justify-content-left" >
            <Logo />
          </div>
          <div className="col" >
            <Calendario>
              <label className="justify-content-right">
                
                {fechaMin} Hora:{horaActual}
              </label>
            </Calendario>
            
          </div>
        </div>
      </div>
    </ContenidoH>
  );
}
