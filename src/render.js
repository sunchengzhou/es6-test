function render(tem, context) {
    return tem.replace(/{{(.*?)}}/g, (match, key) => context[key.trim()])
}

var template = '{{name}}---{{age}}'
var context = {
    name: 11,
    age: 10
}

var a = render(template, context)
console.log(a)