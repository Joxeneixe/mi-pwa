if ("serviceWorker" in navigator) {
navigator.serviceWorker.register("conexion/sw.js")
.then(() => console.log("Service Worker registrado"));
}
function mostrarMensaje() {
alert("Tu PWA está funcionando offline también 🚀");
}