


const box = document.querySelector('.box')
const content = document.querySelector('.content')

function appendCube() {
    const cube = content.cloneNode(false)
    cubeNew.classList.remove('show')
    box.append(cubeNew)
    console.log(cubeNew.className)
}

function createCubeBefore() {
    cubeNew = content.cloneNode(false)
    box.prepend(cubeNew)
}

const options = {
    root : null,
    rootMargin : '0px',
    threshold : 0.1
}

const observer = new IntersectionObserver((unitCube, options) => {
    unitCube.forEach(cube => {
        if(cube.isIntersecting){
            setTimeout(createCubeAppend(), 5000)
            observer.unobserve(cube.target)
            observer.observe(document.querySelector('.content:last-child'))
            document.querySelector('.content:last-child').classList.add('show')
            document.querySelector('.content:first-child').remove()
            console.log(cubeNew.className)
        }      
    })
}, {
    threshold: 1
})

observer.observe(document.querySelector('.content:last-child'))

// const observer2 = new IntersectionObserver((unitCube, options) => {
//     unitCube.forEach(cube => {
//         if(cube.boundingClientRect.y > -269){
//             console.log(unitCube)
//             createCubeBefore()
//             observer2.unobserve(cube.target)
//             observer2.observe(document.querySelector('.content:first-child'))
//             document.querySelector('.content:last-child').remove()
//         }      
//     })
// }, {
//     threshold: 1
// })

// observer2.observe(document.querySelector('.content:first-child'))

// проблемма: элементы созадются прямо на экране
