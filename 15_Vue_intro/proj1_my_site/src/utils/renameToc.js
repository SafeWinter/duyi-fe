const validateArray = arr => Array.isArray(arr) && arr.length > 0;

export default function renameToc(arr, validArr = validateArray) {
  return arr.map(({
      name: label,
      anchor: id,
      children
    }) => ({
      id,
      label,
      children: validArr(children) ? [...renameToc(children)] : []
    }));
}

// Version 2: conventional recursion approach
// function renameFn(arr) {
//   const tree = [];
//   for (const item of arr) {
//     const elem = {};
//     for (const key in item) {
//       const value = item[key];
//       if (key === "name") elem.label = value;
//       if (key === "anchor") elem.id = value;
//       if (key === "children" && Array.isArray(value) && value.length > 0) {
//         elem.children = [...renameFn(value)];
//       }
//     }
//     tree.push(elem);
//   }
//   // console.log('final tree:', tree)
//   return tree;
// }