function findRotationCount(arr) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let minVal = Math.min(...arr)

    while(leftIdx < rightIdx) {
        midIdx = Math.floor((leftIdx + rightIdx) / 2);
        let midVal = arr[midIdx];

        if(midVal < minVal) {
            leftIdx = midIdx + 1;
        }
        else if(midVal > minVal) {
            rightIdx = midIdx - 1;
        }
        else {
            return midIdx
        }
    }

    return arr[arr.length - 1]
}