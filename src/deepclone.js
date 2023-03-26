// set map
var reg = new Set([1, 2, 3])

var reg2 = new Set([...reg])

console.log(Object.prototype.toString.call(reg))

console.log(reg2)

// function
var fun1 = () => {
    console.log('a')
}

var fun2 = new Function(`return ${fun1.toString()}`)()

fun2()

// array 
var arr1 = [1,2, 3]

var arr2 = [...arr1]

arr2.push(4)

console.log(arr1)
console.log(arr2)
