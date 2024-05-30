// breakfast
import Breakfast1 from "../../public/assets/Breakfast/breakfast1.png";
import Breakfast2 from "../../public/assets/Breakfast/breakfast2.png";
import Breakfast3 from "../../public/assets/Breakfast/breakfast3.png";
import Breakfast4 from "../../public/assets/Breakfast/breakfast4.png";
import Breakfast5 from "../../public/assets/Breakfast/breakfast5.png";
import Breakfast6 from "../../public/assets/Breakfast/breakfast6.png";
// dinner
import Dinner1 from "../../public/assets/Dinner/dinner1.png";
import Dinner2 from "../../public/assets/Dinner/dinner2.png";
import Dinner3 from "../../public/assets/Dinner/dinner3.png";
import Dinner4 from "../../public/assets/Dinner/dinner4.png";
import Dinner5 from "../../public/assets/Dinner/dinner5.png";
import Dinner6 from "../../public/assets/Dinner/dinner6.png";
// lunch
import Lunch1 from "../../public/assets/lunch/lunch1.png";
import Lunch2 from "../../public/assets/lunch/lunch2.png";
import Lunch3 from "../../public/assets/lunch/lunch3.png";
import Lunch4 from "../../public/assets/lunch/lunch4.png";
import Lunch5 from "../../public/assets/lunch/lunch5.png";
import Lunch6 from "../../public/assets/lunch/lunch6.png";

const meals = [
  {
    id: 1,
    category: "breakfast",
    title: "Eggs Benidicts",
    image: Breakfast1,
    price: 10,
    description:
      "Start your day with a delicious breakfast item that combines a rich blend of flavors. Whether you're in a rush or have time to savor every bite, this meal will give you the energy you need to tackle the morning. Perfect for pairing with coffee or fresh juice.",
  },
  {
    id: 2,
    category: "breakfast",
    title: "Breakfast Sandwich",
    image: Breakfast2,
    price: 6,
    description:
      "Enjoy a nutritious breakfast designed to fuel your morning with wholesome ingredients. This meal offers a balanced mix of protein, carbs, and healthy fats to keep you satisfied and energized until lunch. Ideal for a busy start to your day.",
  },
  {
    id: 3,
    category: "breakfast",
    title: "Backed chiken",
    image: Breakfast3,
    price: 4.56,
    description:
      "Indulge in a tasty breakfast treat that brings a smile to your face. Light yet satisfying, it's perfect for those who love a little sweetness in the morning. Great on its own or as a part of a larger breakfast spread.",
  },
  {
    id: 4,
    category: "breakfast",
    title: "Begel and Cren chess",
    image: Breakfast4,
    price: 6.33,
    description:
      "Kickstart your day with a delightful breakfast that combines delicious flavors with essential nutrients. This meal is crafted to help you feel full and focused, making it a great choice for those with a busy schedule.",
  },
  {
    id: 5,
    category: "breakfast",
    title: "Full Breakfast Fried Egg Toast Brunch",
    image: Breakfast5,
    price: 6.23,
    description:
      "Choose this delicious and healthy breakfast choice that balances taste and nutrition. It's perfect for anyone looking to maintain a healthy diet without sacrificing flavor. Enjoy it on a relaxing morning or as a quick bite before heading out.",
  },
  {
    id: 6,
    category: "breakfast",
    title: "Toast Croissant fried Egg",
    image: Breakfast6,
    price: 7.95,
    description:
      "Experience a perfect breakfast item that promises a great start to your morning. With its rich and satisfying flavors, it’s designed to provide the nourishment you need. Pair it with your favorite morning beverage for an excellent meal.",
  },
  {
    id: 7,
    category: "dinner",
    title: "Backed Chiken",
    image: Dinner1,
    price: 8,
    description:
      "End your day with a savory dinner dish that is both comforting and delicious. This meal features a rich combination of ingredients that make for a hearty and satisfying dinner. Perfect for winding down after a long day.",
  },
  {
    id: 8,
    category: "dinner",
    title: "Lemony Salmon Piccata",
    image: Dinner2,
    price: 9.91,
    description:
      "Savor a flavorful dinner designed to satisfy your appetite with a mix of savory and aromatic ingredients. This dish is perfect for an evening meal that leaves you feeling full and content. Ideal for both weeknights and special occasions.",
  },
  {
    id: 9,
    category: "dinner",
    title: "Garlic Butter Backed Salmon",
    image: Dinner3,
    price: 2.55,
    description:
      "Enjoy a delicious dinner that brings together a delightful mix of flavors and textures. Perfect for a relaxed evening, this meal offers a satisfying dining experience that’s both tasty and fulfilling.",
  },
  {
    id: 10,
    category: "dinner",
    title: "French Fries with Chess",
    image: Dinner4,
    price: 5.55,
    description:
      "Treat yourself to a hearty dinner that helps you end your day right. With its comforting flavors and satisfying portions, this meal is perfect for a cozy evening at home. Enjoy it with family or friends for a delightful dining experience.",
  },
  {
    id: 11,
    category: "dinner",
    title: "Pork Tenderlion with Quinoa Pilaf",
    image: Dinner5,
    price: 10,
    description:
      "Indulge in a delightful dinner dish that's suitable for any occasion. Whether you're looking for a weekday meal or something special, this dish delivers rich flavors and a satisfying experience. Perfect for sharing with loved ones.",
  },
  {
    id: 12,
    category: "dinner",
    title: "Salmon with Grapefruit and Lentil Salat",
    image: Dinner6,
    price: 6.66,
    description:
      "Satisfy your hunger with this perfect dinner item that combines delicious ingredients to create a memorable meal. It's a great choice for those who want a tasty and fulfilling dinner without the hassle of cooking.",
  },
  {
    id: 13,
    category: "lunch",
    title: "Beef Steak",
    image: Lunch1,
    price: 7.77,
    description:
      "Opt for a light and healthy lunch option that keeps you going throughout the day. This meal is designed to be both nutritious and delicious, providing the right balance of energy and satisfaction. Great for a mid-day boost.",
  },
  {
    id: 14,
    category: "lunch",
    title: "Honey-Say-Glazed Salmon with peppers",
    image: Lunch2,
    price: 5.67,
    description:
      "Keep your energy up with a tasty lunch that offers a delightful mix of flavors. This meal is perfect for those who need a quick and satisfying option to power through the afternoon. Ideal for busy workdays or leisurely weekends.",
  },
  {
    id: 15,
    category: "lunch",
    title: "Tarragon-Rubbed-Salmon",
    image: Lunch3,
    price: 7.88,
    description:
      "Delight in a lunch option that’s perfect for any day. This meal combines nutritious ingredients to create a balanced and flavorful dish. It’s a great choice for anyone looking to enjoy a delicious and wholesome lunch.",
  },
  {
    id: 16,
    category: "lunch",
    title: "Indian Lunch",
    image: Lunch4,
    price: 10.12,
    description:
      "Brighten your day with a delicious lunch that’s sure to please. This meal offers a wonderful combination of flavors and textures, making it a delightful mid-day treat. Perfect for enjoying at home or on the go.",
  },
  {
    id: 17,
    category: "lunch",
    title: "Fried Chiken Bento",
    image: Lunch5,
    price: 6.45,
    description:
      "Stay energized with a satisfying lunch that offers a balance of taste and nutrition. This meal is designed to keep you full and focused, making it ideal for busy afternoons. Enjoy it as part of a healthy and balanced diet.",
  },
  {
    id: 18,
    category: "lunch",
    title: "Healthy Meal Plan",
    image: Lunch6,
    price: 6.54,
    description:
      "Choose this perfect lunch item for a balanced and satisfying meal. With its nutritious ingredients and delicious flavors, it’s an excellent choice for a mid-day break. Ideal for those who want a wholesome and tasty lunch.",
  },
];

export default meals;
