


const box = document.querySelector('.box')
const content = document.querySelector('.content')

function createCubeAppend() {
    cubeNew = content.cloneNode(false)
    box.append(cubeNew)
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
        if(cube.intersectionRatio > 0.1){
            createCubeAppend()
            observer.unobserve(cube.target)
            observer.observe(document.querySelector('.content:last-child'))
            shower.observe(document.querySelector('.content:last-child'))
            // document.querySelector('.content:first-child').remove()
        }
        if(cube.isIntersecting){
            document.querySelector('.content').classList.add('show')
        } else {
            document.querySelector('.content').classList.remove('show')
        }
    })
}, {
    threshold: 1
})

observer.observe(document.querySelector('.content:last-child'))

const shower = new IntersectionObserver((showCube, options) => {
    showCube.forEach(cccube => {
        if(!cccube.isIntersecting){
            cccube.target.classList.remove('show')
        } else {
            cccube.target.classList.add('show')
        }
    })
}, {
    threshold: 1
})

let cubes = document.querySelectorAll('.content')

for(let cubeONwhach of cubes){
    shower.observe(cubeONwhach)
}

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
