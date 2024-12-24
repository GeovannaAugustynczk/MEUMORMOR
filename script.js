const startDate = new Date("2024-05-08T00:00:00");

function updateCounter() {
  const now = new Date();
  const elapsed = now - startDate;

  const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
  const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
  const seconds = Math.floor((elapsed / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCounter, 1000);
updateCounter();

const items = [
  "ir para a Praia Juntos",
  "Fazer um piquenique no parque",
  "Cozinhar um jantar especial",
  "Ir a um café aconchegante",
  "Comprar e Jogar jogos de tabuleiro",
  "Fazer uma caminhada ao ar livre",
  "Planejar uma viagem dos sonhos",
  "Escrever uma carta um para o outro",
  "Experimentar uma receita nova",
  "Assistir o Nascer do Sol",
  "maratonar Harry Potter",
  "maratonar Velozes e Furiosos",
  "maratonar universo de Ordem Paranormal",
  "Fazer uma maratona de séries",
  "Planejar um dia de spa em casa",
  "Desenhar ou pintar algo juntos",
  "Apreender a Dançar Fundo da Grota rsrs",
  "Fazer uma playlist de músicas favoritas",
  "Explorar um lugar histórico na cidade",
  "Provar comida de um restaurante diferente",
  "Planejar um projeto DIY (faça você mesmo)",
  "Plantar uma árvore ou uma plantinha",
  "Escrever uma lista de metas juntos",
  "Ir a um evento local (feira ou show)",
  "Ir no mercado municipal",
  "Jogar Boliche",
  "Ir a um parque de diversões ou zoológico",
  "Fazer uma noite de fondue ou petiscos",
  "Ver as estrelas com um aplicativo de astronomia",
  "Fazer um diário de memórias juntos",
  "Planejar uma noite de sonhos para o futuro",
  "ficar juntos para sempre",
  "ter a Ayla Ynaie com +30",
  ];
  

  const checklist = document.getElementById("checklist");

  function renderChecklist() {
    checklist.innerHTML = ""; 
    items.forEach((item, index) => {
      const li = document.createElement("li");
  
      
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `item-${index}`;
  
      
      const label = document.createElement("label");
      label.setAttribute("for", `item-${index}`);
      label.textContent = item;
  
      
      li.appendChild(checkbox);
      li.appendChild(label);
  
      
      checklist.appendChild(li);
    });
  }
  

  renderChecklist();