let modal = document.getElementById("myModal")
let span = document.getElementsByClassName("close")[0]

function displayModal(item) {
    let bgColor = item.ServerStatus.toLowerCase()
    document.getElementById('title').innerText = item.ServerName
    document.getElementById('body').innerHTML = `<strong>Status</strong>: <span class="status ${bgColor}">${item.ServerStatus}<span>`
    modal.style.display = "block"
}

span.onclick = function () {
    modal.style.display = "none"
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}