/**********Modal Mode******/

function modeListener(this: HTMLElement | null) {
  const modal_mode: HTMLElement | null = document.querySelector('.modal-mode')
  const game_mode_ai: Element | null = document.querySelector('.ai')
  const game_mode_2p: Element | null = document.querySelector('.p2')
  const modal_ai: HTMLElement | null = document.querySelector('.modal-ai')
  const modal_2p: HTMLElement | null = document.querySelector(
    '.modal-multiplayer-form'
  )

  game_mode_ai.addEventListener('click', () => {
    modal_mode.style.display = 'none'
    modal_ai.style.display = 'flex'
    console.log('foi')
  })

  game_mode_2p.addEventListener('click', () => {
    modal_mode.style.display = 'none'
    modal_2p.style.display = 'flex'
    multiplayer_parameter()
  })
}

/************MODAL Multiplayer ************* */

function multiplayer_parameter() {
  const player1_name: HTMLInputElement | null =
    document.querySelector('#player1-name')
  const player2_name: HTMLInputElement | null =
    document.querySelector('#player2-name')
  const multiplayer_modal: HTMLFormElement | null =
    document.querySelector('#modal-select')
  const modal_bg: HTMLObjectElement | null = document.querySelector('.modal-bg')
  const player1_info: HTMLObjectElement | null =
    document.querySelector('.player1-container')
  const player2_info: HTMLObjectElement | null =
    document.querySelector('.player2-container')
  const player1_score: HTMLObjectElement | null =
    document.querySelector('.player1-score')
  const player2_score: HTMLObjectElement | null =
    document.querySelector('.player2-score')

  multiplayer_modal.addEventListener('submit', e => {
    const turns_number: HTMLInputElement = document.querySelector(
      'input[name="turns"]:checked'
    )

    if (
      player1_name.value.length === 0 ||
      player2_name.value.length === 0 ||
      turns_number === null
    ) {
      e.preventDefault()
    } else {
      e.preventDefault()
      multiplayer_modal.style.display = 'none'
      modal_bg.style.display = 'none'
      player1_info.textContent = player1_name.value
      player2_info.textContent = player2_name.value
      player1_score.textContent = '0'
      player2_score.textContent = '0'
    }
  })
}

function game() {
  const pos1: HTMLElement | null = document.querySelector('#pos1')
  const pos2: HTMLElement | null = document.querySelector('#pos2')
  const pos3: HTMLElement | null = document.querySelector('#pos3')
  const pos4: HTMLElement | null = document.querySelector('#pos4')
  const pos5: HTMLElement | null = document.querySelector('#pos5')
  const pos6: HTMLElement | null = document.querySelector('#pos6')
  const pos7: HTMLElement | null = document.querySelector('#pos7')
  const pos8: HTMLElement | null = document.querySelector('#pos8')
  const pos9: HTMLElement | null = document.querySelector('#pos9')
}
