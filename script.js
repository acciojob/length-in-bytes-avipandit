const byteSize = (str) => {
  const encoder = new TextEncoder();
  const encodedString = encoder.encode(str);
  return encodedString.byteLength;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
