const apiKey = "AIzaSyBsDOhc71K-5xJPrL4001H89YkBKrSaPiA";
const url = new URL(window.location.href);
const videoId = url.searchParams.get("v");

fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${apiKey}`)
  .then(response => {
    if (!response.ok) {
      throw new Error("No se pudo obtener la información del video");
    }
    return response.json();
  })
  .then(data => {
    chrome.runtime.sendMessage({ action: "saveData", data });
  })
  .catch(error => {
    console.error(error);
    chrome.runtime.sendMessage({ action: "showError", error });
});