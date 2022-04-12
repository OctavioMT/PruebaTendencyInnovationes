import { useEffect, useState} from "react";

export function GetProductos() {
  
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      async function GetProductos() {
        const url =
          "https://eshop-deve.herokuapp.com/api/v2/orders";
          var request = {
            method: "GET",
            uri: url,
            mode: "cors" ,
            headers: {
                Authorization:  'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajd ZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyD bMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ',
              } 
           ,
            json: true,
          };

        await fetch(url, request)
          .then((response) =>
            response
              .json()
              .then((response) => {
                  setDatos(response.orders)
                setLoading(true);
               // console.table(response.orders[0].items);
                
              })
              .catch(function (error) {
                console.log("Error: " + error.message);
                setLoading(true);
                
              })
          )
          .catch(function (error) {
            console.log("Error: " + error.message);
          });
  
      }
  
      GetProductos();
    }, []);
  
    return [datos, loading];
  }