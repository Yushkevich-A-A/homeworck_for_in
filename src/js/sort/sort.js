export function orderByProps(obj, arrOrder = []) {
  const arr = [];

  for (const prop in obj) {
    if (!arrOrder.includes(prop)) {
      arr.push({ key: prop, value: obj[prop] });
    }
  }

  arr.sort((a, b) => (a.key > b.key ? 1 : -1));

  return [...arrOrder.map((item) => ({ key: item, value: obj[item] })), ...arr];
}

// реализация с for...of

// function orderByProps(obj, arrOrder) {
//     const arr = [];

//     Object.keys(obj).sort().forEach(item => {
//         if (!arrOrder.includes(item)) {
//             arrOrder.push(item);
//         }
//     })

//     for (let prop of arrOrder) {
//         arr.push({key: prop, value: arrOrder[prop]})
//     }
//     return arr;
// }
