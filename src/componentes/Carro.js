function Carro(props) {
  return (
    <div>
      <h2>{props.veiculo.nomeDoCarro}</h2>
      <ul>
        <li>Cor: {props.veiculo.corDoCarro}</li>
        <li>Ano: {props.veiculo.anoDoCarro}</li>
        <li>Flex: {props.veiculo.flex ? "Sim" : "Não"}</li>
        <li>Adicionado por: {props.nomeEduardo}</li>
      </ul>
    </div>
  );
}

export default Carro;
