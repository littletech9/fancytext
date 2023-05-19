function bigger() {
    alert("Bigger");
    text = document.getElementById("theTxt");
    text.style.fontSize = "24pt";
}

function fancyShmancy() {
    if (document.getElementById("fancy").checked) {
        alert("fancy");
        text = document.getElementById("theTxt");
        text.style.fontWeight = "bold";
        text.style.fontStyle = "italic";
        text.style.backgroundColor = "tomato";
        text.style.textDecoration = "underline";
        text.style.color = "blue";
    }
}

function boringBetty() {
    if (document.getElementById("boring").checked) {
        alert("boring");
        text = document.getElementById("theTxt");
        text.style.fontWeight = "";
        text.style.fontStyle = "";
        text.style.backgroundColor = "";
        text.style.textDecoration = "";
        text.style.color = "";
    }
}

function moo() {
    alert("Moo");
    text = document.getElementById("theTxt");
    text.style.textTransform = "uppercase";
    var txt = text.value;
    var parts = txt.split(".");
    txt = parts.join("-Moo");
    text.value = txt;
}
