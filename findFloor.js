function findFloor(arr, num) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let floorVal = Math.floor(num)

    while(leftIdx <= rightIdx) {
        midIdx = Math.floor((leftIdx + rightIdx) / 2);
        midVal = arr[midIdx];

        if(midVal < floorVal - 1) {
            leftIdx = midIdx + 1;
        }
        else if(midVal > floorVal - 1) {
            rightIdx = midIdx - 1;
        }
        else {
            return midVal;
        }
    }
    return -1;
}
