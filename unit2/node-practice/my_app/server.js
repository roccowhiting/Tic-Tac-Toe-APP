let axios = require('axios')

axios.get('http://jsonplaceholder.typicode.com/users')
.then(data => console.log('data', data));