import React, { useState } from 'react';
import CategorySelector from './CategorySelector';
import sendToWebhook from '../utils/webhook';

const ReportForm = () => {
    const [account, setAccount] = useState('');
    const [photo, setPhoto] = useState(null);
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('account', account);
        formData.append('category', category);
        if (photo) {
            formData.append('photo', photo);
        }

        try {
            await sendToWebhook(formData);
            setMessage('Report submitted successfully!');
            setAccount('');
            setPhoto(null);
            setCategory('');
        } catch (error) {
            setMessage('Error submitting report. Please try again.');
        }
    };

    return (
        <div className="report-form">
            <h2>Report an Account</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="account">Account Details:</label>
                    <input
                        type="text"
                        id="account"
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <CategorySelector onSelect={setCategory} />
                </div>
                <div>
                    <label htmlFor="photo">Upload Photo:</label>
                    <input
                        type="file"
                        id="photo"
                        accept="image/*"
                        onChange={(e) => setPhoto(e.target.files[0])}
                    />
                </div>
                <button type="submit">Submit Report</button>
            </form>
        </div>
    );
};

export default ReportForm;