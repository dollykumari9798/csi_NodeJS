// using filesystem to perfom CRUD opration on a json file using synchronous method
const fs = require('fs');

// creating a JSON file
// File path
const filePath = 'data.json';

// Read JSON data from file
const readDataFromFile = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading data from file:', err);
    return [];
  }
};

// Write JSON data to file
const writeDataToFile = (data) => {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonData, 'utf8');
    console.log('Data written to file successfully');
  } catch (err) {
    console.error('Error writing data to file:', err);
  }
};

// Create operation - Add new item to the JSON file
const createItem = (item) => {
  const data = readDataFromFile();
  data.push(item);
  writeDataToFile(data);
};

// Read operation - Retrieve all items from the JSON file
const getAllItems = () => {
  return readDataFromFile();
};

// Update operation - Update an existing item in the JSON file
const updateItem = (itemId, updatedItem) => {
  const data = readDataFromFile();
  const itemIndex = data.findIndex((item) => item.id === itemId);
  if (itemIndex !== -1) {
    data[itemIndex] = { ...data[itemIndex], ...updatedItem };
    writeDataToFile(data);
    console.log('Item updated successfully');
  } else {
    console.log('Item not found');
  }
};

// Delete operation - Remove an item from the JSON file
const deleteItem = (itemId) => {
  const data = readDataFromFile();
  const updatedData = data.filter((item) => item.id !== itemId);
  if (updatedData.length < data.length) {
    writeDataToFile(updatedData);
    console.log('Item deleted successfully');
  } else {
    console.log('Item not found');
  }
};

// Example usage
createItem({ id: 1, name: 'Item 1' });
createItem({ id: 2, name: 'Item 2' });
console.log(getAllItems());

updateItem(1, { name: 'Updated Item 1' });
console.log(getAllItems());

deleteItem(2);
console.log(getAllItems());