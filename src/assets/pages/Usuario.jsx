import { useParams } from "react-router-dom";

const Usuario = () => {
  const {nombre} = useParams();
  return (
    <div>
      <h1>Usuario: {nombre}</h1>
    </div>
  );
};

export default Usuario;