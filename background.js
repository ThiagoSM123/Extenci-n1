// Escuche un mensaje del script de contenido
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "saveData") {
      // Guarde los datos en el almacenamiento local
      localStorage.setItem("videoData", JSON.stringify(request.data));
    }
});
  