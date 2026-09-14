# Paradise Nursery

Paradise Nursery is a React + Redux shopping cart application for an online
houseplant shop. Customers can browse plants organized into categories,
add them to a shopping cart, and manage the quantity of each item before
checkout.

## Features

- **Landing page** — background image, company name, an "About Us"
  description, and a **Get Started** button that leads into the store.
- **Product Listing page** — nine houseplants across three categories
  (Air Purifying Plants, Succulents & Cacti, Decorative Greenery), each with
  a thumbnail, name, and price. An **Add to Cart** button adds the plant to
  the cart and then disables itself.
- **Shopping Cart page** — shows every plant in the cart with its
  thumbnail, unit price, and subtotal; lets you increase/decrease quantity
  or delete an item; shows the total number of items and total cost; and
  includes **Continue Shopping** and **Checkout** buttons.
- A **navbar** with a live shopping cart item count appears on both the
  Product Listing and Cart pages.
- Cart state is managed globally with **Redux Toolkit** (`CartSlice.jsx`).

## Tech Stack

- React (Vite)
- Redux Toolkit + React-Redux
- Plain CSS

## Project Structure

```
src/
  App.jsx          – landing page + view switching (Home / Plants / Cart)
  App.css          – landing page styling, including the background image
  AboutUs.jsx       – company description used on the landing page
  ProductList.jsx   – product listing page, plant data, and shared Header/navbar
  ProductList.css
  CartItem.jsx      – shopping cart page
  CartItem.css
  CartSlice.jsx     – Redux Toolkit slice for cart state (add/remove/update)
  store.js          – Redux store configuration
  main.jsx          – app entry point, wraps <App /> in <Provider>
```

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`) in your
browser.

## Build

```bash
npm run build
```

## Author

Jawaria
