getData().then((data) => {
    data.forEach(element => {
        let table = document.querySelector('.priceTable');
        let tbody = table.getElementsByTagName('TBODY')[0];
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        td1.innerHTML = element.label;
        td2.innerHTML = element.descr;
        td3.innerHTML = element.vat_price;
        tbody.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
    });
})
