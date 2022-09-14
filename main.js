function playSound(soundId) {
    const element = document.querySelector(soundId);
    if(element && element.localName == 'audio') {
        element.play();
    }else {
        alert('Not a element or Null')
    }
}

const listaDeBotoes = document.querySelectorAll('.tecla');

for(let n = 0; n < listaDeBotoes.length; n++) {
    const botao = listaDeBotoes[n];
    const som = botao.classList[1];
    const soundId = `#som_${som}`;

    botao.onclick = function() {
        playSound(soundId);
    }
}