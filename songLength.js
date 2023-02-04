/* 
Amazon is developing a new song selection algorithm that will sync with the
duration of your bus ride.
Given a positive integer representing a duration of a bus ride and
an array of positive integers representing song times,
find a pair of two songs where the song pair ends 30 seconds before the bus ride ends.
return an array of the song indexes or [-1, -1] if no pair is found.
If there are multiple song pairs that match, return the pair that contains the
longest song. The order of the returned indexes doesn't matter.
*/

const busDuration1 = 300;

const songDurations1 = [70, 120, 200, 45, 210, 40, 60, 50];

const expected1 = [4, 6]; // 210, 60

/* Explanation:
There are multiple pairs that add up to 30 seconds before the bus duration.
The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
*/

const busDuration2 = 300;
const songDurations2 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
const expected2 = [3, 6]; // 230, 40
/* Explanation:
This is the pair with the longest song.
*/

const busDuration3 = 300;
const songDurations3 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
const expected3 = [-1, -1]; // not found.

/**
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} busDuration Seconds.
 * @param {number} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no
 *    pair is found.
 */

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