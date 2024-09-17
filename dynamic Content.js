document.addEventListener('DOMContentLoaded', function () {
    const itemNameInput = document.getElementById('item-name');
    const itemQuantityInput = document.getElementById('item-quantity');
    const addItemButton = document.getElementById('add-item');
    const shoppingList = document.getElementById('shopping-list');


    function addItem() {
        const itemName = itemNameInput.value.trim();
        const itemQuantity = itemQuantityInput.value.trim();

        if (itemName === '' || itemQuantity === '') {
            alert('Please enter both item name and quantity.');
            return;
        }

        const listItem = document.createElement('li');
        listItem.className = 'shopping-list-item';

        listItem.innerHTML = `
            <span>${itemName} - ${itemQuantity}</span>
            <button class="edit-item">Edit</button>
            <button class="remove-item">Remove</button>
        `;


        shoppingList.appendChild(listItem);

        itemNameInput.value = '';
        itemQuantityInput.value = '';
    }


    function editItem(event) {
        if (event.target.classList.contains('edit-item')) {
            const listItem = event.target.parentElement;
            const itemText = listItem.querySelector('span').textContent;
            const [itemName, itemQuantity] = itemText.split(' - ');

            const newItemName = prompt('Enter new item name:', itemName);
            const newItemQuantity = prompt('Enter new item quantity:', itemQuantity);

            if (newItemName && newItemQuantity) {
                listItem.querySelector('span').textContent = `${newItemName} - ${newItemQuantity}`;
            }
        }
    }

    function removeItem(event) {
        if (event.target.classList.contains('remove-item')) {
            const listItem = event.target.parentElement;
            shoppingList.removeChild(listItem);
        }
    }


    addItemButton.addEventListener('click', addItem);
    shoppingList.addEventListener('click', editItem);
    shoppingList.addEventListener('click', removeItem);
});
