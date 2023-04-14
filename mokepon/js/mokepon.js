function initiateGame() {
  let playerPetButton = document.getElementById("button-petSelection");
  playerPetButton.addEventListener("click", selectPlayerPet);
}

function selectPlayerPet() {
    // let playerPet;

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanPlayerPet = document.getElementById('playerPetName')

    if (inputHipodoge.checked) {
        spanPlayerPet.innerHTML = 'Hipodoge'
    }else if (inputCapipepo.checked) {
        spanPlayerPet.innerHTML = 'Capipepo'
    }else if (inputRatigueya.checked) {
        spanPlayerPet.innerHTML = 'Ratigueya'
    }else {
        alert ('Espera! es peligroso ir solo.')
    }
}

// This will wait until the HTML is fully loaded.
// Then it will call a function where we will locate our variables
window.addEventListener("load", initiateGame);
