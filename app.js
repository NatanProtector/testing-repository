const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static(path.join(__dirname, 'admin/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname + '/admin/build/index.html'));
});

app.listen(port, () => {
  console.log(`server listening at port: ${port}`);
});
