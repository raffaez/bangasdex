const kagura = {
  nome: 'kagura',
  titulo: 'Onmyouji Master',
  classe: 'mago',
  classeString: 'mage',
  lane: 'mid',
  laneString: 'Mid Lane',
  descricao: 'Upon the Cadia Riverlands, there exists a mysterious profession called Onmyouji Master that uses the yin yang arts to control spirits and see into the future.',
  durabilidade: 58,
  ofensividade: 42,
  controle: 90
};

const hanabi = {
  nome: 'hanabi',
  titulo: 'Scarlet Flower',
  classe: 'adc',
  classeString: 'marksman',
  lane: 'gold',
  laneString: 'Gold Lane',
  descricao: `As the oldest daughter of the Scarlet Supreme Grandmaster, Hanabi had been raised as the successor to her father's position and exhibited extraordinary talent.`,
  durabilidade: 25,
  ofensividade: 75,
  controle: 80
}

const benedetta = {
  nome: 'benedetta',
  titulo: 'Shadow Ranger',
  classe: 'assassino',
  classeString: 'assassin',
  lane: 'xp',
  laneString: 'XP Lane',
  descricao: `This courageous, persevering female ranger leads a team and fights in the land south to Lantis Mountain, protecting the scattered settlement set up by the last survivors.`,
  durabilidade: 50,
  ofensividade: 75,
  controle: 30
}

const yve = {
  nome: 'yve',
  titulo: 'Astrowarden',
  classe: 'mago',
  classeString: 'Mage',
  lane: 'mid',
  laneString: 'Mid Lane',
  descricao: `Aurora was the first person to discover Yve. This was the first time such a mysterious, cold, and emotionless creature had appeared in the Land of Dawn.`,
  durabilidade: 39,
  ofensividade: 41,
  controle: 90
}

const angela = {
  nome: 'angela',
  titulo: 'Bunnylove',
  classe: 'sup',
  classeString: 'Support',
  lane: 'roam',
  laneString: 'Roaming',
  descricao: `An android created by the founder of Laboratory 1718, Dr. Baker. It was the first life form created without using human body or soul.`,
  durabilidade: 49,
  ofensividade: 36,
  controle: 84
}

const guinevere = {
  nome: 'guinevere',
  titulo: 'ms. violet',
  classe: 'soldado',
  classeString: 'Fighter',
  lane: 'xp',
  laneString: 'XP Lane',
  descricao: `As the youngest daughter of one of the few noble households in the Land of Dawn, House Baroque, she studied at the Magic Academy since she was a child.`,
  durabilidade: 40,
  ofensividade: 85,
  controle: 50
}

const fanny = {
  nome: 'fanny',
  titulo: 'blade dancer',
  classe: 'assassino',
  classeString: 'Assassin',
  lane: 'jungle',
  laneString: 'Jungle',
  descricao: `Disregarding obstructions from her family, Fanny joined the army, and through her own designed weapons, she successfully completed all the tasks.`,
  durabilidade: 64,
  ofensividade: 73,
  controle: 19
}

const akai = {
  nome: 'akai',
  titulo: 'panda warrior',
  classe: 'tank',
  classeString: 'Tank',
  lane: 'jungle',
  laneString: 'Jungle',
  descricao: `Once there was a panda in Stream Valley named Akai. With the dream of becoming a hero, he was always eager to offer help, but often ended up causing more trouble.`,
  durabilidade: 90,
  ofensividade: 65,
  controle: 55
}

const ruby = {
  nome: 'ruby',
  titulo: 'little red hood',
  classe: 'soldado',
  classeString: 'Fighter',
  lane: 'roam',
  laneString: 'Roaming',
  descricao: `Staring at the skyline, Ruby was determined to put an end to everyone responsible for the death of all those innocent and good people.`,
  durabilidade: 75,
  ofensividade: 45,
  controle: 55
}



function mostrarCard(nome){
  let heroi = encontrarHeroi(nome);

  document.querySelector(`#${nome}`).innerHTML = `
    <div class="card">
      <div class="card-image card-image_${heroi.classe}">
        <img src="assets/images/card-img/${heroi.nome}.png" alt="${heroi.nome}">
        
        <div class="mini-card_nome" onclick="esconderCard('${nome}')">
        <span>Kagura</span>
        <span>
          <i class="fa-solid fa-plus"></i>
        </span>
      </div>
      </div>
      <div class="card-titulo card-titulo_${heroi.classe}">${heroi.titulo}</div>
      <div class="card-nome">${heroi.nome}</div>
      <div class="card-info">
        <span class="card-info_${heroi.classe}">${heroi.classeString}</span> <span class="card-info_${heroi.lane}">${heroi.laneString}</span>
      </div>
      <div class="card-descricao">
        ${heroi.descricao}
      </div>

      <div class="card-atributos card-atributos_${heroi.classe} clearfix">
        <div class="card-terco">
          <div class="atributo">${heroi.durabilidade}<sup>%</sup></div>
          <div class="atributo-valor">Durability</div>
        </div>
        
        <div class="card-terco">
          <div class="atributo">${heroi.ofensividade}<sup>%</sup></div>
          <div class="atributo-valor">Offense</div>
        </div>
        
        <div class="card-terco sem-borda">
          <div class="atributo">${heroi.controle}<sup>%</sup></div>
          <div class="atributo-valor">Control</div>
        </div>
      </div>
    </div> <!-- /card -->`;
}

function esconderCard(nome){
  let heroi = encontrarHeroi(nome);

  document.querySelector(`#${nome}`).innerHTML = `
    <div class="mini-card">
      <div class="card-image card-image_${heroi.classe}">
        <img src="assets/images/card-img/${heroi.nome}.png" alt="${heroi.nome}">
        <div class="mini-card_nome" onclick="mostrarCard('${heroi.nome}')">
          <span>${heroi.nome}</span>
          <span>
            <i class="fa-solid fa-plus"></i>
          </span>
        </div>
      </div>
    </div> <!-- /card -->
  `;
}

function encontrarHeroi(nome){
  switch(nome){
    case 'kagura':
      return kagura;
    case 'hanabi':
      return hanabi;
    case 'benedetta':
      return benedetta;
    case 'yve':
      return yve;
    case 'angela':
      return angela;
    case 'guinevere':
      return guinevere;
    case 'fanny':
      return fanny;
    case 'akai':
      return akai;
    case 'ruby':
      return ruby;
  }
}