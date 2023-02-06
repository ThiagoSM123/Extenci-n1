document.getElementById("download-button").addEventListener("click", function() {
    // Crea un enlace con un archivo descargable
    const link = document.createElement("a");
    link.download = "video_data.txt";
    link.href = URL.createObjectURL(new Blob([data]));
    
    // Haz clic en el enlace para descargar el archivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});