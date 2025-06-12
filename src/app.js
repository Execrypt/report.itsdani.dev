const express = require('express');
const bodyParser = require('body-parser');
const webhook = require('./utils/webhook');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/report', async (req, res) => {
    const { accountDetails, photo, category } = req.body;

    try {
        await webhook.sendReport({ accountDetails, photo, category });
        res.status(200).send('Report submitted successfully.');
    } catch (error) {
        console.error('Error sending report:', error);
        res.status(500).send('Failed to submit report.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});