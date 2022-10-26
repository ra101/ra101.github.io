links = {
    "console": "https://console.ra101.dev",
    "arcard": "https://ar.ra101.dev",
    "personal-website": "https://web.ra101.dev",
    "hashnode": "https://journal.ra101.dev",
    "github": "https://github.com/ra101",
    "resume": "https://raw.githubusercontent.com/ra101/ra101/core/Resume.pdf",
    "source_code": "https://github.com/ra101/ra101.github.io"
}

for (let element_id in links) {
    document.getElementById(element_id).addEventListener("click", () => {
        window.open(links[element_id], "_blank")
    });
}


ra101 = document.getElementById("ra101");
mk_choose = document.getElementById("mk-choose");

ra101.addEventListener("click", ()=>{mk_choose.play()});

window.addEventListener("load", ()=>{mk_choose.play()});
