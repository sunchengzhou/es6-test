var obj = new Proxy({}, {
    get: function(target, key, receiver) {
        console.log('get----')
        return Reflect.get(target, key, receiver)
    },
    set:function(target, key, value, receiver) {
        console.log('set----')
        return Reflect.set(target, key, value, receiver)
    }
})

obj.count = 1

var b = obj.count