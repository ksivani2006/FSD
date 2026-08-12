const express = require('express');
const app = express();
const port = 3000;

// i) Configure template engine
// We tell Express to use EJS for rendering HTML
app.set('view engine', 'ejs');

// Middleware to parse form data (URL-encoded) from POST requests
app.use(express.urlencoded({ extended: true }));

// Route to display the form
app.get('/', (req, res) => {

    // ii) Render dynamic values
    // We pass a title and an empty error object to the view
    res.render('index', {
        title: 'User Registration',
        error: null,
        user: null
    });

});

// iii) Accept form inputs
app.post('/register', (req, res) => {

    const { username, age } = req.body;

    // iv) Perform basic validation
    let errorMessage = null;

    if (!username || username.length < 3) {
        errorMessage = 'Username must be at least 3 characters long.';
    } else if (!age || isNaN(age) || age < 18) {
        errorMessage = 'You must be at least 18 years old.';
    }

    if (errorMessage) {

        // If validation fails, re-render the form with the error message
        res.render('index', {
            title: 'Registration Failed',
            error: errorMessage,
            user: null
        });

    } else {

        // If validation passes, render the success state
        res.render('index', {
            title: 'Registration Successful',
            error: null,
            user: username
        });

    }

});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
