/**********Modal Mode******/
function modeListener() {
    var modal_mode = document.querySelector('.modal-mode');
    var game_mode_ai = document.querySelector('.ai');
    var game_mode_2p = document.querySelector('.p2');
    game_mode_ai.addEventListener('click', function () {
        modal_mode.style.display = 'none';
    });
    game_mode_2p.addEventListener('click', function () {
        modal_mode.style.display = 'none';
    });
}
/************MODAL AI ************* */
function ai() { }
