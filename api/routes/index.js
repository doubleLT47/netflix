
const auth = require('./auth.route');
const user = require('./user.route');
const list = require('./list.route');
const movie = require('./movie.route');

const route = (app) => {
    app.use('/api/auth', auth);
    app.use('/api/users', user);
    app.use('/api/movies', movie);
    app.use('/api/list', list);
}


module.exports = route;