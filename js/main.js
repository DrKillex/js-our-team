'use strict';

// funzioni ----------------------------------------------------------------------------------------

function myColCreator (){                                                   //funzione crea div colonna
    const createdElement = document.createElement('div');
    createdElement.classList.add('col-4', 'mb-2');
    return createdElement
};

function myCardCreator (){                                                              //funzione crea div card
    const createdCard = document.createElement('div');
    createdCard.classList.add('card');
    return createdCard
};

function myCardBodyCreator (){                                                          //funzione crea div card body
    const createdCardBody = document.createElement('div');
    createdCardBody.classList.add('card-body', 'text-center');
    return createdCardBody
};

function myImgCreator (){                                                                                   //funzione crea img
    const createdImg = document.createElement('img');
    createdImg.classList.add('card-img-top');
    return createdImg
};

function myCardTitleCreator (){                                                             //funzione crea h5
    const createdCardTitle = document.createElement('h5');
    createdCardTitle.classList.add('card-title');
    return createdCardTitle
};

function myCardTxtCreator (){                                                           //funzione crea p
    const createdCardTxt = document.createElement('p');
    createdCardTxt.classList.add('card-text');
    return createdCardTxt
};

// main ----------------------------------------------------------------------------------------

const team = [                                                                                              //lista di oggetti
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    }
];

const appendSelector = document.querySelector('.row.justify-content-between');

for (let i = 0; i < team.length; i++){                                              //ciclo che legge il contenuto degli oggetti nell array e crea div con il contenuto 
    let currentTeamMember = team[i];                                    
    const createdElement = myColCreator();
    const createdCard = myCardCreator();
    const createdCardBody = myCardBodyCreator();
    const createdCardTxt = myCardTxtCreator();
    console.log(currentTeamMember);
    for (let key in currentTeamMember){                                                     //ciclo che legge la chiave dell oggetto e stampa il contenuto
        console.log(currentTeamMember[key]);
        if (key === 'img'){
            const createdImg = myImgCreator()
            createdImg.src = `img/${currentTeamMember[key]}`
            createdCard.append(createdImg);
        } else if (key === 'nome'){
            const createdCardTitle = myCardTitleCreator();
            createdCardTitle.innerText = currentTeamMember[key];
            createdCardBody.append(createdCardTitle);
        } else if (key === 'ruolo'){
            const createdCardTxt = myCardTxtCreator();
            createdCardTxt.innerText = currentTeamMember[key];
            createdCardBody.append(createdCardTxt);
        }
    }
    appendSelector.append(createdElement);
    createdElement.append(createdCard);
    createdCard.append(createdCardBody);
    createdCardBody.append(createdCardTxt);
};



