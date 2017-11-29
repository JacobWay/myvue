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
    }
  },
  created: function() {
    this.items[3] = '??';
  }
});
