# Currency Converter

A simple web application that allows users to convert an amount from one currency to another using live exchange rates fetched from the **ExchangeRate-API**.

## Features

- **Currency Selection:** Choose the base and target currencies from a dropdown list.
- **Amount Input:** Input the amount to convert.
- **Live Conversion:** Converts the amount based on the latest exchange rate.
- **Axios Integration:** Uses `axios` to make API requests to fetch exchange rates.
- **Express Backend:** Simple Express.js server to handle API calls.
- **React Frontend:** Built with React to dynamically update conversion results.

## Technologies Used

### Frontend:
- **React:** For the interactive user interface.
- **Axios:** For making API requests.
- **CSS:** Simple styling for the UI.

### Backend:
- **Node.js / Express:** Backend server to handle API requests for currency conversion.

### API:
- **ExchangeRate-API**: Fetches live exchange rates from `https://v6.exchangerate-api.com/`

## Demo

Input an amount, select the base currency and the target currency, and click **Convert** to see the converted amount.

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your system.
- Git installed on your system.
- A valid API key from **ExchangeRate-API**.

### Local Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/fardeenfarrukh/Currency-Converter.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd currency-converter
   ```

3. **Install dependencies** for both backend and frontend:

   ```bash
   # Navigate to backend directory and install dependencies
   cd backend
   npm install

   # Navigate to frontend directory and install dependencies
   cd ../frontend
   npm install
   ```

4. **Set up your API key**:

   Create a `.env` file in the `backend` directory and add your ExchangeRate-API key:

   ```
   EXCHANGE_RATE_API_KEY=your_api_key_here
   ```

5. **Start the backend server**:

   ```bash
   cd ../backend
   node server.js
   ```

6. **Start the frontend app**:

   Open a new terminal, navigate to the `frontend` directory, and run:

   ```bash
   cd ../frontend
   npm start
   ```

7. **Visit the app**:

   Open your browser and go to `http://localhost:3000` to use the Currency Converter.

## API Endpoints

### Backend
- `/api/exchange-rate`: Fetches the current exchange rate for a given base currency.

## Project Structure

```
currency-converter/
│
├── backend/
│   ├── database.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── CurrencyConverter.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│
└── README.md
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
