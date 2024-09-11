class Item {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

function addItem(inventory, item) {
    inventory.push(item);
    console.log("Item added:");
    printInventory(inventory);
}

function updateItem(inventory, id, newDetails) {
    const item = inventory.find(item => item.id === id);
    if (item) {
        Object.assign(item, newDetails);
        console.log("Item updated:");
        printInventory(inventory);
    } else {
        console.log(`Item with id ${id} not found.`);
    }
}

function deleteItem(inventory, id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
        console.log("Item deleted:");
        printInventory(inventory);
    } else {
        console.log(`Item with id ${id} not found.`);
    }
}

function getItem(inventory, id) {
    const item = inventory.find(item => item.id === id);
    if (item) {
        console.log("Item found:", item);
        return item;
    } else {
        console.log(`Item with id ${id} not found.`);
        return null;
    }
}

function printInventory(inventory) {
    console.log(JSON.stringify(inventory, null, 2));
}

// Example usage:

let inventory = [
    new Item(1, 'Apple', 10, 0.5),
    new Item(2, 'Banana', 20, 0.2)
];

console.log("Initial Inventory:");
printInventory(inventory);

let newItem = new Item(3, 'Orange', 15, 0.7);
addItem(inventory, newItem);

updateItem(inventory, 2, { quantity: 30 });

deleteItem(inventory, 2);

getItem(inventory, 3);
