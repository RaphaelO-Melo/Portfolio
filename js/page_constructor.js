//! Script responsável por construir a página

function createHeaderLinks(){
    const REFERENCES_TXT = ['Sobre', 'Projetos', 'Contato'];
    const REFERENCES_LINKS = ['#about-section', '#projects-section', '#contact-section'];

    for(let cont = 0; cont < REFERENCES_TXT.length; cont++){
        
       document.getElementById('ul_navbar').innerHTML += 
       `
        <li class="nav-item">
            <a class="nav-link" href="${REFERENCES_LINKS[cont]}">
                <img class="egg-link d-md-none d-lg-none d-xl-none" src="./assets/images/icons/egg.png" alt="Egg Icon">
                ${REFERENCES_TXT[cont]}
            </a>
        </li>
       `;
    }
}


function createSkillsLvl(){
    const REFERENCES_SKILL_NAMES = ['HTML5', 'CSS3', 'JAVASCRIPT (ES6)', 'BOOTSTRAP 4', 'PHP 7', 'MySQL'];
    const REFERENCES_SKILL_LEVELS = [4, 3, 3, 3, 2, 2];
    let resp_string = '';

    for(cont = 0; cont < REFERENCES_SKILL_NAMES.length; cont++){
        resp_string += 
        `<div class="col-10 ml-auto mr-auto skill-area clearfix pb-3">
            <h6>${REFERENCES_SKILL_NAMES[cont]}</h6>
        `;
        for(cont_2 = 0; cont_2 < 5; cont_2++){
            if(cont_2 < REFERENCES_SKILL_LEVELS[cont]){
                resp_string += `<div class="float-left skill-lvl-full"></div>`
            } else {
                resp_string += `<div class="float-left skill-lvl-empty"></div>`
            }
            
        }
        resp_string += `</div>`;
    }
    

    document.getElementById('skill-container').innerHTML += resp_string;
}

function createProjects(){
    const REFERENCES_PROJECTS = 
    [
        {
            name: 10,
            descricao: 'não sei'
        },

        {
            name: 15,
            descricao: 'não sei 02'
        }

    ]

    console.log(REFERENCES_PROJECTS);
}



//Criação dos elementos
createHeaderLinks();
createSkillsLvl();
createProjects();