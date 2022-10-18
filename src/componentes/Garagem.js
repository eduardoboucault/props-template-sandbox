import Carro from "./Carro";

function Garagem(props) {
  return (
    <div>
      <h1>Garagem de {props.nome}</h1>
      <button
        onClick={() => {
          props.funcaoBemVindo(props.nome);
        }}
      >
        Boas Vindas
      </button>
      <Carro veiculo={props.carro1} nomeEduardo={props.nome} />
      <Carro veiculo={props.carro2} nomeEduardo={props.nome} />
      <Carro veiculo={props.carro3} nomeEduardo={props.nome} />
      <Carro veiculo={props.carro4} nomeEduardo={props.nome} />
    </div>
  );
}

export default Garagem;
