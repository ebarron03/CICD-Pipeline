function load_style() {
    page_style = localStorage.getItem("page_style");
    if (page_style === null) {
        page_style = "style.css";
    }
    document.getElementById("page_style").setAttribute("href", page_style);
}

function change() {
    curr = localStorage.getItem("page_style");
    if (curr === "style.css") {
        localStorage.setItem("page_style", "style2.css");
    } else {
        localStorage.setItem("page_style", "style.css");
    }
    load_style();
}

load_style();