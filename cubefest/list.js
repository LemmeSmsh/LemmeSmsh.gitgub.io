let ul = document.querySelector('ul')
let n = 1

// функция создания элемента списка
function createLi(){
    li = document.createElement('li')
    li.innerHTML = `${++n} item`
    ul.append(li)
}

// для того, чтобы все время наблюдать за последним элементом списка
// мы используем нечто вроде замыкания
// прекращаем наблюдать за целевым элементом после создания очередного li
// и начинаем наблюдать за этим новым (последним) элементом
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            createLi()
        }
        observer.unobserve(entry.target)
        observer.observe(document.querySelector('li:last-child'))
    })
}, {
    threshold: 1
})

observer.observe(document.querySelector('li'))