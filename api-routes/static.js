const router = require('express').Router()
const path = require('path');
const root = path.join(__dirname, '..', 'public')

// Serve HTML file at root
router.get('/', (req, res) => {
    res.sendFile(path.join('index.html', { root }));
});

router.all('*', (req,res) => {
    res.status(404).sendFile('404.html', { root })
})

module.exports = router