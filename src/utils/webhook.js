const axios = require('axios');
require('dotenv').config();

const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

const sendReportToDiscord = async (reportData) => {
    try {
        await axios.post(webhookUrl, {
            content: `New report submitted:\n\n${JSON.stringify(reportData, null, 2)}`,
        });
    } catch (error) {
        console.error('Error sending report to Discord:', error);
    }
};

module.exports = sendReportToDiscord;