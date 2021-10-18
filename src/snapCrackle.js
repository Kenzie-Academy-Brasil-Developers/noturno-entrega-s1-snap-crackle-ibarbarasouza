function snapCrackle (maxValue) {
    let meuArray = [];
    
    for (let contador = 1; contador <= maxValue; contador++){
    
        if (contador % 5 === 0 && contador % 2 === 1){
            meuArray.push('SnapCrackle')
    
        }else if (contador % 5 === 0){
            meuArray.push('Crackle')
    
        }else if (contador % 2 === 1){
            meuArray.push('Snap') 
    
        }else if (contador % 5 !== 0 && contador % 2 !== 1){
            meuArray.push(contador)
        }
    }
    return meuArray.join(', ')
    }
    console.log(snapCrackle(15))



 