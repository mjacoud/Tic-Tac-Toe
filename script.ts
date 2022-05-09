/**********Modal Mode******/

function modeListener(this: HTMLElement | null) {
  const modal_mode: HTMLElement = document.querySelector('.modal-mode')
  const game_mode_ai: Element | null = document.querySelector('.ai')
  const game_mode_2p: Element | null = document.querySelector('.p2')

  game_mode_ai.addEventListener('click', () => {
    modal_mode.style.display = 'none'
  })

  game_mode_2p.addEventListener('click', () => {
    modal_mode.style.display = 'none'
  })
}

/************MODAL AI ************* */

function ai() {}
