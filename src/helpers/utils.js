// src/helpers/utils.js
export const paginateArray = (array, pageSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += pageSize) {
      result.push(array.slice(i, i + pageSize));
    }
    return result;
  };