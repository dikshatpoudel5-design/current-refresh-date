function showcurrentDate() {
    let date = new Date();
    document.getElementById("date").innerText = date.toLocaleString();
}

function refreshDate(){
    showcurrentDate();
}

// this function is responsible to display date when the first website loads
showcurrentDate();