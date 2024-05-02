const sortData = require("../lib/index");

describe("sortData", () => {
  test("sorts numeric data in ascending order", () => {
    const data = [3, 1, 4, 1, 5, 9, 2, 6, 5];
    expect(sortData(data, { order: 'asc' })).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
  });

  test("sorts numeric data in descending order", () => {
    const data = [3, 1, 4, 1, 5, 9, 2, 6, 5];
    expect(sortData(data, { order: 'desc' })).toEqual([9, 6, 5, 5, 4, 3, 2, 1, 1]);
  });

  test("sorts string data in ascending order", () => {
    const data = ["apple", "cat", "banana", "app"];
    expect(sortData(data, { order: 'asc' })).toEqual(["app", "apple", "banana", "cat"]);
  });

  test("sorts string data in descending order", () => {
    const data = ["apple", "cat", "banana", "app"];
    expect(sortData(data, { order: 'desc' })).toEqual(["cat", "banana", "apple", "app"]);
  });

  test("sorts object data by key in ascending order", () => {
    const data = [{ age: 30 }, { age: 20 }, { age: 40 }];
    expect(sortData(data, { key: 'age', order: 'asc' })).toEqual([{ age: 20 }, { age: 30 }, { age: 40 }]);
  });

  test("sorts object data by key in descending order", () => {
    const data = [{ age: 30 }, { age: 20 }, { age: 40 }];
    expect(sortData(data, { key: 'age', order: 'desc' })).toEqual([{ age: 40 }, { age: 30 }, { age: 20 }]);
  });

  test("sorts object data by string key in ascending order", () => {
    const data = [{ name: "Alice" }, { name: "Bob" }, { name: "Eve" }];
    expect(sortData(data, { key: 'name', order: 'asc' })).toEqual([{ name: "Alice" }, { name: "Bob" }, { name: "Eve" }]);
  });
});
