# Skeleton Loader Component

## 🚀 Overview
This project implements a **Skeleton Loading Component** in React, designed to enhance user experience by displaying animated placeholders while content is being loaded. The skeleton loader mimics the structure of the actual content to provide a smooth and visually appealing transition.

## 🎨 Features
- **Animated Skeleton Loaders**: Uses CSS animations for a smooth shimmer effect.
- **Customizable Shapes**: Supports different skeleton shapes such as text, images, and cards.
- **Centered Layout**: Ensures the loader is positioned at the center of the page.
- **Improved User Experience**: Prevents layout shifts and gives users visual feedback while content loads.

## 🛠️ Technologies Used
- **React** for the component structure.
- **CSS** for styling and animation effects.

## 📝 How It Works
- The **SkeletonLoader** component displays animated placeholder elements before the actual content loads.
- Different skeleton styles (text, image, card) are defined in the **SkeletonLoader.css** file.
- The loader is centrally aligned using `position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);`

## 📸 Screenshot
![Skeleton Loader](screenshot.png)

## 💡 Customization
- Modify `SkeletonLoader.css` to change the dimensions, colors, or animation effects.
- Adjust the loader's position or add new skeleton elements based on your UI needs.

## 🎯 Future Enhancements
- Add support for dynamic skeleton layouts based on API data.
- Implement a configurable duration for the skeleton loader.
- Enhance accessibility with ARIA attributes.
