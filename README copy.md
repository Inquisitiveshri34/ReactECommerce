# E-Commerce React App Implementation Assignment

## Overview

In this assignment, you will develop a fully functional E-Commerce React App. The application will allow users to browse products, manage their shopping cart, and enjoy a seamless shopping experience. You will implement various features to enhance user experience and functionality.

### Base URL
https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products

## Requirements

You are required to create a React project that:
1. Fetches and displays a list of products from the provided API using Axios.
2. Handles any errors during API requests or invalid user actions, displaying appropriate error messages to the user.
3. Manages the application's state using the `useState` hook and ensures states are updated as needed.


## Features to Implement

### 1. Product Display
- **Product List:** 
  - Fetch a list of products from an external API and display them in a user-friendly format.
  - Implement pagination to allow users to navigate through multiple pages of products.
  
- **Product Item Details:** 
  - Each product should display:
    - An image of the product.
    - The product title.
    - The brand of the product.
    - The category of the product.
    - The price of the product.

### 2. Cart Functionality
- **Add to Cart:**
  - Implement functionality that allows users to add products to their cart by clicking an "Add to Cart" button.
  - If a product is already in the cart, increase its quantity instead of adding a new entry.

- **Remove from Cart:**
  - Allow users to remove items from their cart by providing a "Remove" button next to each item.

- **Cart Summary:**
  - Display a summary of items in the cart, including:
    - Product title
    - Brand
    - Price
    - Quantity
    - A button to remove the item from the cart.

### 3. Filtering
- **Category Filter:**
  - Implement a dropdown menu that allows users to filter products by category (Men, Women, Kids, Home Decor).
  - Ensure that the product list updates based on the selected category.

### 4. Pagination
- **Page Navigation:**
  - Implement "Previous" and "Next" buttons for pagination.
  - Disable the "Previous" button on the first page and the "Next" button on the last page.

### 5. Notifications
- **User Feedback:**
  - Implement notifications that inform users when items are added to or removed from the cart.
  - Ensure notifications are displayed prominently and disappear after a few seconds.

### 6. Responsive Navigation
- **Navbar:**
  - Create a navigation bar that allows users to switch between the product listing view and the cart view.
  - The button in the navbar should change based on the current view, indicating the action that will be taken (e.g., "Go to Cart" or "Go to Home").

### 7. Loading and Error States
- **Loading Indicator:**
  - Display a loading message while products are being fetched from the API.

- **Error Handling:**
  - Show an error message if there is a failure in fetching products from the API.

### 8. State Management
- **React Hooks:**
  - Use React's `useState` and `useEffect` hooks for managing state and side effects, such as fetching products and managing the cart.

### 9. Dynamic API Fetching
- **Axios Integration:**
  - Use Axios to fetch product data dynamically from an external API based on the current page and selected category.

### 10. Conditional Rendering
- **View Switching:**
  - Render different components based on the current view (home or cart).
  - Conditionally render loading indicators, error messages, and product lists based on the state of the application.






## Project Overview

The project will be composed of multiple React components that interact with one another to provide a complete user experience for an e-commerce store. Key components include:

- **Product List:** Display products with filtering and sorting options.
- **Cart:** Allow users to manage their cart.
- **Pagination:** Allow users to navigate through multiple pages of products.
- **Notification System:** Notify users when items are added or removed from the cart.

## Features

### Core Features
- **Product Filtering:** Filter products by category and brand.
- **Sorting:** Sort products by price (ascending/descending).
- **Pagination:** Navigate through different pages of products.
- **Cart Functionality:** Add products to the cart, view cart items, and remove items from the cart.
- **Notification System:** Show notifications when products are added/removed from the cart.

### Extra Features 
- **Error Handling:** Display appropriate error messages when there is an issue fetching data.
- **Loading Indicator:** Show a loading message while data is being fetched from the server.



## Instructions



### 2. Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 3. Start the Application

Once the dependencies are installed, start the development server by running:

```bash
npm start
```

This will launch the application in your browser at `http://localhost:3000`. You can now start working on the project!

---

## App Structure

The project is divided into several components to modularize the functionality. Each component is responsible for a specific part of the application.

### Directory Structure

```
src/
  ├── components/
  │   ├── Cart.js                # Cart component to display and manage cart items.
  │   ├── Filter.js              # Filter component to filter products by category, brand, and price.
  │   ├── HomeView.js            # Main home page that displays products and applies filters.
  │   ├── LoadingError.js        # Handles displaying loading/error states.
  │   ├── Navbar.js              # Navigation component to switch between Home and Cart views.
  │   ├── Notification.js        # Displays notifications when actions are performed (e.g., add/remove from cart).
  │   ├── NotificationHandler.js # Manages notifications.
  │   ├── Pagination.js          # Pagination component to navigate between product pages.
  │   ├── ProductItem.js         # Displays individual product details.
  │   └── ProductList.js         # Displays the list of products.
  ├── App.js                     # Main app component, combining all the other components.
  └── index.js                   # Entry point of the React app.
```

---

## Functional Requirements

### 1. **Navbar Component**

- **Objective:** Display a button to toggle between the "Home" and "Cart" views.
- **Functionality:**
  - When clicked, the button toggles between showing the home page (product listing) and the cart.
  - The current view ("Home" or "Cart") should be passed as a prop to update the button text.

### 2. **Product List and Item Components**

- **Objective:** Display a list of products with relevant details such as name, category, brand, and price.
- **Functionality:**
  - Fetch products from the API and display them in a grid/list format.
  - Each product will have a button to add it to the cart.
  - Ensure that the products can be filtered by category, brand, and sorted by price (low to high, high to low).

### 3. **Filter Component**

- **Objective:** Allow the user to filter products based on category and brand, and sort them by price.
- **Functionality:**
  - Implement dropdowns to filter products by category (e.g., "Men", "Women", "Kids", "Home Decor") and by brand (e.g., "Roadster", "Allen Solly", etc.).
  - Implement a dropdown to sort products by price in ascending or descending order.
  - Once a filter is applied, the products should update accordingly.

### 4. **Cart Component**

- **Objective:** Manage the shopping cart where users can view, add, and remove products.
- **Functionality:**
  - Users can add products to the cart.
  - The cart should display the product name, price, and quantity.
  - Users can remove items from the cart.

### 5. **Pagination Component**

- **Objective:** Allow users to navigate through different pages of products.
- **Functionality:**
  - Display the current page and the total number of pages.
  - Provide "Previous" and "Next" buttons to navigate through the pages.
  - When changing the page, the product list should update accordingly.

### 6. **Notification Component**

- **Objective:** Show a notification whenever an item is added or removed from the cart.
- **Functionality:**
  - When an item is added to the cart, display a message like: "Product X added to cart!"
  - When an item is removed from the cart, display a message like: "Product X removed from cart."
  - Notifications should disappear after a few seconds.

### 7. **Loading and Error Handling**

- **Objective:** Handle loading and error states.
- **Functionality:**
  - Show a loading message ("Loading...") when products are being fetched from the API.
  - If there is an error fetching the products (e.g., network issue), show an error message ("Failed to fetch products.").

---

## API

### Base URL:
```
https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products
```

### Query Parameters:
- `page` (optional): The page number (default: 1).
- `limit` (optional): The number of products per page (default: 5).

### Example Request:
```
GET https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=1&limit=5
```

### Example Response:
```json
{
  "data": [
    {
      "id": 1,
      "title": "Product Title",
      "image": "image_url",
      "price": 100,
      "brand": "Brand Name",
      "category": "Category Name"
    },
    ...
  ],
  "totalPages": 10
}
```

---



## Grading Criteria

Your submission will be graded based on the following criteria:
1. **Functionality:** Does the app meet all the functional requirements?
2. **Code Structure:** Is the code organized and modular? Are the components well-structured?
3. **Styling:** Is the UI clean and user-friendly? (Doesn't need to be fancy, but should be functional and clear).
4. **Use of React Features:** Are React concepts like state, props, and hooks used correctly?
5. **Error Handling:** Are loading and error states properly handled?
6. **Commit History:** Is your commit history clear and structured?

Good luck with your assignment! If you have any questions, feel free to ask.


