const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');

const authCookieName = 'token';

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await DB.getUser(req.body.email)) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = await DB.createUser(req.body.email, req.body.password);

        // Set the cookie
        setAuthCookie(res, user.token);

        res.send({
            id: user._id,
        });
    }
});

// GetAuth login an existing user using provided credentials
apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.email);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            setAuthCookie(res, user.token);
            res.send({ id: user._id });
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.get('/auth/check', async (req, res) => {
    const authToken = req.cookies[authCookieName];
    const user = await DB.getUserByToken(authToken);
    if (user) {
        res.status(200).send({ msg: "Authorized" })
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
    return;
})

// DeleteAuth logout a user by deleting the token if stored in cookie
apiRouter.delete('/auth/logout', async (req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
});

// secureApiRouter verifies credentials for endpoints
const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
    const authToken = req.cookies[authCookieName];
    const user = await DB.getUserByToken(authToken);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
});

// Get Calendars
secureApiRouter.get('/calendar', async (req, res) => {
    const authToken = req.cookies[authCookieName];
    const calendars = await DB.getCalendarsByToken(authToken);
    res.send(calendars);
});

// Add Calendar
secureApiRouter.post('/calendar', async (req, res) => {
    const authToken = req.cookies[authCookieName];
    const calendar = { ...req.body, authToken: authToken };
    await DB.addCalendar(calendar);
    const calendars = await DB.getCalendarsByToken(authToken);
    res.send(calendars);
});

// Remove Calendar
secureApiRouter.delete('/calendar', async (req, res) => {
    const authToken = req.cookies[authCookieName];
    const calendar = { ...req.body, authToken: authToken };
    await DB.removeCalendar(calendar);
    const calendars = await DB.getCalendarsByToken(authToken);
    res.send(calendars);
});

// Default error handler
app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// setAuthCookie in the HTTP response
// TODO: change back before deployment
function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true, //true
        httpOnly: true,
        sameSite: 'strict',
    });
}

const httpService = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

peerProxy(httpService);