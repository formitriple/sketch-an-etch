const state = (function() {
    const values = {
        numSquares: 16
    }
    const updateSquares = (val) => {
        values.numSquares = val;
    }
    return {
        returnVals() {
            return values
        },
        returnUpdateSquares(val) {
            updateSquares(val)
        }
    }
})()

const generateGrid = (val) => {
    const container = document.querySelector(".container")
    const containerDimension = 600;
    const squareDimension = containerDimension / val;

    const changeColorHover = (el) => {
        el.style.background = "blue"
    }

    for (let i = 0; i < val * val; i++) {
        const el = document.createElement("div");
        el.classList.add("square");
        el.style.width = `${squareDimension}px`;
        el.style.height = `${squareDimension}px`;
        el.addEventListener("mouseover", () => changeColorHover(el))
        container.appendChild(el);
    }
}

const clearGrid = () => {
    Array.from(document.querySelectorAll(".square")).forEach(square => {
        square.style.background = "";
    })
}

const updateGrid = (val) => {
    const container = document.querySelector(".container")
    while (container.firstChild) {
        container.firstChild.remove()
    }
    generateGrid(val)
}

const handleClearBtn = () => {
    document.querySelector(".btn-clear").addEventListener("click", () => {
        clearGrid()
    })
}

const handleUpdateBtn = () => {
    document.querySelector(".btn-update").addEventListener("click", () => {
        const newValue = prompt("enter new dimensions")
        updateGrid(newValue)
    })
}

// dom load
const startApp = () => {
    document.addEventListener("DOMContentLoaded", () => {
        generateGrid(state.returnVals().numSquares);
        handleClearBtn()
        handleUpdateBtn()
    })
}

startApp()