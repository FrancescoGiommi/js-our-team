/* Dato un array di oggetti rappresentante un team di un’azienda, 
creare una pagina dedicata in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato)

Bonus
Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina 
(usate una foto qualunque, anche vostra se volete sentirvi parte del team!) */

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

/* dichiaro le classi degli elementi */
const cardOutput = document.getElementById("output-card");
const formUploadCard = document.getElementById("form-upload-card");
const btnGenerateCard = document.getElementById("btn-generate-card");

/* genero le card nel DOM con forEach */
let cardHtml = "";

formUploadCard.addEventListener("submit", (event) => {
  event.preventDefault();
  teamMembers.forEach((member) => {
    const cardMember = `
       <div class="col-lg-4 col-md-6 col-xs-12">
          <div class="card mb-3" style="max-width: 540px">
            <div class="row  g-0">
              <div class="col-md-4">
                <img
                  src="${member.img}"
                  class="img-fluid rounded-start image"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h2 class="card-title h5 name">${member.name}</h2>
                  <span class="card-text d-block role">${member.role}</span>
                  <span class="card-text email">${member.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  `;
    cardHtml += cardMember;
  });
  cardOutput.innerHTML = cardHtml;
});
