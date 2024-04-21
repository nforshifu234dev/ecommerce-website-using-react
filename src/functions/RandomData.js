export const getRandomData = (number, jsonData) => {
    if (number >= Object.keys(jsonData).length) {
      return jsonData;
    } else if (number < 0 || number >= Object.keys(jsonData).length) {
      return "Error: Number out of range";
    } else {
      const keys = Object.keys(jsonData);
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      return jsonData[randomKey];
    }
}
