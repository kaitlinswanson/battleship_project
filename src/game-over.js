    import { turnDisplay } from './index.js'
      
      
      export function gameOver() {
            isGameOver = true
            startButton.removeEventListener('click', playGame)
            turnDisplay.innerHTML = "GAME OVER"
        }