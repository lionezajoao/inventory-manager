const inventory = [];

function addItem() {
    const itemName = document.getElementById('itemName').value.trim();
    const itemQuantity = parseInt(document.getElementById('itemQuantity').value, 10);

    if (itemName && itemQuantity > 0) {
        inventory.push({ name: itemName, quantity: itemQuantity });
        updateInventoryList();
        document.getElementById('itemName').value = '';
        document.getElementById('itemQuantity').value = '';
    } else {
        alert('Please enter valid item details.');
    }
}

function removeItem(index) {
    inventory.splice(index, 1);
    updateInventoryList();
}

function updateInventoryList() {
    const inventoryTable = document.getElementById('inventoryTable');
    inventoryTable.innerHTML = '';

    inventory.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>
                <button onclick="removeItem(${index})">Remove</button>
            </td>
        `;
        inventoryTable.appendChild(row);
    });
}