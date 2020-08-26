/***** Deliverable 1 *****/
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("#header")
    console.log("Here's your header:", header)
    header.style.color = "red"
    
    
    /***** Deliverable 2 *****/
    
    /***** Deliverable 3 *****/
    function createPlayerDiv(player) {
        let playerElement = document.createElement("div")
        playerElement.className = "player"
        playerElement.setAttribute('data-number', `${player.number}`)
        
        let playerH = document.createElement("h3")
        playerH.innerHTML = `${player.name} <em>${player.nickname}</em>`
        
        playerElement.append(playerH)

        return playerElement
    }
    
    console.log("PLAYERS array looks like this:", PLAYERS)

    let container = document.querySelector(".player-container")

    PLAYERS.forEach(function(player) {
        let playerDiv = createPlayerDiv(player)
        container.append(playerDiv)
    })
    
    
    /***** Deliverable 4 *****/
    let bad = document.querySelector('div[data-number="7"]')
    bad.remove()
})

