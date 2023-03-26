class EventEmit{
    constructor() {
        this._events = {}
    }
    on(name, callback) {
        const callbacks = this._events[name] || []
        callbacks.push(callback)
        this._events[name] = callbacks
    }
    emit(name, ...args) {
        const callbacks = this._events[name] || []
        console.log(callbacks)
        callbacks.forEach(cb => {
            cb && cb()
        });
    }
    off(name, cb) {
        const callbacks = this._events[name] || []
        const newCallbacks = callbacks.filter((fn) => {
            return !(fn === cb) && fn.initCb !== cb
        })
        this._events[name] = newCallbacks
    }
    once(name, cb) {
        const one = (...args) => {
            cb(...args)
            this.off(name, one)
        }
        one.initCb = one
        this.on(name, one)
    }
}

const event1 = new EventEmit()

// const cb1 = () => {
//     console.log('cb1')
// }

// event1.on('new', () => {
//     console.log('new1')
// })

// event1.on('new', () => {
//     console.log('new2')
// })

// event1.on('new', cb1)

// event1.off('new', cb1)

// event1.emit('new')

event1.once('new', () => {
    console.log('new-once')
})

event1.emit('new')