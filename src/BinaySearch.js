// 二分查找
let data = [1, 4, 6, 36, 58, 70, 100, 350, 450, 600, 700, 1000]
function BinarySearch(data, low, high, number) {
    if(low > high) {
        return -1;
    }
    let middle = parseInt((low + high) / 2);
    if(number == data[middle]) {
        return middle;
    } else if(number > data[middle]) {
        return BinarySearch(data, middle + 1, high, number);
    } else {
        return BinarySearch(data, low, middle - 1, number);
    }
}

console.log(BinarySearch(data, 0, 12, 600));