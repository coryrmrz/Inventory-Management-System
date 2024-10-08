//Task 1: Create an Inventory Array of Product Objects

const inventory = [
    {name: 'Blanket', price: 12.99, quantity: 37, lowStockLevel: 5}, //Array information for a blanket
    {name: 'Pillow', price: 10.99, quantity: 83, lowStockLevel: 5}, //Array info for a pillow
    {name: 'Mattress', price: 1499.99, quantity: 28, lowStockLevel: 5}, // Array info for a mattress
    {name: 'Pillow Case', price: 5.99, quantity: 66, lowStockLevel: 6}, //Array info for a pillow case
    {name: 'Sheet', price: 8.99, quantity: 29, lowStockLevel: 5}, // Array info for a sheet
];

//Task 2: Create a Function to Display product Details

function displayProductDetails(product) { //function to display product details
    const stockStatus = product.quantity <= product.lowStockLevel ? 'Low Stock' : 'In Stock'; // if/then statement for correct display of stock status
    console.log(`Product: ${product.name}, Price: $${product.price}, Quantity: ${product.quantity}, Stock Status: ${stockStatus}`); //display of name, price, quantity, and stock status of a product
};

//Task 3: Create a Function to Update Product Stock After Sales

function updateStock(product, unitsSold) {
    product.quantity -= unitsSold; // equation to reflect current quantity in stock after sold
    let stockStatus;
    if (product.quantity <= 0) { 
        console.log(`${product.name} - Out of Stock`); // if current quantity is less than 0, then message diplays out of stock
    } else if (product.quantity <= product.lowStockLevel) {
        console.log(`${product.name} - Low Stock`); // if current quantity is less than low stock level, then message displays low stock
    } else {
        console.log(`${product.name} - In Stock`); // if current quantity is not the above, then message displays in stock
    }
};

//Task 4: Create a Function to Check Low Stock Products

function checkLowStock(inventory) {
    inventory.forEach(product => {
        if (product.quantity <= product.lowStockLevel) { //function if quantity is less than low stock level
            console.log(`${product.name} - Low Stock`) //message diplays warning of low stock
        }
    });
};

//Task 5: Create a Function to Calculate Total Inventory Value

function calculateInventoryValue(inventory) { //create function to get total value of products in inventory
    const totalValue = inventory.reduce((total, product) => total + (product.price * product.quantity), 0); //use array method .reduce to calulate total value by multiplying price by quantity
    return totalValue;
}
console.log(`Total Value: $${calculateInventoryValue(inventory)}`); //output total value of inventory

//Task 6: Create a Function to Process a Sale

function processSale(productName, unitsSold) { 
    const product = inventory.find(object => object.name === productName); //function to find object (product) name in the array
    if (product) {
        updateStock(product, unitsSold); //if product found, then call update stock function to reduce the quantity
    } else {
        console.log(`Error: ${productName} - Not in Inventory`); //if product not found, then error message displays
    };
};