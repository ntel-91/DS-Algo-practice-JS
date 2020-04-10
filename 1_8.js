function setZero(m) {
    let rowZero = {}
    let colZero = {}

    for (let i = 0; i < m.length; i++){
        for (let j = 0; j < m[i].length; j++){

            if (m[i][j] === 0){
                if(!rowZero[i]){
                    rowZero[i] = true
                }
                if(!colZero[j]){
                    colZero[j] = true
                }
            }

        }
    }

    for (let i = 0; i < m.length; i++){
        for (let j = 0; j < m[i].length; j++){

            if (rowZero[i] || colZero[j]) {
                m[i][j] = 0
            }

        }
    }

    return m;
}

var testMatrix = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ];

console.log(setZero(testMatrix))
