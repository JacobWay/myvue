'use strict'

var app = new Vue({
    el: '#myvue',
    data: {
        message: 'Hello Jacob!'
    }
})

var log = console.log.bind(null);
log('app.$el: ', app.$el)


var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})


var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [{
            text: 'Learn JavaScript'
        }, {
            text: 'Learn Vue'
        }, {
            text: 'Build something awesome'
        }]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Reverse Message'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Reverse Message'
    }
})


// Define a new component called todo-item
//Vue.component('todo-item', {
//template: '<li>This is a todo</li>'
//})


// Define a new component called todo-item
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [{
            text: "a"
        }, {
            text: "b"
        }]
    }
})

var data = {
    a: 1
}
var app8 = new Vue({
    el: '#app-8',
    data: data
})

var isTrue = app8.$data === data
log('isTrue: ', isTrue)

log(app8.$el === document.getElementById('app-8'))

app8.$watch('a', function(newVal, oldVal) {
    console.log('newVal, oldVal: ', newVal, oldVal)
})

app8.a = 2

var app9 = new Vue({
    data: {
        a: 5
    },
    created: function() {
        log('a is: ', this.a)
    }
})

var app10 = new Vue({
    el: '#app-10',
    data: {
        message: 'Hello'
    }
})


var app11 = new Vue({
    el: '#app-11',
    data: {
        message: 'Hello'
    },
    computed: {
        reverseMessage: function() {
            return this.message.split('').reverse().join(',')
        },
        now: function() {
            return Date.now()
        }
    }
})

var app12 = new Vue({
    el: '#app-12',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        //fullName: 'Foo Bar'
    },
    //watch: {
    //firstName: function (val) {
    //this.fullName = val + ' ' + this.lastName
    //},
    //lastName: function(val) {
    //this.fullName = this.firstName + ' ' + val
    //}
    //}
    computed: {
        fullName: {
            // getter
            get: function() {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function(newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }

    }
})


var app13 = new Vue({
    el: '#app-13',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
        // whenever question changes, this function will run
        question: function(newQuestion) {
            this.answer = 'Waiting for you to stop typing...'
            this.getAnswer()
        }
    },
    methods: {
        getAnswer: _.debounce(
            function() {
                if (this.question.indexOf('?') === -1) {
                    this.answer = 'Questions usually contain a question mark. ;-)'
                    return
                }
                this.answer = 'Thinking...'
                var vm = this
                axios.get('https://yesno.wtf/api')
                    .then(function(response) {
                        log('it\'s ajaxing ...')
                        vm.answer = _.capitalize(response.data.answer)
                    })
                    .catch(function(error) {
                        vm.answer = 'Error! Could not reach the API. ' + error
                    })
            },
            500
        )
    }
})

var app14 = new Vue({
    el: '#app-14',
    data: {
        isActive: true,
        error: null
    },
    computed: {
        classObject: function() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal',
            }
        }
    }
})

var app16 = new Vue({
    el: '#app-16',
    data: {
        items: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
})

var app17 = new Vue({
    el: '#app-17',
    data: {
        numbers: [1, 2, 3, 4, 6, 8]
    },
    computed: {
        evenNumbers: function() {
            return this.numbers.filter(function(n) {
                return n % 2 == 0
            })
        }
    },
    methods: {
        even: function(numbers) {
            return numbers.filter(function(n) {
                return n % 2 == 0
            })
        }
    }
})

var app18 = new Vue({
    el: '#app-18',
    data: {
        counter: 0
    }
})

var app19 = new Vue({
    el: '#app-19',
    data: {
        name: 'Vue.js'
    },
    methods: {
        greet: app19Greet,
        warn: function(event) {
            if (event) {
                console.log(event);
            }
        }
    }
})

var that = this;

function app19Greet(event) {
    console.log('Hello ' + this.name + '!')

    if (event) {
        console.log(event.target.tagName, event)
    }
}

var app20 = new Vue({
    el: '#app-20',
    data: {
        checkedNames: []
    }
})

var app21 = new Vue({
    el: '#app-21',
    data: {
        selected: ''
    }
})

var app22 = new Vue({
    el: '#app-22',
    data: {
        selected: []
    }
})

var app23 = new Vue({
    el: '#app-23',
    data: {
        selected: '',
        options: [{
            text: 'A',
            value: 'A'
        }, {
            text: 'B',
            value: 'B'
        }]
    }
})

var app24 = new Vue({
    el: '#app-24',
    data: {
        toggle: '',
        a: true
    }
})

Vue.component('my-component', {
    template: '<p>This is my-component</p>'
})

var app25 = new Vue({
    el: '#app-25'
})

var my_component_1 = {
    template: '<p>my component 1</p>'
}

var app26 = new Vue({
    el: '#app-26',
    components: {
        my_component_1: my_component_1
    }
})

Vue.component('child', {
    props: ['myMessage'],
    template: '<p>{{myMessage}}</p>'
})

var app27 = new Vue({
    el: '#app-27',
    data: {
        parentMessage: "parent message"
    }
})

Vue.component('simple_counter', {
    template: '<p>{{counter}}</p>',
    data: function() {
        return {
            counter: 10
        }
    }
})

var app28 = new Vue({
    el: '#app-28',
    data: {
        counter: 0
    }
})

Vue.component('button-increment', {
    template: '<button v-on:click="increment">{{counter}}</button>',
    data: function() {
        return {
            counter: 0
        }
    },
    methods: {
        increment: function() {
            this.counter += 1
            this.$emit("increment")
        }
    }
})

var app29 = new Vue({
    el: '#app-29',
    data: {
        total: 0
    },
    methods: {
        increeTotal: function() {
            this.total += 1;
        }
    }
})


Vue.component('currency-input', {
    template: `
        <span>
            $
            <input 
                ref="input"
                v-bind:value="value"
                v-on:input="updateValue($event.target.value)"
            >
        </span>
    `,
    props: ['value'],
    methods: {
        updateValue: function(value) {
            var formattedValue = value
                .trim()
                .slice(0, value.indexOf(".") + 3)

            if (formattedValue !== value) {
                this.$refs.input.value = formattedValue
            }

            this.$emit('input', Number(formattedValue))


        }
    }
})

var app30 = new Vue({
    el: '#app-30',
    data: {
        price: 1,
        price1: 3
    }
})


Vue.component('currency-input-1', {
    template: '\
    <div>\
      <label v-if="label">{{ label}}</label>\
      $\
      <input\
        ref="input"\
        v-bind:value="value"\
        v-on:input="updateValue($event.target.value)"\
        v-on:focus="selectAll"\
        v-on:blur="formatValue"\
      >\
    </div>\
  ',
    props: {
        value: {
            type: Number,
            default: 0
        },
        label: {
            type: String,
            default: ''
        }
    },
    mounted: function() {
        this.formatValue()
    },
    methods: {
        updateValue: function(value) {
            var result = currencyValidator.parse(value, this.value)
            console.log("??? ", value === this.value)
            console.log("??? ", value == this.value)
            if (result.warning) {
                this.$refs.input.value = result.value
            }
            this.$emit('input', result.value)
        },
        formatValue: function() {
            this.$refs.input.value = currencyValidator.format(this.value)
        },
        selectAll: function(event) {
            // Workaround for Safari bug
            // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
            setTimeout(function() {
                event.target.select()
            }, 0)
        }
    }
})

var app31 = new Vue({
    el: '#app-31',
    data: {
        price: 0,
        shipping: 0,
        handling: 0,
        discount: 0
    },
    computed: {
        total: function() {
            return ((
                this.price * 100 +
                this.shipping * 100 +
                this.handling * 100 -
                this.discount * 100
            ) / 100).toFixed(2)
        }
    }
})

var app32 = new Vue({
    el: '#app-32'
})

var app33 = new Vue({
    el: '#app-33',
    data: {
        message: '123'
    }
})

app33.message = 'new message'
isTrue = app33.$el.textContent === 'new message'
log("app33.$el.textContent === 'new message' : ", isTrue)
app33.$nextTick(function() {
    isTrue = app33.$el.textContent === 'new message'
    log("app33.$el.textContent === 'new message' : ", isTrue)
})

var app34 = new Vue({
    el: '#app-34',
    data: {
        show: true
    }
})
