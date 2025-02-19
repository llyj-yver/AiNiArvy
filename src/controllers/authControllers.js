exports.getLoginPage = (req, res) => {
    res.render('login', { title: 'Login' });
};

exports.getSignupPage = (req, res) => {
    res.render('signup', { title: 'Sign Up' });
};

exports.postLogin = (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        res.send(`Welcome back, ${email}!`);
    } else {
        res.send('Invalid email or password');
    }
};

exports.postSignup = (req, res) => {
    const { email, password } = req.body;
    users.push({ email, password });
    res.send(`Signup successful! Welcome, ${email}`);
};
