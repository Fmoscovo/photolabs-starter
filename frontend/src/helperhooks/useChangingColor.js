//frontend/src/helperhooks/useChangingColor.js

import { useState, useEffect } from 'react';

export const useChangingColor = (intervalTime = 500) => {
    // Vibrant gradient of colors for the lively effect
    const colors = [
        "#0000FF", // Blue
        "#4B0082", // Indigo
        "#800080", // Purple
        "#9400D3", // Violet
        "#FF0000", // Red
        "#FF4500", // OrangeRed
        "#FF8C00", // DarkOrange
        "#FFA500", // Orange
        "#FFD700", // Gold
        "#FFFF00", // Yellow
        "#FFD700", // Gold
        "#FFA500", // Orange
        "#FF8C00", // DarkOrange
        "#FF4500", // OrangeRed
        "#FF0000", // Red
        "#9400D3", // Violet
        "#800080", // Purple
        "#4B0082", // Indigo
    ];

    const [currentColor, setCurrentColor] = useState(colors[0]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % colors.length;
            setCurrentColor(colors[index]);
        }, intervalTime);

        // Cleanup: clear the interval when the component is unmounted
        return () => clearInterval(interval);
    }, [intervalTime]);

    return currentColor;
};
