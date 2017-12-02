let app = new Vue({
  el: '#app',
  data: {
    input: '# Hello',
  },
  computed: {
    result: function() {
        return  marked(this.input, {sanitize: true});
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.input = e.target.value;
    }, 300)
  }
});
