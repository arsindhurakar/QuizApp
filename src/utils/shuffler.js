// export function shuffle(data) {
//   let length = data.length;
//   while (length--) {
//     const randomIndex = Math.floor(Math.random() * (length + 1));
//     [data[length], data[randomIndex]] = [data[randomIndex], data[length]];
//   }
//   return data;
// }

// export function shuffle(a) {
//   for (let i = a.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [a[i], a[j]] = [a[j], a[i]];
//   }
//   return a;
// }

export function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * i); // no +1 here!
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
