
# Ordering-System
This is a project I created to lessen the wait times at the Communal Student Canteen by allowing for concurrent ordering on a Progressive Web App (PWA). This project was created using Figma, React, CSS, and Builder. 


### Usability Goals:

- Transparency in Order Time: By Incorporating the wait time often found on apps like FoodPanda and Keeta, users are able to real-time track when their order will be ready.
- Simple UI: Each button should do what it is supposed to do. 
- Accessibility Access: Allowing for language changes as well as large UI and font sizes, accessibility access should be at the frontend of our system. Enlarging the ordering system will also lessen the risk for the fat finger problem.


## Demo


![PWA Home Screen]("demo.png")


This is the link to the Demo and User Testing: https://t.maze.co/286313989


## Installation

This repository contains the following folders and files:

- **PNG Folder**: Contains all the reference images used throughout the app. 
- **Code Folders**: Separate folders per page containing the necessary code (e.g. landing-page, cart-page, etc).
- **.fig File**: A `.fig` file is provided for direct import into Figma. 
---

## Deployment Instructions

### 1. Clone the Repository
Start by cloning the repository to your local machine using the command below:

```bash
git clone https://github.com/tanyabudhrani/Ordering-System.git
```

Once cloned, navigate into the project directory and install the necessary dependencies using:

```bash
cd your-project-directory
npm install
npm run dev
```

After a few seconds, your project should be accessible at the address http://localhost:1234/

If you are satisfied with the result, you can finally build the project for release with:

```bash
npm run build
```
## Features of the PWA

### 1. Food Ordering Interface
- **Menu Browsing**: Users can explore categories like *Fast-Food*, *Chinese*, and *Western* with food images for easy selection.
- **Cart Management**: Users can add items, adjust quantities, and see related popular items.

### 2. Order Confirmation & Tracking
- **Order Details**: Displays ticket number, ordered items, and pickup location after placing an order.
- **Estimated Time**: Real-time order status is shown (e.g., "ASAP 25 minutes").

### 3. Help & Support
- **Help Section**: Users can search FAQs (e.g., "Can I cancel my order?") and access topics like payment options and technical issues.

### 4. Account Management
- **User Profile**: Allows users to manage personal info, notifications, and security settings.
- **Student ID**: Integrated with student ID for authentication or discounts.

### 5. Accessibility
- **Customization**: Options for font size, language, hearing aid, and color inversion to ensure inclusivity.

### 6. Navigation
- **Bottom Nav Bar**: Quick access to *Home*, *Cart*, *Help*, and *Account* for seamless navigation.

### 7. PWA-Specific Features
- **Offline Access**: View previous orders or the cart offline.
- **Installable**: Add to home screen for easy access without app stores.
- **Push Notifications**: Alerts for order status, deals, and promotions.

### 8. Clean Design
- **Visuals**: Simple UI with clear text and large icons. High-quality food images enhance user experience.
- **Personalization**: Customizable orders (e.g., "No Icing" for donuts).

