
let delay = -0.4

function createCard (date, day, games) {
    delay += 0.4
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}

function createGame (team1, hour, team2) {
    return `
    <li>
        <img src="./assets/icon-${team1}.svg" alt="Suíça">
        <strong>${hour}</strong>
        <img src="./assets/icon-${team2}.svg" alt="Camarões">
    </li>
    `
}


document.querySelector('#cards').innerHTML =                                                              
createCard("20/11", "Domingo", createGame('qatar', '13:00', 'ecuador')) + 

createCard("24/11", "Segunda", createGame('brazil', '16:00', 'serbia') + createGame('switzerland', '07:00', 'cameroon') + createGame('uruguay', '10:00', 'southkorea'))

// uso de concatenação para usar outra function createGame com novos parâmetros para a criação de uma nova li com outro jogo