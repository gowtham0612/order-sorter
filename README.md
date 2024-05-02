
# order-sorter

The `order-sorter` module provides a simple and efficient way to sort arrays of numerical data in ascending or descending order. It is designed to handle common sorting tasks with an easy-to-use interface.

## Installation

Install `order-sorter` using npm:

```bash
npm install order-sorter
```

## Usage

To use `order-sorter`, import the module and call the `sortData` function with your array and the desired sort order ('asc' or 'desc'):

```javascript
const sortData = require('order-sorter');

const data = [10, 2, 33, 4, 5];
const sortedAsc = sortData(data, { order: 'asc' });
console.log('Sorted Ascending:', sortedAsc);

const sortedDesc = sortData(data, { order: 'desc' });
console.log('Sorted Descending:', sortedDesc);

const users = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 22 }
];
const sortedUsersByName = dynamicSort(users, { key: 'age',order: "desc" });
console.log(sortedUsersByName)

const mixed =  [{ name: "John", age: 30 }]
const sortedMixed = dynamicSort(mixed, {key: "age",order: "desc"});
console.log(sortedMixed);
```

## Features

- Simple API: Just two parameters to sort your data.
- Flexible: Supports both ascending and descending orders.

## Contributing

If you'd like to contribute to `order-sorter`, please fork the repository and submit a pull request.

## Issues

If you encounter any issues while using `order-sorter`, please submit them to the repository's issue tracker.

## License

`order-sorter` is available under the MIT license. Full license text is available in the LICENSE file.
