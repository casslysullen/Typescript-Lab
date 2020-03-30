// interface Mountain {
//     name: string;
//     height: number;
// }
var inventory = [
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
];
function calcInventoryValue(x) {
    var total = 0;
    for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
        var i = x_1[_i];
        total = i.price * i.quantity + total;
    }
    console.log(total);
}
calcInventoryValue(inventory);
