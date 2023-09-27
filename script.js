function createGrid() {
    let divRows = document.createElement("div");
    let divColumns = document.createElement("div");
    divRows.setAttribute("id", "rows");
    divColumns.setAttribute("id", "columns");
    let rows = document.getElementById("rows").appendChild(divRows);
    let columns = document.getElementById("columns").appendChild(divColumns);
}

createGrid();
