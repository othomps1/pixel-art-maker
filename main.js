document.addEventListener('DOMContentLoaded', () => {
    const artContainer = document.createElement('div')
    artContainer.className = "pallette"
    document.body.appendChild(artContainer)

    const square = document.createElement('div')
    square.className = "square"
    document.body.appendChild(square)

    for (i = 0; i <= 1025; i++)  {
        const boxes = document.createElement('div')
        boxes.setAttribute('class', 'box')
        artContainer.appendChild(boxes)

        boxes.addEventListener('click', (ev) => {
            setCanvasColor(ev)
        })
    }

    for (i = 0; i <= 11; i++)  {
        const artCircle = document.createElement('div')
        artCircle.className = "artColor"
        square.appendChild(artCircle)

        artCircle.addEventListener('click', (ev) => {
            setBrushColor(ev)
        })
    }

    let id = ['white', 'black', 'red', 'blue', 'yellow', 'green', 'orange', 'purple', 'pink', 'brown', 'gray', 'currentColor']
    for (let i = 0; i < id.length; i++) {
        document.getElementsByClassName('artColor')[i].setAttribute('id', id[i])
    }

    function setBrushColor  (ev)  {
        document.getElementById('currentColor').style.backgroundColor = ev.target.id
    }

    function setCanvasColor (ev) {
        ev.target.style.backgroundColor = document.getElementById('currentColor').style.backgroundColor
    }
}) //End of DOMContent
