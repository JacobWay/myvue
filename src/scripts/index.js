// Declarative rendering
var app1 = new Vue({
  el: '#app1',
  data: {
    message: 'Hello, world!'
  }
});

var app2 = new Vue({
  el: '#app2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

// Conditionals and Loops
var app3 = new Vue({
  el: '#app3',
  data: {
    isSeen: true
  }
});

var app4 = new Vue({
  el: '#app4',
  data: {
    todos: [
      'item1', 'item2', 'item3'
    ]
  }
});

// Handling user input
var app5 = new Vue({
  el: '#app5',
  data: {
    message: 'abc'
  },
  methods: {
    reverseMessage: function () {
      let message = this.message;
      let list = message.split('');
      let newList = list.reverse();
      let result = newList.join('');
      this.message = result;
    }
  }
});

var app6= new Vue({
  el: '#app6',
  data: {
    message: 'abc'
  },
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
  el: '#app7',
  data: {
    todos: [
      {
        text: 'item1',
      },
      {
        text: 'item2',
        message: ''
      }
    ],
    message: '***'
  },
  created: () => {
  }
});

var app8 = new Vue({
  el: '#app8',
  data: {
    rawHtml: '<span style=color:blue>Dreams keep life young.</span>',
    isButtonDisabled: false,
    clickMessage: 'Click Me',
    message: 'An original message',
    tip: 'This is a tip.',
    firstName: 'Jacob',
    lastName: 'Way',
  },
  computed: {
    reverseMessage: function() {
      return this.message.split('').reverse().join('');
    },
    fullName: {
      // getter
      get: function() {
        return this.firstName + ' ' + this.lastName;
      },
      set: function(newValue) {
        let names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1]
      }
    }
  },
  methods: {
    clickHandler: function () {
      this.clickMessage = 'It is clicked';
    },
  },
  watch: {
    message: function() {
      this.tip = 'Message changed.';
    },
  }
});

var app9 = new Vue({
  el: '#app9',
  data: {
    answer: 'I cannot give you an answer until you ask a question!',
    question: ''
  },
  methods: {
  },
  watch: {
    question: _.debounce(
      function() {
        let apiUrl = 'https://yesno.wtf/api';
        let self = this;
        let {question, answer} = self;
        if(!(self.question.indexOf('?') > -1)) {
          self.answer = 'Questions usually contain a question mark. ;-)';
          return;
        }
        // Gets the question, then thinking....
        self.answer = 'Thinking...';

        axios.get(apiUrl)
          .then(function(response){
            self.answer = response.data.answer;
          })
          .catch(function(error){
            self.answer = 'Error! Could not reach the API. ' + error;
          });
      },
      500
    )
  }
});

let app10 = new Vue({
  el: '#app10',
  data: {
    question: '',
    answer: 'This is the answer area.'
  },
  watch: {
    question: _.debounce(
      function(){
        let self = this;
        let apiUrl = 'https://yesno.wtf/api';
        if(!(this.question.indexOf('?') > -1)){
          this.answer = 'Question should be ended with a question mark, ;).';
          return;
        }

        this.answer = 'Getting the answer...';
        axios.get(apiUrl)
          .then(function(response){
            self.answer = _.capitalize(response.data.answer);
          })
          .catch(function(error){
            self.answer = 'Error! Could not reach the API. ' + error;
          })
      },
      500
    )
  }
});

let app11 = new Vue({
  el: '#app11',
  data: {
    isActive: true,
    hasError: true
  },
  computed: {
    classObject: function() {
      let {isActive, hasError} = this;
      let obj = {
        active: isActive,
        has_error: hasError ? true : false
      }
      return obj;
    }
  }
});

let app12 = new Vue({
  el: '#app12',
  data: {
    active: true,
    error: true
  },
  computed: {
    isActive: function() {
      let {active} = this;
      let isActive = active ? 'active' : false;
      return isActive;
    },
    hasError: function() {
      let {error} = this;
      let hasError = error ? 'has_error' : false;
      return hasError;
    }
  }
});

Vue.component('component_1', {
  template: '<span class="active">component_1</span>'
});

let app13 = new Vue({
  el: '#app13',
  data: {
    hasError: 'has_error'
  }
});

let app14 = new Vue({
  el: '#app14',
  data: {
  },
  computed: {
    styleObject: function() {
      let obj = {
        color: 'green',
        fontSize: '30px'
      };

      return obj;
    },
    display: function() {
      let obj = {
        display: 'block',
        width: '100px',
        height: '100px',
        background: 'lightblue'
      };

      return obj;
    }
  }
});

let app15 = new Vue({
  el: '#app15',
  data: {
    isDisplay: true,
    loginType: 'user_name'
  },
  methods: {
    toggleLoginType: function() {
      let {loginType} = this;
      this.loginType = loginType === 'user_name' ? 'email' : 'user_name';
      //this.clearForm();
    },
    clearForm: function() {
      console.log('??? el: ', this.$el);
      this.$el.querySelector('input').value = null;
    }
  }
});

let app16 = new Vue({
  el: '#app16',
  data: {
    items: [
      'debounce', 'bounce', 'defer'
    ],
    itemsObj: {
      firstName: 'Jacob',
      lastName: 'Way'
    },
    numbers: [
      0, 1, 2, 3
    ],
  },
  computed: {
    evenNumbers: function(){
      return this.numbers.filter(function(n) {
        return n % 2 === 0;
      });
    }
  },
  methods: {
    oddNumbers: function(numbers) {
      return numbers.filter(function(n) {
        return n % 2 === 1;
      });
    }
  },
  created: function() {
    this.items[3] = '??';
  },
});

Vue.component('component_17', {
  props: ['item'],
  template: '<div>{{item}}</div>',
});

let app17 = new Vue({
  el: '#app17',
  data: {
    todos: [
    ],
    items: [
      1, 2
    ]
  },
});

let app18 = new Vue({
  el: '#app18',
  data: {
    todo_input: '',
    todos: [
      {
        text: 'todo 1'
      },
      {
        text: 'todo 2'
      }
    ]
  },
  methods: {
    addTodo: function() {
      let {todos, todo_input} = this;
      let newTodo = {};
      newTodo.text = todo_input;
      todos.push(newTodo);
    },
    clearATodo: function(index) {
      let {todos} = this;
      todos.splice(index, 1);
    }
  }
});

Vue.component("component_19", {
  props: ['title'],
  template: `
    <li>
      {{title}}
      <button @click="$emit('remove')">X</button>
    </li>
  `,
});

let app19 = new Vue({
  el: '#app19',
  data: {
    newTodo: '',
    placeholder: 'Add a todo',
    todos: [
      {
        id: 1,
        title: 'todo 1'
      },
    ],
    todoId: 2
  },
  methods: {
    addTodo: function() {
      let {todos, newTodo, todoId} = this;
      let todoObj = {};
      todoObj.title = newTodo;
      todoObj.id = todoId++;
      todos.push(todoObj);
    },
    remove: function(index) {
      let {todos} = this;
      todos.splice(index, 1);
    }
  }
});

let app20 = new Vue({
  el: '#app20',
  data: {
    counter: 0,
  },
  methods: {
    addCounter: function() {
      let {counter} = this;
      counter += 1;
      this.counter = counter;
    },
    warn: function(message, event) {
      if(event) {
        event.preventDefault();
        console.log(message);
      }
    },
  }
})

let app21 = new Vue({
  el: '#app21',
  data: {
    message: 'Try it\nA new line',
    checked: true,
    input_value: 'something',
    checked_names: [],
    checked_radios: '',
    selectedValue: '',
    multiple_select: [],
    selected: []
  },

  methods: {
    clickSelect: function(event) {
      console.log('??? selected: ', this.selected);
    }
  },

});

let app22 = new Vue({
  el: '#app22',
  data: {
    selected: []
  },
  methods: {
    clickSelect: function(event) {
      console.log('??? selected: ', this.selected);
    }
  },

});

let app23 = new Vue({
  el: '#app23',
  data: {
    items: [
      {
        text: 'a',
      },
      {
        text: 'b',
      },
    ],
    selected: '',
  }
});

let app24 = new Vue({
  el: '#app24',
  data: {
    checkbox: '',
    radio: '',
    selected: '',
    option: {
      text: 'A',
      value: 'a'
    },
    msg: '',
    age: null
  },
  methods: {
    eventHandler: function() {
    }
  }
});

Vue.component('component-25', {
  template: `<div>This is component-25</div>`
});

let component_25_1 = {
  template: `<div>This is local component</div>`
};

let component_25_2 = {
  template: `<tr><td>eventual</td></tr>`
};

let component_25_3 = {
  data: function() {
    return {
      counter: 0
    };
  },
  template: `
    <button @click="addOne">{{counter}}</button>
  `,
  computed: {
  },
  methods: {
    addOne: function() {
      return this.counter += 1;
    }
  }
}

let app25 = new Vue({
  el: '#app25',
  data: {
    counter: 0
  },
  components: {
    'component_25_1': component_25_1,
    'component_25_2': component_25_2,
    'component_25_3': component_25_3
  }
});
