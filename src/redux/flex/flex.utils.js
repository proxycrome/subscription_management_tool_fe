export const addItemToArray = (subarray, arrayItemToAdd) => {
  return [
    ...subarray.slice(0, arrayItemToAdd.index),
    arrayItemToAdd.item,
    ...subarray.slice(arrayItemToAdd.index),
  ];
};
