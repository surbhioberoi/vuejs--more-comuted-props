var app = new Vue({
    el: '#app',
    data: {
        first: '',
        last: ''
    },
    computed: {
        fullname: {
            //getter function
            get: function() {
                return this.first + " " + this.last
            },
            //setter function
            set: function(value) {
                var name = value.split(' ');
                this.first = name[0];
                this.last = name[name.length - 1];
            }
        }
    }
})
