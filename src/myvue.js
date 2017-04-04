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
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Reverse Message'
    },
    methods: {
        reverseMessage: function () {
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
        groceryList: [
            {text: "a"},
            {text: "b"}
        ]
    }
})

var data = { a: 1 }
var app8 = new Vue ({
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
    created: function () {
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
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function (newValue) {
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
        question: function (newQuestion) {
            this.answer = 'Waiting for you to stop typing...'
            this.getAnswer()
        }
    },
    methods: {
        getAnswer: _.debounce(
            function () {
                if (this.question.indexOf('?') === -1) {
                    this.answer = 'Questions usually contain a question mark. ;-)'
                    return
                }
                this.answer = 'Thinking...'
                var vm = this
                axios.get('https://yesno.wtf/api')
                    .then(function (response) {
                        log('it\'s ajaxing ...')
                        vm.answer = _.capitalize(response.data.answer)
                    })
                    .catch(function (error) {
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
        classObject: function () {
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
        evenNumbers: function(){
            return this.numbers.filter(function(n){
                return n % 2 == 0
            })
        }
    },
    methods: {
        even: function(numbers){
            return numbers.filter(function(n){
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
        warn: function(event){
            if(event){
                console.log(event);
            }
        }
    }
})

var that = this;
function app19Greet(event){
    console.log('Hello ' + this.name + '!')

    if(event){
        console.log(event.target.tagName, event)
    }
}

