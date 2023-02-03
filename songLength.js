function musicRuntime(busDuration, songDurations) {
    if (songDurations.length == 0){
        return [-1, -1];
    }
    let isMatch = false;
    let result = [0, 0];
    for (let i = 0; i < songDurations.length; i++){
        for (let j = i; j < songDurations.length; j++){
            let temp = [i, j];
            if(songDurations[i] + songDurations[j] == busDuration - 30){
                if((songDurations[i] >= songDurations[result[0]] && songDurations[i] >= songDurations[result[1]]) || 
                (songDurations[j] >= songDurations[result[0]] && songDurations[j] >= songDurations[result[1]])) {
                    isMatch = true;
                    result =  temp;
                }
            }
        }
    }
    if (isMatch){
        return result;
    } else {
        return [-1, -1]
    }
}

function musicRuntime(busDuration, songDurations) {
    let pairMap = {};
    let result;
    let highestKey = 0;
    for (let i = 0; i < songDurations.length; i++){
        if (songDurations[i] < busDuration - 30){
            pairMap[songDurations[i]] = [busDuration - 30 - songDurations[i], i];
        }
    }
    for (key in pairMap){
        if (songDurations.indexOf(pairMap[key][0]) > -1){
            if (parseInt(key) > highestKey){
                highestKey = parseInt(key);
                result = [pairMap[key][1], songDurations.indexOf(pairMap[key][0])];
            }
        }
    }
    // console.log(pairMap)
    // console.log(resultList)
    if (result === undefined){
        return [-1, -1];
    } else {
        return result;
    }
}