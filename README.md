# Moneybox Product Categories Page

This project is a **React / Next.js application** that displays all Moneybox products in their respective categories. It allows **business users to update categories and products via Contentful** without developer involvement and ensures the content can also be consumed by other platforms (e.g., mobile apps) via Contentful’s API.

## Features

- Display all Moneybox product categories and products
- Show **images and descriptions** for each product
- **Business users can update content** without developer intervention (via Contentful)
- Fully responsive UI matching the wireframe design
- Structured and typed using TypeScript
- Easy to maintain and extend

## Prerequisites

Before running the project locally, make sure you have **Node.js** and **npm** installed.

### Installing Node.js and npm

1.  **Check if Node.js and npm are already installed**

L`node -v  npm -v`

- If these commands return a version number, you already have Node.js and npm installed.

1.  **Install Node.js and npm**

- Go to the Node.js download page
- Download the **LTS (Long Term Support)** version for your operating system.
- Run the installer and follow the prompts.

> npm is installed automatically with Node.js.

1.  **Verify installation**

`node -v  npm -v`

## Installation

1.  **Clone the repository**

`git clone https://github.com/your-username/your-repo.git  cd your-repo`

1.  **Install dependencies**

`npm install`

### Installing Dependencies Manually (Fallback)

If npm install fails or some packages are missing:

`# Install Next.js and React  npm install next react react-dom  # Install TypeScript and types  npm install typescript @types/react @types/node --save-dev  # Install Contentful SDK  npm install contentful  # Install classnames utility  npm install classnames  # Optional: install SCSS support  npm install sass`

## Environment Variables

Create a .env.local file in the root of the project with the following keys:

`CONTENTFUL_SPACE_ID=2m8usms9sttm  CONTENTFUL_ACCESS_TOKEN=oSZs6f71DWH8kmQAgs5ROkmt86ewkk6lK2NsTA7TShk  CONTENTFUL_PREVIEW_API_ACCESS_TOKEN=7NSXeOe_MxWD4coYGW1uqDdNwMqh7maaNSJegYFzPdc`

> .env.local is ignored by Git, so your keys are **not publicly visible**.

## Contentful Setup and Updating Content

### 1\. Login

- Go to Contentful and log in.
- Username: virdeemaya@gmail.com
- Password: MC-Techtest1

### 2\. Edit existing content

- Navigate to **Content** in the top menu
- Click on an existing entry
- Make required changes and select **Publish changes**
- Updates are automatically reflected in the app on refresh when running locally
- If you are adding a **Product**, after you have published, navigate to the relevant **Category** and link your product under the **Products** field
- If you are adding a **Category**, after you have published, navigate to the relevant **Page** and link your category under the **Categories** field

### 3\. Creating new content

- Navigate to **Content** in the top menu
- Click **Add Entry**
- Choose either **Category** or **Product**
- Fill out all required fields and select **Publish**
- Updates are automatically reflected in the app on refresh when running locally

> No developer intervention is required to update the content.

## Running the Project Locally

`npm run dev`

- Open [http://localhost:3000](http://localhost:3000/) in your browser to view the app.

## Build for Production

`npm run build  npm start`

## Technical Notes

- **React + Next.js** used for SPA and server-side rendering support
- **Contentful** provides CMS and API for products/categories
- **classnames** used for conditional CSS classes
- **SCSS modules** for modular, maintainable styling
- **TypeScript** ensures type safety and easier maintenance
- Components are modular and reusable (Product, Category, Carousel)

## Notes for Reviewers

- All requirements from the Moneybox brief have been implemented:

  - Business-user-updatable content
  - Accessible via API for other platforms
  - Products and categories display with images and descriptions
  - UI matches wireframe and is visually appealing

- The app can be run locally using the steps above
- Adding a new product or category requires only updating Contentful; no code changes needed

### Due to time constraint

- Trying to run the server with a draft entry (Category or Product) in Contentful will throw an error, make sure content is published
- Component testing with Jest or the like hasn't been implemented
