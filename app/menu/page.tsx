"use client";

import Link from "next/link";
import { useState } from "react";

type MenuItem = { name: string; price?: string; desc?: string };
type MenuGroup = { subhead?: string; note?: string; items: MenuItem[] };
type MenuCategory = { id: string; label: string; title: string; note?: string; groups: MenuGroup[] };

const CATEGORIES: MenuCategory[] = [
  {
    id: "burgers",
    label: "Burgers",
    title: "Burgers",
    note: "All our burgers are charbroiled.",
    groups: [
      {
        items: [
          { name: "Charbroiled 1/4lb Burger", price: "$5.49" },
          { name: "Chili 1/4lb Burger", price: "$6.39" },
          { name: "Cheese Burger", price: "$6.79" },
          { name: "Chili Cheese Burger", price: "$7.69" },
          { name: "Double Burger", price: "$7.69" },
          { name: "Double Cheese Burger", price: "$8.39" },
          { name: "Double Chili Burger", price: "$8.39" },
          { name: "Double Chili Cheese Burger", price: "$9.29" },
          { name: "Avocado Burger", price: "$8.29" },
          { name: "Bacon Burger", price: "$8.29" },
          { name: "BBQ Bacon Cheese Burger", price: "$11.29" },
          { name: "Egg Burger", price: "$7.59" },
          { name: "Garden Burger", price: "$7.69" },
          { name: "Pastrami Burger", price: "$11.29" },
          { name: "Super Burger", price: "$11.29" },
          { name: "Swiss Burger", price: "$6.79" },
          { name: "Turkey Burger", price: "$7.69" },
          { name: "Salmon Alaskan Burger", price: "$7.89" },
          { name: "Monster Triple Burger", price: "$15.59" },
        ],
      },
    ],
  },
  {
    id: "hot-dogs",
    label: "Hot Dogs",
    title: "Hot Dogs",
    groups: [
      {
        items: [
          { name: "Hot Dog", price: "$5.29" },
          { name: "Chili Dog", price: "$5.99" },
          { name: "Chili Cheese Dog", price: "$6.29" },
        ],
      },
    ],
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
    title: "Sandwiches",
    note: "Ask your cashier for today's sandwich pricing.",
    groups: [
      {
        items: [
          { name: "Club House", desc: "Turkey, bacon & cheese, served with fries." },
          { name: "Tuna Melt", desc: "On Parmesan sourdough." },
          { name: "Pastrami Sandwich" },
          { name: "Grilled Cheese" },
          { name: "Grilled Ham & Cheese" },
          { name: "Turkey or Ham" },
          { name: "Charbroiled Chicken Breast" },
          { name: "Crispy Chicken Sandwich" },
          { name: "Steak Sandwich" },
          { name: "Philly Cheese Steak" },
          { name: "Patty Melt" },
          { name: "BLT" },
          { name: "BLT with Avocado" },
          { name: "Albacore White Tuna" },
          { name: "Turkey Breast Melt n Swiss" },
          { name: "Filet O' Fish" },
          { name: "Gyro", desc: "Beef or chicken." },
        ],
      },
    ],
  },
  {
    id: "breakfast",
    label: "Breakfast",
    title: "Breakfast",
    note: "Plates served with homemade hashbrowns, toast & jelly (or rice, beans & tortillas).",
    groups: [
      {
        subhead: "Breakfast Plates",
        items: [
          { name: "Super Breakfast", desc: "2 eggs, 2 bacon, 2 sausage, 2 hot cakes, 2 pcs French toast & hashbrowns.", price: "$16.59" },
          { name: "El Grande Breakfast", desc: "2 eggs, 2 bacon, 2 sausage, half ham, toast & hashbrowns.", price: "$16.59" },
          { name: "2 Eggs, 2 Bacon or 2 Sausage", desc: "With 2 hot cakes or French toast.", price: "$10.09" },
          { name: "3 Hot Cakes or French Toast", price: "$7.49" },
          { name: "3 Eggs Any Style", price: "$8.49" },
          { name: "3 Eggs with Ham, Sausage or Bacon", price: "$11.79" },
          { name: "Steak & Eggs", price: "$15.49" },
          { name: "Bone-In Ham Steak & Eggs", price: "$15.49" },
          { name: "Chorizo & Eggs", price: "$11.99" },
          { name: "Huevos Rancheros", price: "$11.99" },
          { name: "Huevos Rancheros with Steak", price: "$15.49" },
          { name: "Chilaquiles", price: "$11.99" },
          { name: "Huevos a la Mexicana", price: "$11.99" },
        ],
      },
      {
        subhead: "Omelettes",
        note: "Served with hashbrowns, toast & jelly, or rice, beans & tortillas.",
        items: [
          { name: "Cheese", price: "$8.99" },
          { name: "Ham & Cheese", price: "$12.49" },
          { name: "Bacon or Sausage", price: "$12.49" },
          { name: "Turkey & Cheese", price: "$12.49" },
          { name: "Chili Cheese", price: "$12.49" },
          { name: "Veggie", desc: "Fresh mushrooms, spinach, tomatoes, bell peppers, onions & cheese.", price: "$12.49" },
          { name: "Avocado & Cheese", price: "$12.49" },
          { name: "Spinach & Feta Cheese", price: "$12.49" },
          { name: "Spanish", price: "$12.49" },
          { name: "Ranchera Salsa & Cheese", price: "$12.49" },
          { name: "Denver", desc: "Ham, bell peppers & cheese.", price: "$12.49" },
        ],
      },
      {
        subhead: "Breakfast Burritos",
        note: "Eggs, homemade hashbrowns, cheese & salsa.",
        items: [
          { name: "Original", price: "$8.99" },
          { name: "Ham, Bacon or Sausage", price: "$12.29" },
          { name: "Pastrami, Chicken or Asada", price: "$12.29" },
          { name: "Spinach Breakfast Burrito", price: "$12.29" },
          { name: "Chorizo & Egg Breakfast Burrito", price: "$12.29" },
          { name: "Turkey Breakfast Burrito", price: "$12.29" },
          { name: "Veggie Breakfast Burrito", price: "$12.29" },
          { name: "3 Meat Burrito", price: "$16.99" },
        ],
      },
      {
        subhead: "Breakfast Sandwiches",
        note: "Eggs, mayo, lettuce & tomato.",
        items: [
          { name: "Egg Sandwich", price: "$7.49" },
          { name: "Ham, Bacon or Sausage", price: "$9.49" },
          { name: "Steak & Eggs Sandwich", price: "$13.49" },
        ],
      },
    ],
  },
  {
    id: "mexican",
    label: "Mexican Favorites",
    title: "Mexican Favorites",
    groups: [
      {
        items: [
          { name: "Chicken Plate", desc: "Rice, beans, pico de gallo & tortillas.", price: "$13.99" },
          { name: "Asada Plate", desc: "Rice, beans, pico de gallo & tortillas.", price: "$13.99" },
          { name: "Taco", desc: "Chicken or asada, onions, cilantro & salsa.", price: "$5.39" },
          { name: "2 Tacos Plate", desc: "Chicken or asada, rice & beans.", price: "$13.79" },
          { name: "3 Taquitos Plate", desc: "Guacamole, rice, beans, cheese & salsa.", price: "$11.79" },
          { name: "Chicken Fajita", desc: "Grilled chicken, peppers & onions, rice, beans & pico de gallo." },
          { name: "Nachos", desc: "Guacamole, beans, cheese, sour cream & salsa.", price: "$8.69" },
          { name: "Nachos with Meat", price: "$12.79" },
          { name: "Cheese Quesadilla", price: "$7.49" },
          { name: "Meat Quesadilla", desc: "Chicken, steak or pastrami.", price: "$12.79" },
          { name: "Chicken or Steak Fajita", price: "$15.79" },
        ],
      },
    ],
  },
  {
    id: "burritos",
    label: "Burritos",
    title: "Burritos",
    groups: [
      {
        items: [
          { name: "Bean & Cheese", price: "$7.49" },
          { name: "Tomy's Asada Burrito", desc: "Chicken or asada, jack cheese, grilled onions, bell peppers, rice, sour cream & salsa.", price: "$12.49" },
          { name: "Veggie Burrito", desc: "Avocado, beans, jack cheese, rice, grilled onions, bell peppers, sour cream & salsa.", price: "$12.49" },
        ],
      },
    ],
  },
  {
    id: "salads",
    label: "Salads",
    title: "Salads",
    note: "Romaine lettuce, red cabbage, tomatoes & cucumbers.",
    groups: [
      {
        items: [
          { name: "Dinner Salad", price: "$8.39" },
          { name: "Chef Salad", desc: "With turkey & ham.", price: "$12.29" },
          { name: "Chicken Breast Salad", price: "$12.29" },
          { name: "Tuna Salad", price: "$12.29" },
          { name: "Gyro Salad", price: "$12.29" },
        ],
      },
    ],
  },
  {
    id: "dinners",
    label: "Tomy's Dinners",
    title: "Tomy's Dinners",
    groups: [
      {
        items: [
          { name: "Club House", desc: "Turkey, bacon & cheese, fries & onions.", price: "$15.49" },
          { name: "Club Chicken", desc: "Chicken breast, bacon, avocado, Swiss & fries.", price: "$15.99" },
          { name: "Charbroiled Chicken Dinner", desc: "Onion rings, fries, salad & parmesan bread.", price: "$15.49" },
          { name: "Chicken Tenders", desc: "Onion rings, fries, salad & parmesan bread.", price: "$15.49" },
          { name: "Steak Dinner", desc: "Onion rings, fries, salad & parmesan bread.", price: "$15.49" },
          { name: "Bone-In Ham Steak Dinner", desc: "Onion rings, fries, salad & parmesan bread.", price: "$15.49" },
          { name: "Fish & Chips Plate", desc: "Fries, zucchini, salad & parmesan bread.", price: "$15.49" },
        ],
      },
    ],
  },
  {
    id: "sides",
    label: "Sides & Drinks",
    title: "Sides, Shakes & Drinks",
    groups: [
      {
        subhead: "Side Orders",
        items: [
          { name: "Fries", price: "$4.19" },
          { name: "Onion Rings", price: "$5.99" },
          { name: "Zucchini Fries", price: "$5.99" },
          { name: "Chili Fries", price: "$5.99" },
          { name: "Cheese Fries", price: "$7.79" },
          { name: "Chili Pastrami Fries", price: "$9.99" },
          { name: "Asada Fries", price: "$12.99" },
        ],
      },
      {
        subhead: "Shakes & Ice Cream",
        items: [
          { name: "Shake", desc: "Vanilla, strawberry, chocolate or cookies n' cream.", price: "$5.79" },
          { name: "Ice Cream", desc: "Single scoop / double scoop.", price: "$2.99 / $3.89" },
        ],
      },
      {
        subhead: "Drinks",
        items: [
          { name: "Fountain Drink", desc: "Medium / Large / XL.", price: "$2.69 / $3.39 / $3.89" },
          { name: "Viva Sol Aguas Frescas, Horchata or Jamaica" },
          { name: "Coffee or Hot Tea" },
          { name: "Hot Chocolate" },
          { name: "Milk" },
          { name: "Orange or Apple Juice" },
          { name: "Iced Tea" },
        ],
      },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState(CATEGORIES[0].id);
  const activeCategory = CATEGORIES.find((c) => c.id === active) ?? CATEGORIES[0];

  return (
    <div>
      <section className="page-hero">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h1>Our Menu</h1>
          <p>Charbroiled burgers, Mexican favorites, breakfast and more — pick a category below.</p>
          <div className="menu-tabs" role="tablist" aria-label="Menu categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                id={`tab-${cat.id}`}
                aria-controls={`panel-${cat.id}`}
                className="menu-tab"
                aria-selected={active === cat.id}
                onClick={() => setActive(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      <div className="checker-strip"></div>

      <div className="wrap">
        <section
          className="menu-section"
          role="tabpanel"
          id={`panel-${activeCategory.id}`}
          aria-labelledby={`tab-${activeCategory.id}`}
        >
          <div className="menu-cat-head">
            <div>
              <p className="script-head">{activeCategory.title}</p>
              {activeCategory.note && <p className="menu-cat-note">{activeCategory.note}</p>}
            </div>
          </div>

          {activeCategory.groups.map((group, gi) => (
            <div key={gi}>
              {group.subhead && <p className="menu-subhead">{group.subhead}</p>}
              {group.note && <p className="menu-cat-note" style={{ marginBottom: 10 }}>{group.note}</p>}
              <ul className="menu-list">
                {group.items.map((item) => (
                  <li className="menu-row" key={item.name}>
                    <div className="name-wrap">
                      <span className="name">{item.name}</span>
                      {item.desc && <p className="desc">{item.desc}</p>}
                    </div>
                    <span className="price">{item.price ?? "Ask for pricing"}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>

      <div className="wrap" style={{ paddingBottom: 8 }}>
        <div className="note-box">
          Menu items and prices are transcribed from our posted in-store menu boards and may
          shift day to day — call ahead to confirm before you drive over.
        </div>
      </div>

      <section className="lunch-band">
        <div className="wrap">
          <div>
            <h2>Craving it already?</h2>
            <p>Call ahead or stop by the Sawtelle location.</p>
          </div>
          <Link className="btn btn-outline-light" href="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
