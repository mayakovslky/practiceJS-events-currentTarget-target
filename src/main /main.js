const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

// const onClickHandler1 = (e) => {
//     if(e.currentTarget.id === 'small') {
//         alert ('small')
//     }
// }

// универсальный обработчик, который может покрывать бесконечное количество кнопок

const onClickHandler1 = (e) => {

    e.stopPropagation()

    if(e.target.tagName === 'BUTTON') {
        alert (e.target.id)
    }
}

// const onClickHandler1 = (e) => {
//     console.log('small')
// }
//
// const onClickHandler2 = (e) => {
//     console.log('medium')
// }
//
const onClickHandler3 = (e) => {
       alert('hello!')
}


sm.onclick = onClickHandler1
// sm.onclick = null // таким образом затирается значение события

sm.addEventListener('click', onClickHandler1)
// md.addEventListener('click', onClickHandler2)
bg.addEventListener('click', onClickHandler3)
// sm.removeEventListener('click', onClickHandler1)

const a = document.getElementById('a')

a.addEventListener('click', (e) => {
    e.preventDefault()
    alert ('go to learn CSS')
})