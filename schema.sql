DROP DATABASE IF EXISTS grocery;

CREATE DATABASE grocery;

USE grocery;

CREATE TABLE food (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(200) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  imageURL VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

INSERT INTO food (name, description, price, imageURL) VALUES 
("Maine Root-Cola", "A classic cola made with fair trade sugar.", 3.95, "https://images.unsplash.com/photo-1594971475674-6a97f8fe8c2b?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
("Super Taco Salad (New!)", "A super taco salad with black beans, corn, avocado, salsa, and tortilla strips.", 11.25, "https://images.unsplash.com/photo-1563897539633-7374c276c212?q=80&w=3146&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
("Spindrift Raspberry", "Sparkling water with real squeezed fruit.", 3.25, "https://images.unsplash.com/photo-1626792078452-6ec687e598e8?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
("Maine Root-Root Beer", "A classic root beer made with fair trade sugar.", 3.95, "https://images.unsplash.com/photo-1507601298436-268d5dfb36eb?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
("Chocolate Chip Cookie", "THE classic chocolate chip cookie.", 2.75, "https://images.unsplash.com/photo-1584847801423-852691e41bc7?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
("Carrot Cake", "A classic carrot cake with cream cheese frosting.", 0.00, "https://images.unsplash.com/photo-1531226767635-cf013616cd5b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
("The Beyond Burger", "A plant-based burger with cheese, lettuce, tomato, and special sauce.", 12.95, "https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
("Mondo Nachos", "A mondo plate of nachos with black beans, queso, salsa, and jalapenos.", 7.95, "https://images.unsplash.com/photo-1629385778470-6fd217971066?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
("Quinoa Power Salad", "A power salad with quinoa, arugula, and roasted vegetables.", 11.25, "https://plus.unsplash.com/premium_photo-1705003210677-11bbd1392bbf?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
("Tempura Green Bean Stack", "A stack of tempura green beans with sriracha mayo.", 7.95, "https://images.unsplash.com/uploads/141143339879512fe9b0d/f72e2c85?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
("Savory Kale Caesar", "A savory kale caesar salad with parmesan and croutons.", 10.95, "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
("Chill Out Wings", "A plate of wings with a side of ranch.", 7.95, "https://images.unsplash.com/photo-1600891965050-6da6bad77c3f?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
("Gluten-Free Chocolate Brownie", "A gluten-free chocolate brownie.", 3.95, "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
("Mediterranean Supergreens Salad", "A super salad with arugula, quinoa, and roasted vegetables.", 11.25, "https://images.unsplash.com/photo-1542528180-a1208c5169a5?q=80&w=2977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
("Oatmeal Cookie 410 Cal", "A classic oatmeal cookie.", 2.75, "https://images.unsplash.com/photo-1588345274200-42aa29063b78?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
("Crispy Cauliflower", "Crispy cauliflower with a side of ranch.", 7.95, "https://images.unsplash.com/photo-1613743983303-b3e89f8a2b80?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
("Pellegrino", "Sparkling water.", 2.75, "https://images.unsplash.com/photo-1586878018373-b0e446e52b88?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
 *  to create the database and the tables.*/