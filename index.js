function openClosedDiv(id) {
    const divToOpen = document.getElementById(id);
    if (divToOpen) {
        if (window.getComputedStyle(divToOpen).getPropertyValue('display') === "none") {
            divToOpen.style.display = "block";
        }
    }
}

function toggleDivVisibility(id) {
    const toggleDiv = document.getElementById(id);
    if (toggleDiv) {
        if (window.getComputedStyle(toggleDiv).getPropertyValue('display') === "none") {
            toggleDiv.style.display = "block";
        } else {
            toggleDiv.style.display = "none";
        }
    }
}

function openOneDivAndCloseOthers(idToOpen, idsToClose) {
    openClosedDiv(idToOpen);
    idsToClose.forEach(id => {
        const closeDiv = document.getElementById(id);
        if (closeDiv) {
            if (window.getComputedStyle(closeDiv).getPropertyValue('display') !== "none") {
                closeDiv.style.display = "none";
            }
        }
    });
}

function openHiddenDivs(ids) {
    ids.forEach(id => {
        openClosedDiv(id);
    });
}

function handleWrongAltTextSelection() {
    const wrongImageInfoDiv = document.getElementById('hidableWrongImageGuess');
    console.log(wrongImageInfoDiv);
    if (wrongImageInfoDiv) {
        if (window.getComputedStyle(wrongImageInfoDiv).getPropertyValue('display') === "none") {
            wrongImageInfoDiv.style.display = "block";
        }
    }
}

function setLowVisionButtonsToColourblindColours() {
    const rootElement = document.querySelector(':root');
    rootElement.style.setProperty('--red-colour', 'var(--colourblind-red)');
    rootElement.style.setProperty('--blue-colour', 'var(--colourblind-blue)');
    rootElement.style.setProperty('--green-colour', 'var(--colourblind-green)');
}