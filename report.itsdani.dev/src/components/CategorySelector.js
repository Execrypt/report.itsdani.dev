import React from 'react';

const CategorySelector = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
        <div className="category-selector">
            <label htmlFor="category">Select Reporting Category:</label>
            <select
                id="category"
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
            >
                <option value="">--Please choose an option--</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategorySelector;