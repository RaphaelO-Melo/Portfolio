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
       `
    }
}


createHeaderLinks();