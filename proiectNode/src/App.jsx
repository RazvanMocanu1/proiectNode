const NumeSite = () => {
  return <h1>Bun venit pe site-ul meu</h1>;
};

const DoughIcon = () => {
  return <img src="DoughIcon.png" width={250} height={250}></img>
}

const MesajSecundar = () => {
  return <h1>𝔄𝔠𝔢𝔞𝔰𝔱𝔞 𝔢𝔰𝔱𝔢 𝔬 𝔦𝔪𝔞𝔤𝔦𝔫𝔢 𝔠𝔞𝔯𝔢 𝔱𝔯𝔢𝔟𝔢 𝔰𝔞 𝔦𝔱𝔦 𝔡𝔞𝔦 𝔰𝔢𝔞𝔪𝔞 𝔠𝔢 𝔞𝔫𝔲𝔪𝔢 𝔰𝔢 𝔞𝔣𝔩𝔞 𝔦𝔫 𝔢𝔞</h1>;
};

const Hint = () => {
  return <h6>Hint : este un Material din care se fac gogosile</h6>
}

const Spatiu = () => {
  return <h1> </h1>
};

const Donut = () => {
  return <img src="donut.png" width={250} height={250}></img>
};

const MesajGogoasa = () => {
  return <h3>Aceasta este o gogoasa cu un tip de glazura doar ca nu stiim ce glazura este , trebe sa te gandesti ce fel de tip de glazura se afla pe gogoasa</h3>
};

const App = () => {
  return (
    <div>
      <NumeSite/>
      <DoughIcon/>
      <MesajSecundar/>
      <Hint/>
      <Spatiu/>
      <Donut/>
      <MesajGogoasa/>
      <Spatiu/>
    </div>
  );
};

export default App
