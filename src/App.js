import Garagem from "./componentes/Garagem";
import "./styles.css";

export default function App() {
  const meuNome = "Eduardo";
  const garagemAlta = "Barbosa B";

  const objeto1 = {
    nomeDoCarro: "Fusca",
    corDoCarro: "Azul",
    anoDoCarro: 1970,
    flex: false
  };

  const objeto2 = {
    nomeDoCarro: "Brasília",
    corDoCarro: "Amarelo",
    anoDoCarro: 1960,
    flex: false
  };

  const objeto3 = {
    nomeDoCarro: "Fiat Uno",
    corDoCarro: "Preto",
    anoDoCarro: 1990,
    flex: false
  };

  const objeto4 = {
    nomeDoCarro: "Kombi",
    corDoCarro: "Branco",
    anoDoCarro: 1975,
    flex: false
  };

  const objeto5 = {
    nomeDoCarro: "Ferrari",
    corDoCarro: "Azul",
    anoDoCarro: 2022,
    flex: true
  };

  const objeto6 = {
    nomeDoCarro: "Porshe",
    corDoCarro: "Amarelo",
    anoDoCarro: 2022,
    flex: true
  };

  const objeto7 = {
    nomeDoCarro: "Lamborghini",
    corDoCarro: "Preto",
    anoDoCarro: 2022,
    flex: true
  };

  const objeto8 = {
    nomeDoCarro: "Mustang",
    corDoCarro: "Branco",
    anoDoCarro: 2022,
    flex: true
  };

  function bemvindo() {
    alert("Bem vindos a garagem de " + meuNome);
  }

  return (
    <div>
      <Garagem
        nome={meuNome}
        carro1={objeto1}
        carro2={objeto2}
        carro3={objeto3}
        carro4={objeto4}
        funcaoBemVindo={bemvindo}
      />

      <Garagem
        nome={garagemAlta}
        carro1={objeto5}
        carro2={objeto6}
        carro3={objeto7}
        carro4={objeto8}
        funcaoBemVindo={bemvindo}
      />
    </div>
  );
}
