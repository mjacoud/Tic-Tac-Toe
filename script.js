/**********Modal Mode******/
function modeListener() {
  var modal_mode = document.querySelector('.modal-mode')
  var game_mode_ai = document.querySelector('.ai')
  var game_mode_2p = document.querySelector('.p2')
  var modal_ai = document.querySelector('.modal-ai')
  var modal_2p = document.querySelector('.modal-multiplayer-form')
  game_mode_ai.addEventListener('click', function () {
    modal_mode.style.display = 'none'
    modal_ai.style.display = 'flex'
    console.log('foi')
  })
  game_mode_2p.addEventListener('click', function () {
    modal_mode.style.display = 'none'
    modal_2p.style.display = 'flex'
    multiplayer_parameter()
  })
}
/************MODAL Multiplayer ************* */
var game_msg = document.querySelector('.game-msg')
var player1_name = document.querySelector('#player1-name')
var player2_name = document.querySelector('#player2-name')
var multiplayer_modal = document.querySelector('#modal-select')
var modal_bg = document.querySelector('.modal-bg')
var player1_info = document.querySelector('.player1-container')
var player2_info = document.querySelector('.player2-container')
var player1_score = document.querySelector('.player1-score')
var player2_score = document.querySelector('.player2-score')

function multiplayer_parameter() {
  multiplayer_modal.addEventListener('submit', function (e) {
    var turns_number = document.querySelector(
      'input[name="turns"]:checked'
    ).value

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
      player1_score.textContent = 0
      player2_score.textContent = 0
      game_msg.textContent = player1_name.value + " Turn's"
      game()
    }
  })
}

function reset_board() {
  pos1.textContent = ''
  pos2.textContent = ''
  pos3.textContent = ''
  pos4.textContent = ''
  pos5.textContent = ''
  pos6.textContent = ''
  pos7.textContent = ''
  pos8.textContent = ''
  pos9.textContent = ''
}

function game() {
  var pos1 = document.querySelector('#pos1')
  var pos2 = document.querySelector('#pos2')
  var pos3 = document.querySelector('#pos3')
  var pos4 = document.querySelector('#pos4')
  var pos5 = document.querySelector('#pos5')
  var pos6 = document.querySelector('#pos6')
  var pos7 = document.querySelector('#pos7')
  var pos8 = document.querySelector('#pos8')
  var pos9 = document.querySelector('#pos9')

  let player_turn = 1

  pos1.addEventListener(
    'click',
    e => {
      if (player_turn == 1) {
        pos1.textContent = 'X'
        player_turn = 2
        game_msg.textContent = player2_name.value + " Turn's"
        win_condition()
      } else {
        pos1.textContent = 'O'
        player_turn = 1
        game_msg.textContent = player1_name.value + " Turn's"
        win_condition()
      }
    },
    { once: true }
  )

  pos2.addEventListener(
    'click',
    e => {
      if (player_turn == 1) {
        pos2.textContent = 'X'
        player_turn = 2
        game_msg.textContent = player2_name.value + " Turn's"
        win_condition()
      } else {
        pos2.textContent = 'O'
        player_turn = 1
        game_msg.textContent = player1_name.value + " Turn's"
        win_condition()
      }
    },
    { once: true }
  )

  pos3.addEventListener(
    'click',
    e => {
      if (player_turn == 1) {
        pos3.textContent = 'X'
        player_turn = 2
        game_msg.textContent = player2_name.value + " Turn's"
        win_condition()
      } else {
        pos3.textContent = 'O'
        player_turn = 1
        game_msg.textContent = player1_name.value + " Turn's"
        win_condition()
      }
    },
    { once: true }
  )
  pos4.addEventListener(
    'click',
    e => {
      if (player_turn == 1) {
        pos4.textContent = 'X'
        player_turn = 2
        game_msg.textContent = player2_name.value + " Turn's"
        win_condition()
      } else {
        pos4.textContent = 'O'
        player_turn = 1
        game_msg.textContent = player1_name.value + " Turn's"
        win_condition()
      }
    },
    { once: true }
  )
  pos5.addEventListener(
    'click',
    e => {
      if (player_turn == 1) {
        pos5.textContent = 'X'
        player_turn = 2
        game_msg.textContent = player2_name.value + " Turn's"
        win_condition()
      } else {
        pos5.textContent = 'O'
        player_turn = 1
        game_msg.textContent = player1_name.value + " Turn's"
        win_condition()
      }
    },
    { once: true }
  )
  pos6.addEventListener(
    'click',
    e => {
      if (player_turn == 1) {
        pos6.textContent = 'X'
        player_turn = 2
        game_msg.textContent = player2_name.value + " Turn's"
        win_condition()
      } else {
        pos6.textContent = 'O'
        player_turn = 1
        game_msg.textContent = player1_name.value + " Turn's"
        win_condition()
      }
    },
    { once: true }
  )
  pos7.addEventListener(
    'click',
    e => {
      if (player_turn == 1) {
        pos7.textContent = 'X'
        player_turn = 2
        game_msg.textContent = player2_name.value + " Turn's"
        win_condition()
      } else {
        pos7.textContent = 'O'
        player_turn = 1
        game_msg.textContent = player1_name.value + " Turn's"
        win_condition()
      }
    },
    { once: true }
  )
  pos8.addEventListener(
    'click',
    e => {
      if (player_turn == 1) {
        pos8.textContent = 'X'
        player_turn = 2
        game_msg.textContent = player2_name.value + " Turn's"
        win_condition()
      } else {
        pos8.textContent = 'O'
        player_turn = 1
        game_msg.textContent = player1_name.value + " Turn's"
        win_condition()
      }
    },
    { once: true }
  )
  pos9.addEventListener(
    'click',
    e => {
      if (player_turn == 1) {
        pos9.textContent = 'X'
        player_turn = 2
        game_msg.textContent = player2_name.value + " Turn's"
        win_condition()
      } else {
        pos9.textContent = 'O'
        player_turn = 1
        game_msg.textContent = player1_name.value + " Turn's"
        win_condition()
      }
    },
    { once: true }
  )
}

function win_condition() {
  if (
    (pos1.textContent == 'X' &&
      pos2.textContent == 'X' &&
      pos3.textContent == 'X') ||
    (pos1.textContent == 'X' &&
      pos5.textContent == 'X' &&
      pos9.textContent == 'X') ||
    (pos1.textContent == 'X' &&
      pos4.textContent == 'X' &&
      pos7.textContent == 'X') ||
    (pos2.textContent == 'X' &&
      pos5.textContent == 'X' &&
      pos8.textContent == 'X') ||
    (pos3.textContent == 'X' &&
      pos5.textContent == 'X' &&
      pos7.textContent == 'X') ||
    (pos3.textContent == 'X' &&
      pos6.textContent == 'X' &&
      pos9.textContent == 'X') ||
    (pos4.textContent == 'X' &&
      pos5.textContent == 'X' &&
      pos6.textContent == 'X') ||
    (pos7.textContent == 'X' &&
      pos8.textContent == 'X' &&
      pos9.textContent == 'X')
  ) {
    game_msg.textContent = player1_name.value + ' Wins'
    player1_score.textContent += 1
    reset_board()
    game()
    if (player1_score >= turns_number) {
      game_msg.textContent = 'GAME OVER' + player1_name.value + 'is the Winner'
    }
  } else if (
    (pos1.textContent == 'O' &&
      pos2.textContent == 'O' &&
      pos3.textContent == 'O') ||
    (pos1.textContent == 'O' &&
      pos5.textContent == 'O' &&
      pos9.textContent == 'O') ||
    (pos1.textContent == 'O' &&
      pos4.textContent == 'O' &&
      pos7.textContent == 'O') ||
    (pos2.textContent == 'O' &&
      pos5.textContent == 'O' &&
      pos8.textContent == 'O') ||
    (pos3.textContent == 'O' &&
      pos5.textContent == 'O' &&
      pos7.textContent == 'O') ||
    (pos3.textContent == 'O' &&
      pos6.textContent == 'O' &&
      pos9.textContent == 'O') ||
    (pos4.textContent == 'O' &&
      pos5.textContent == 'O' &&
      pos6.textContent == 'O') ||
    (pos7.textContent == 'O' &&
      pos8.textContent == 'O' &&
      pos9.textContent == 'O')
  ) {
    game_msg.textContent = player1_name.value + ' Wins'
    player2_score.textContent += 1
    reset_board()
    game()
    if (player2_score >= turns_number) {
      game_msg.textContent = 'GAME OVER' + player2_name.value + 'is the Winner'
    }
  } else if (
    pos1.textContent != '' &&
    pos2.textContent != '' &&
    pos3.textContent != '' &&
    pos4.textContent != '' &&
    pos5.textContent != '' &&
    pos6.textContent != '' &&
    pos7.textContent != '' &&
    pos8.textContent != '' &&
    pos9.textContent != ''
  ) {
    game_msg.textContent = 'DRAW'
    reset_board()
    game()
  }
}
