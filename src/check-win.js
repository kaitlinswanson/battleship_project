import { destroyerCount, submarineCount, cruiserCount, battleshipCount, carrierCount, cpuDestroyerCount, cpuSubmarineCount, cpuCruiserCount, cpuBattleshipCount, cpuCarrierCount} from './index.js'
import { gameOver } from './game-over.js'

const messageDisplay = document.getElementById('message')

export function checkForWin() {
    if (destroyerCount === 2) { 
        console.log('working')
        messageDisplay.innerHTML = 'You sunk the computers destroyer'
        destroyerCount = 10
    }
    if (submarineCount === 3) { 
        messageDisplay.innerHTML = 'You sunk the computers submarine'
        submarineCount = 10
    }
    if (cruiserCount === 3) { 
        messageDisplay.innerHTML = 'You sunk the computers cruiser'
        cruiserCount = 10
    }
    if (battleshipCount === 4) { 
        messageDisplay.innerHTML = 'You sunk the computers battleship'
        battleshipCount = 10
    }
    if (carrierCount === 5) { 
        messageDisplay.innerHTML = 'You sunk the computers carrier'
        carrierCount = 10
    }
    if(cpuDestroyerCount === 2) { 
        messageDisplay.innerHTML = 'You sunk the computers destroyer'
        cpuDestroyreCount = 10
    }
    if (cpuSubmarineCount === 3) { 
        messageDisplay.innerHTML = 'You sunk the computers submarine'
        cpuSubmarineCount = 10
    }
    if (cpuCruiserCount === 3) { 
        messageDisplay.innerHTML = 'You sunk the computers cruiser'
        cpuCruiserCount = 10
    }
    if (cpuBattleshipCount === 4) { 
        messageDisplay.innerHTML = 'You sunk the computers battleship'
        cpuBattleshipCount = 10
    }
    if (cpuCarrierCount === 5) { 
        messageDisplay.innerHTML = 'You sunk the computers carrier'
        cpuCarrierCount = 10
}
if ((destroyerCount + submarineCount + cruiserCount + battleshipCount + carrierCount) === 50) {
    messageDisplay.innerHTML = "You Win!"
    gameOver()
}
if ((cpuDestroyerCount + cpuSubmarineCount + cpuCruiserCount + cpuBattleshipCount + cpuCarrierCount) === 50) {
    messageDisplay.innerHTML = "Computer Wins!"
    gameOver()
    }
}