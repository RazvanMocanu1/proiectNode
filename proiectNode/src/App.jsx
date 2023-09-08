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
  return <h3>Aceasta este o gogoasa care are o aroma speciala si trebe sa iti dai seama ce aroma este</h3>
};

const Hint2 = () => {
  return <h6>Hint : este o aroma de fructe</h6>
}

const Mesaj = () => {
  return <h1>m̥̊巳𝑠🅐ｊ</h1>
}

const Mesaj2 = () => {
  return <h3>Aceasta este un mesaj secret , trebe sa iti dai seama ce inseamna</h3>
};

const Hint3 = () => {
  return <h6>Hint : are numai 5 litere</h6>
};

const RubikCube = () => {
  return <img src="cubRubik.png" width={250} height={250}></img>
};

const MesajCubRubik = () => {
  return <h3>Acesta este un cub rubik , oare cate patrate se afla pe o singura fata a acestuia</h3>
}

const Hint4 = () => {
  return <h6>Hint : gandeste inafara cutiei</h6>
}

const Spaghetti = () => {
  return <img src="spaghetti.jpg" width={250} height={250}></img>
};

const MesajSpaghetti = () => {
  return <h3>Aceasta este o reteta anume de paste si trebe sa iti dai seama care reteta este mai exact</h3>
}

const Hint5 = () => {
  return <h6>Hint : acesta reteta contine multa carne</h6>
}

const RaspunsuriCorecte = () => {
  return <h2>Raspunsurile corecte erau : </h2>
}

const Raspunsul1 = () => {
  return <h2> - Dough / Aluat </h2>
}

const Raspunsul2 = () => {
  return <h2> - Aroma de capsune </h2>
}
const Raspunsul3 = () => {
  return <h2> - mesaj </h2>
}
const Raspunsul4 = () => {
  return <h2> - 14 patrate per culoare </h2>
}
const Raspunsul5 = () => {
  return <h2> - Paste Bologneze "p.s : am cautat pe net cum se scrie corect" </h2>
}

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
      <Hint2/>
      <Spatiu/>
      <Mesaj/>
      <Mesaj2/>
      <Hint3/>
      <Spatiu/>
      <RubikCube/>
      <MesajCubRubik/>
      <Hint4/>
      <Spatiu/>
      <Spaghetti/>
      <MesajSpaghetti/>
      <Hint5/>
      <Spatiu/>
      <RaspunsuriCorecte/>
      <Raspunsul1/>
      <Raspunsul2/>
      <Raspunsul3/>
      <Raspunsul4/>
      <Raspunsul5/>
    </div>
  );
};

export default App
