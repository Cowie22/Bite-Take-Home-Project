## Getting Started

- Project uses Node version 20.14.0
- Project uses MySQL 8.3.0

### Usage

1. Clone the repository.
2. In the terminal and within the project directory run `npm install`.
3. Follow the directions in `config.example.js` to set up your database configuration file.
4. To seed the database with the provided JSON data:
   - If you have a MySQL password, in the terminal, run `mysql -u root -p < schema.sql` and enter your password.
   - Otherwise, run `mysql -u root < schema.sql`.
   - NOTE HERE: the images in the provided JSON were being blocked, so I simply replaced them with images from [unsplash](https://unsplash.com/).
5. In a separate terminal, run `npm run server`.
6. The project will run from [http://localhost:3001/](http://localhost:3001/).

### Navigation

1. In the header: Grocery bag icon brings you home.
2. In the header: Cart icon brings you to your cart.
3. Clicking on any item on the home page, will bring you to that item's individual page, where you can add the items to your cart.
4. After completing orders, you can view the JSON of the saved orders from the API endpoint: [http://localhost:3001/api/orders](http://localhost:3001/api/orders).