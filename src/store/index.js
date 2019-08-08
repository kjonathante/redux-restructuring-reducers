function updateObject(oldObject, newValues) {
  // Encapsulate the idea of passing a new object as the first parameter
  // to Object.assign to ensure we correctly copy data instead of mutating
  return Object.assign({}, oldObject, newValues);
}

function updateItemInArray(array, itemId, updateItemCallback) {
  const updatedItems = array.map(item => {
    console.log("Inside map");
    if (item.id !== itemId) {
      // Since we only want to update one item, preserve all others as they are now
      return item;
    }

    // Use the provided callback to create an updated item
    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });

  console.log("after array.map");
  return updatedItems;
}

console.log(updateItemInArray(
    ["a", "b", "c"],
    1,
    item => { 
      console.log() 
      return "d"
    }
  )
);

const initial = {
  domainData1: {
    key1: 0
  },
  domainData2: {
    key1: 0
  },
  appState1: {
    key1: 0
  }
};

// function Reducer(state=initial, action) {

// }
