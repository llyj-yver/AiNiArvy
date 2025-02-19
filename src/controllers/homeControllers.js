exports.getHomePage = (req, res) => {
    res.render('home', { title: 'Home Page', message: 'Welcome to the Home Page!' });
};