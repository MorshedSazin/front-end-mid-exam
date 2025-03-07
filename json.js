function loadData() {
    const jsonData = `[
        {"id": 1, "name": "Alice Johnson", "email": "alice@example.com"},
        {"id": 2, "name": "Bob Smith", "email": "bob@example.com"},
        {"id": 3, "name": "Charlie Brown", "email": "charlie@example.com"},
        {"id": 4, "name": "David Wilson", "email": "david@example.com"},
        {"id": 5, "name": "Emma Davis", "email": "emma@example.com"},
        {"id": 6, "name": "Frank Thomas", "email": "frank@example.com"},
        {"id": 7, "name": "Grace Miller", "email": "grace@example.com"},
        {"id": 8, "name": "Henry White", "email": "henry@example.com"},
        {"id": 9, "name": "Isabella Moore", "email": "isabella@example.com"},
        {"id": 10, "name": "Jack Taylor", "email": "jack@example.com"}
    ]`;

    let data = JSON.parse(jsonData);
    let container = document.getElementById("table-container");

    let table = document.createElement("table");
    let headers = ["ID", "Name", "Email"];
    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");

    headers.forEach(header => {
        let th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    let tbody = document.createElement("tbody");

    data.forEach(item => {
        let row = document.createElement("tr");
        Object.values(item).forEach(value => {
            let td = document.createElement("td");
            td.textContent = value;
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    container.innerHTML = "";
    container.appendChild(table);
}
