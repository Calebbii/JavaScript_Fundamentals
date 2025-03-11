const items = [
    { name: "item 1", price: 900},
    { name: "item 2", price: 1200},
    { name: "item 3", price: 700},
    { name: "item 4", price: 600},
    { name: "item 5", price: 400},
    { name: "item 6", price: 3000}
]

console.log(items);

// Filter method = filter elments based on a certain condition

const filterItems = items.filter((x) => {
    return x.price <= 1000
})

console.log(filterItems)

// Map method

const itemNames = items.map((item) => {
    return item.price
})

console.log(itemNames);

// find method

const foundItems =  items.find((item) => {
    return item.price === 1200
})

console.log(foundItems)