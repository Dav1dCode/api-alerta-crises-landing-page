document.addEventListener("DOMContentLoaded", () => { 
  fetch("/alertas")
  .then(response => response.json())
.then(alertas => {
    const listaAlertas = document.getElementById("lista-alertas");
    alertas.forEach(alerta => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${alerta.tipo}</strong>: ${alerta.descricao} <br> Local: ${alerta.local} <br> Gravidade: ${alerta.gravidade}`;
        listaAlertas.appendChild(li);
    })
})
.catch(error => {
    console.error("Erro ao buscar alertas:", error);
});
});