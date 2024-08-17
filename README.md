# Frontend - Product Management

## Overview

This is the frontend part of the Product Management project, built using React.js. The project includes features for searching, filtering, categorizing, sorting products, and user authentication. The application is fully responsive and designed with a mobile-first approach.

## Features

- **Search**: Allows users to search for products based on the product name.
- **Categorization**: Filter products by Brand Name, Category Name, and Price Range.
- **Sorting**: Sort products by Price (Low to High, High to Low) and Date Added (Newest first).
- **Pagination**: Displays products in pages with navigation buttons (Next, Previous).
- **Authentication**: Google and Email/Password authentication using Firebase.

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm (v7 or later)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/im-sanny/producthub-client
    cd frontend-repo
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```plaintext
    REACT_APP_API_URL=http://localhost:9000/product
    REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
    REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
    ```

4. Start the development server:
    ```bash
    npm start
    ```

5. Open your browser and go to `http://localhost:5173`.

## Usage

- Navigate to the homepage to view and search products.
- Use the filters and sorting options to refine the product list.
- Sign in using Google or Email/Password to access additional features.

## Contribution

1. Fork the repository and clone your fork.
2. Create a new branch for your changes.
3. Make changes and commit them with descriptive messages.
4. Push your changes and open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact [raselparvezsanny@gmail](mailto:raselparvezsanny@gmail).
