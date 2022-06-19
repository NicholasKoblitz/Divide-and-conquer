function findRotatedIndex(arr, num) {

    let firstIdx = 0;
    let secondIdx = arr.length - 1;

    while(firstIdx <= secondIdx) {
        let midIdx = Math.floor((firstIdx + secondIdx) / 2);
        let midVal = arr[midIdx];
        
        if(midVal < num) {
            firstIdx = midIdx + 1;
        }
        else if(midVal > num) {
            secondIdx = midIdx - 1;
        }
        else {
            return midIdx;
        }
    }

    return -1;

}