const express = require('express');
const sGRouter = require('./routes/api/screenGenerator');

const app = express();

// Init Middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello');
});

app.use('/api/screenGenerator', sGRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
