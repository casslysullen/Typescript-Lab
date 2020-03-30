//Remember tsc 'filename'.ts is how to create javascript doc
//"       " node 'filename.js is how you can run console.logs and functions in terminal
//Creating Interface Mountain

interface Mountain {
    name: string;
    height: number;
}

//Creating a variable mountain that uses the interface as a parameter for the array.
//Therefor the array takes on properties of an object with the parameters name&height

const mountains: Mountain[] = [{
    name: 'Kilimanjaro',
    height: 19341,
}, {
    name: 'Everest',
    height: 29029
}, {
    name: 'Denali',
    height: 20310
},
]

//Creating a function that uses the interface with the placeholder

function findNameOfTallestMountain(mtns: Mountain[]) {
    //Creating a value to test the forEach loop
    let tallest = 0;

    //The forEach loop individually goes through each object of an array, and pulls it
    mtns.forEach(x => {
        if (x.height > tallest) {
            tallest = x.height;
            console.log(tallest)
        }
    });
    mtns.forEach(x => {
        if (x.height === tallest) {
            console.log(x.name)
        }
    });
}

findNameOfTallestMountain(mountains);

//Creating a interface Product

interface Product {
    name: string;
    price: number;
}

//Creating an array that uses the interface as parameters name&price

const products: Product[] = [{
    name: 'Toilet Paper',
    price: 5.99
},
{
    name: 'Hand Sanitizer',
    price: 3.79
},
{
    name: 'Hand Soap',
    price: 2.79
}
]

function calcAverageProductPrice(test: Product[]) {
    let total = 0
    for (let i of test) {
        total = i.price + total;
    }
    let average = total / test.length;
    console.log(average);
}

calcAverageProductPrice(products);

//extends allows for the global interface Product, to become added to the interface InventoryItem

interface InventoryItem extends Product {
    quantity: number;
}

//Even in when you hover over name&price it will show it as parts of interface Product

const inventory: InventoryItem[] = [
    {
        name: 'motor',
        price: 10.00,
        quantity: 10
    },
    {
        name: 'sensor',
        price: 12.50,
        quantity: 4
    },
    {
        name: 'LED',
        price: 1.00,
        quantity: 20
    }
]

function calcInventoryValue(x: InventoryItem[]) {
    let total = 0
    for (let i of x) {
        total = i.price * i.quantity + total;
    }
    console.log(total);
}

calcInventoryValue(inventory);