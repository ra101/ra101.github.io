links = {
    "console": "console",
    "arcard": "AR-Card",
    "webfolio": "WebFolio",
    "gameportal": null,
    "github": "https://github.com/ra101",
    "resume": "https://raw.githubusercontent.com/ra101/ra101/core/Resume.pdf",
    "source_code": "https://github.com/ra101/ra101.github.io"
}

for (let element_id in links) {
    document.getElementById(element_id).addEventListener("click", () => {
        links[element_id] !== null ? window.open(links[element_id], "_blank") : alert("W.I.P.");
    });
}
