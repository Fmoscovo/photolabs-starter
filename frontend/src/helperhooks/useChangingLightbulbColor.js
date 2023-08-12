import { useState, useEffect } from 'react';

export const useChangingLightbulbColor = (intervalTime = 600) => {
    // Colors for the lightbulb transitioning from black, through grays, to yellow, and back
    const colors = [
        "#000000", // Black
        "#1A1A1A", // Dark Gray
        "#333333", // Gray
        "#4D4D4D", // Light Gray
        "#666666",
        "#808080",
        "#999999",
        "#B3B3B3", // Lighter Gray
        "#CCCC66", // Pale Yellow
        "#E6E600", // Bright Yellow
        "#FFFF00", // Full Yellow
        "#E6E600",
        "#CCCC66",
        "#B3B3B3",
        "#999999",
        "#808080",
        "#666666",
        "#4D4D4D",
        "#333333",
        "#1A1A1A"
    ];

    const [currentLightbulbColor, setCurrentLightbulbColor] = useState(colors[0]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % colors.length;
            setCurrentLightbulbColor(colors[index]);
        }, intervalTime);

        // Cleanup: clear the interval when the component is unmounted
        return () => clearInterval(interval);
    }, [intervalTime]);

    return currentLightbulbColor;
};
