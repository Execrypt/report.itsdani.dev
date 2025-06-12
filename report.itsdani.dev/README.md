# Reporting System

This project is a web application designed for users to report accounts, submit photos, and select reporting categories. The submissions are sent to a private Discord webhook for processing.

## Project Structure

```
report.itsdani.dev
├── public
│   ├── index.html          # Main HTML document for the reporting page
│   └── styles
│       └── main.css       # CSS styles for the website
├── src
│   ├── app.js             # Entry point of the JavaScript application
│   ├── components
│   │   ├── ReportForm.js   # Component for the reporting form
│   │   └── CategorySelector.js # Component for selecting report categories
│   ├── utils
│   │   └── webhook.js      # Function to send report data to Discord webhook
│   └── types
│       └── index.js        # Types or interfaces for report data
├── package.json            # npm configuration file
├── .env                    # Environment variables (including Discord webhook URL)
└── README.md               # Documentation for the project
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/report.itsdani.dev.git
   ```

2. Navigate to the project directory:
   ```
   cd report.itsdani.dev
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your Discord webhook URL:
   ```
   DISCORD_WEBHOOK_URL=your_webhook_url_here
   ```

5. Start the application:
   ```
   npm start
   ```

## Usage Guidelines

- Users can fill out the reporting form with the necessary details.
- Photos can be uploaded as part of the report.
- Select the appropriate category for the report from the dropdown menu.
- Upon submission, the report will be sent to the specified Discord channel via the webhook.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.