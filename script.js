

function payAudio(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return // if pressed key is not in the list
    audio.currentTime = 0
    audio.play();
    key.classList.add('playing')


}

function removeTransaction(e) {
    this.classList.remove('playing')

}
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransaction)
})

window.addEventListener('keydown', payAudio)