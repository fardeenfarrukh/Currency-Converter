require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios')
const connection = require('./database');
const app = express();

const EXCHANGE_RATE_API_KEY = process.env.EXCHANGE_RATE_API_KEY;

app.use(cors());
app.use(express.json());

app.get('/api/exchange-rate', async (req, res) => {
    const { baseCurrency } = req.query;

    try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${EXCHANGE_RATE_API_KEY}/latest/${baseCurrency}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching exchange rates' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});