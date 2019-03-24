// Courtesy of: https://www.youtube.com/watch?v=X-AhceP6jpA&t=66s

class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
    }

    trigger(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(cb => cb.apply(null, args));
        }
    }
}

const ee = new EventEmitter();
ee.on('change', (num) => {
    console.log(`change event ${num} triggered!`);
});
ee.on('change', (num) => {
    console.log(`change event ${num + 1} triggered!`);
});

ee.trigger('change', 1);
// change event 1 triggered!
// change event 2 triggered!
