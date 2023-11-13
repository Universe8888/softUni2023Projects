function deserializeString(inputLines) {
    const letterPositions = {};
  
    inputLines.forEach(line => {
      if (line !== 'end') {
        const [letter, indices] = line.split(':');
        letterPositions[letter] = (letterPositions[letter] || []).concat(indices.split('/').map(Number));
      }
    });
  
    const resultLength = Math.max(...Object.values(letterPositions).flat()) + 1;
  
    return Array.from({ length: resultLength }, (_, index) =>
      Object.keys(letterPositions).find(letter => letterPositions[letter].includes(index)) || ''
    ).join('');
  }
  
  const input = [
    'a:0/2/4/6',
    'b:1/3/5',
    'end'
  ];
  
  console.log(deserializeString(input));


//   function deserializeString(inputLines) {
//     const positions = {};
//     inputLines.forEach(line => line !== 'end' && line.split(':')[1].split('/').forEach(index => positions[index] = line[0]));
//     return Array.from({ length: Math.max(...Object.keys(positions).map(Number)) + 1 }, (_, i) => positions[i] || '').join('');
//   }
  
//   const input = [
//     'a:0/2/4/6',
//     'b:1/3/5',
//     'end'
//   ];
  
//   console.log(deserializeString(input));


  //ninja 100/100