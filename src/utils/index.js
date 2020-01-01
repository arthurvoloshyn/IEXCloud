export const getIndex = (items, item) => {
  const flatItems = items.flat();
  const index = flatItems.indexOf(item) + 1;

  return index;
};

export const chunkArray = (myArray, chunkSize) => {
  const results = [];

  while (myArray.length) {
    const subArray = myArray.splice(0, chunkSize);

    results.push(subArray);
  }

  return results;
};

export const getPages = list => {
  const pages = [];

  for (let i = 1; i <= list.length; i++) {
    pages.push(i);
  }

  return pages;
};

export const dragging = (droppableIndexStart, droppableIndexEnd, financials, currentPageIndex) => {
  if (droppableIndexStart !== droppableIndexEnd) {
    const list = financials[currentPageIndex].splice(droppableIndexStart, 1);
    financials[currentPageIndex].splice(droppableIndexEnd, 0, ...list);
  }

  return financials;
};
