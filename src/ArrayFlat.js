const arr = [0, [1, [2,3, [3, 2, 1]]]]

function flat1(arr) {
    // 缺点：toString所有的都转换成为了字符串
    return arr.toString().split(',').map(Number)
}

// reduce迭代法
function flat2(arr) {
    var arr1 = []
    arr1 = arr.reduce((current, pre)  => {
        return current.concat(Array.isArray(pre) ? flat2(pre) : pre)
    }, [])
    return arr1;
}

// map迭代法
function flat3(arr) {
   return [].concat(...arr.map((item) => {
    return Array.isArray(item) ?  flat3(item) : item
   }))
}

function flat4(arr) {
    let result = []
    for(let i=0;i<arr.length;i++) {
        if(Array.isArray(arr[i])) {
            result = result.concat(flat4(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result
}

var result = flat3(arr)

console.log(result)

// 数组去重
// ...把set或者参数还原为数组
var result2 = [...new Set(result)]

console.log(result2)

// Array.from 把Set，arguments还原为Array
var result3 = Array.from(new Set(result))

console.log(result3)