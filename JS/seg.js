// simulador de aptidao para a viagem

document.getElementById('btn-analisar').addEventListener('click', function() {
    const nome = document.getElementById('nome').value.trim()
    const idade = parseInt(document.getElementById('idade').value)
    const fisico = document.getElementById('condicionamento').value
    const cardiaco = document.querySelector('input[name="cardiaco"]:checked').value
    const respiratorio = document.querySelector('input[name="respiratorio"]:checked').value
    const vertigem = document.querySelector('input[name="vertigem"]:checked').value

    if (!nome || !idade || !fisico) {
    alert('Preencha todos os campos antes de analisar.')
    return
    }

    let pontos = 100

    if (cardiaco === 'sim') pontos -= 30
    if (respiratorio === 'sim') pontos -= 25
    if (vertigem === 'sim') pontos -= 15
    if (fisico === 'baixo') pontos -= 20
    if (fisico === 'medio') pontos -= 8
    if (idade < 18) {
    alert('É necessário ter pelo menos 18 anos para realizar a avaliação.')
    return
    }
    if (idade > 70) {
    alert('Idade máxima para avaliação é 70 anos.')
    return
    }
    if (idade >= 55) pontos -= 20
    else if (idade >= 45) pontos -= 10

    if (pontos < 0) pontos = 0

    document.getElementById('nota').textContent = pontos

    const badge = document.getElementById('badge-resultado')
    badge.style.display = 'inline-block'

    if (pontos >= 80) {
        badge.textContent = '⭐ Excelente'
        badge.className = 'badge-verde'
    } else if (pontos >= 60) {
        badge.textContent = '👍 Bom'
        badge.className = 'badge-azul'
    } else if (pontos >= 40) {
        badge.textContent = '⚠️ Regular'
        badge.className = 'badge-amarelo'
    } else {
        badge.textContent = '❌ Inapto'
        badge.className = 'badge-vermelho'
    }

    const lista = document.getElementById('destinos')
    lista.innerHTML = ''

    if (pontos >= 40) lista.innerHTML += '<li>Voo Suborbital</li>'
    if (pontos >= 65) lista.innerHTML += '<li>Órbita da Terra</li>'
    if (pontos >= 85) lista.innerHTML += '<li>Experiência Lunar</li>'

    const listaApto = document.getElementById('lista-apto')
    listaApto.style.display = lista.innerHTML !== '' ? 'block' : 'none'

    const obs = document.getElementById('obs-resultado')
    if (pontos >= 65 && pontos < 85) {
    obs.textContent = 'Treinamento adicional recomendado para Experiência Lunar.'
    obs.style.display = 'block'
} else if (pontos >= 40 && pontos < 65) {
    obs.textContent = 'Treinamento adicional necessário para Órbita da Terra e Experiência Lunar.'
    obs.style.display = 'block'
} else if (pontos < 40) {
    obs.textContent = 'Avaliação médica especializada necessária antes de qualquer missão.'
    obs.style.display = 'block'
} else {
    obs.style.display = 'none'
}
})

// checklist de embarque

    document.getElementById('btn-embarque').addEventListener('click', function() {
    const itens = document.querySelectorAll('.item-check')
    let tudo = true

    itens.forEach(function(item) {
    if (!item.checked) tudo = false
})

    const icone = document.getElementById('icone-status')
    const texto = document.getElementById('texto-status')

    if (tudo) {
        icone.innerHTML = '<i class="bi bi-check-circle-fill" style="font-size:2.5rem; color:#4ade80;"></i>'
        texto.textContent = 'Embarque autorizado! Boa viagem, astronauta.'
        texto.className = 'msg-status status-ok'
    } else {
        icone.innerHTML = '<i class="bi bi-x-circle-fill" style="font-size:2.5rem; color:#f87171;"></i>'
        texto.textContent = 'Pendências encontradas. Complete todos os itens para autorizar o embarque.'
        texto.className = 'msg-status status-nao'
}
})