//0: creare array di oggetti;

const teamMember = [
    { 
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    { 
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    { 
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    { 
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    { 
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    { 
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    },
];

console.log(teamMember);


const rowElem = document.querySelector(".row");
let membersElems = "";

for(let i = 0; i < teamMember.length; i++) {
    const curMember = teamMember[i];
    membersElems += `
    
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="${curMember.foto}" class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${curMember.nome}</h5>
                     <p class="card-text">${curMember.ruolo}</p>
                </div>
            </div>    
        </div>
    `;
}

console.log(membersElems);
rowElem.innerHTML = membersElems;