import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import NoImmage from "../../images/prodotto.png";

export const ProdottoImage = (props) => {
  const [foto, setFoto] = useState([]);

  const getFotoAction = async (props) => {
    try {
      let res = await fetch(
        `https://pixabay.com/api/?key=36782140-0f1671d568aa7e7e27f270f75&q=${props}&image_type=photo`,
        {
          method: "GET"
        }
      );
      if (res.ok) {
        let data = await res.json();
        setFoto(data.hits[0].webformatURL);
      }
    } catch (error) {
      setFoto(NoImmage);
      console.log(error);
    }
  };
  useEffect(() => {
    getFotoAction(props.src);
  }, [props]);

  return <Image src={foto} style={{ height: `${props.altezza}`, aspectRatio: "1/1", objectFit: "cover" }} />;
};
