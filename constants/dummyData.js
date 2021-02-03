import { icons, images, SIZES, COLORS, FONTS } from '../constants';

const initialCurrentLocation = {
	streetName: 'Tahrir'
};

const categoryData = [
	{
		id: 1,
		name: 'Rice',
		icon: icons.rice_bowl
	},
	{
		id: 2,
		name: 'Noodles',
		icon: icons.noodle
	},
	{
		id: 3,
		name: 'Hot Dogs',
		icon: icons.hotdog
	},
	{
		id: 4,
		name: 'Salads',
		icon: icons.salad
	},
	{
		id: 5,
		name: 'Burgers',
		icon: icons.hamburger
	},
	{
		id: 6,
		name: 'Pizza',
		icon: icons.pizza
	},
	{
		id: 7,
		name: 'Snacks',
		icon: icons.fries
	},
	{
		id: 8,
		name: 'Sushi',
		icon: icons.sushi
	},
	{
		id: 9,
		name: 'Desserts',
		icon: icons.donut
	},
	{
		id: 10,
		name: 'Drinks',
		icon: icons.drink
	}
];

const restaurantData = [
	{
		id: 1,
		name: 'Crispy Chicken Burger',
		rating: 4.8,
		qty: 0,
		categories: [ 5, 7 ],
		photo: images.burger_restaurant_1,
		duration: '30 - 45 min',
		menu: [
			{
				menuId: 1,
				name: 'Crispy Chicken Burger',
				photo: images.crispy_chicken_burger,
				description: 'Burger with crispy chicken, cheese and lettuce',
				calories: 200,
				price: 10
			},
			{
				menuId: 2,
				name: 'Crispy Chicken Burger',
				photo: images.honey_mustard_chicken_burger,
				description: 'Burger with crispy chicken, cheese and lettuce',
				calories: 250,
				price: 15
			},
			{
				menuId: 3,
				name: 'Crispy Chicken Burger',
				photo: images.baked_fries,
				description: 'Crispy Chicken Burger',
				calories: 194,
				price: 8
			}
		]
	},
	{
		id: 2,
		name: 'Pizza',
		rating: 4.8,
		qty: 0,
		categories: [ 2, 4, 6 ],
		photo: images.pizza_restaurant,
		duration: '15 - 20 min',
		menu: [
			{
				menuId: 4,
				name: 'Meat Pizza',
				photo: images.hawaiian_pizza,
				description: 'Pasta with fresh tomatoes',
				calories: 250,
				price: 15
			},
			{
				menuId: 5,
				name: 'Cheese Pizza',
				photo: images.pizza,
				description: 'Pasta with fresh tomatoes',
				calories: 250,
				price: 20
			},
			{
				menuId: 6,
				name: 'Meat Pizza',
				photo: images.tomato_pasta,
				description: 'Pasta with fresh tomatoes',
				calories: 100,
				price: 10
			},
			{
				menuId: 7,
				name: 'Cheese Pizza',
				photo: images.pizza,
				description: 'Pasta with fresh tomatoes',
				calories: 100,
				price: 10
			}
		]
	},
	{
		id: 3,
		name: 'Hotdogs',
		rating: 4.8,
		qty: 0,
		categories: [ 3 ],
		photo: images.hot_dog_restaurant,
		duration: '20 - 25 min',
		menu: [
			{
				menuId: 8,
				name: 'Best HotDogs',
				photo: images.chicago_hot_dog,
				description: 'Homemade hotdogs, all beef hot dogs',
				calories: 100,
				price: 20
			}
		]
	},
	{
		id: 4,
		name: 'Sushi',
		rating: 4.8,
		qty: 0,
		categories: [ 8 ],
		photo: images.japanese_restaurant,
		duration: '10 - 15 min',
		menu: [
			{
				menuId: 9,
				name: 'Ura Shrimp Tempura Maki',
				photo: images.sushi,
				description: 'Fresh salmon, sushi rice, fresh juicy avocado',
				calories: 100,
				price: 50
			}
		]
	},
	{
		id: 5,
		name: 'Cuisine',
		rating: 4.8,
		qty: 0,
		categories: [ 1, 2 ],
		photo: images.noodle_shop,
		duration: '15 - 20 min',
		menu: [
			{
				menuId: 10,
				name: 'WORLD DUMPLINGS',
				photo: images.kolo_mee,
				description: 'WORLD DUMPLINGS',
				calories: 200,
				price: 5
			},
			{
				menuId: 11,
				name: 'Sarawak Laksa',
				photo: images.sarawak_laksa,
				description: 'Sarawak Laksa is a comforting Malaysian noodle soup that is spicy',
				calories: 300,
				price: 8
			},
			{
				menuId: 12,
				name: 'Nasi Lemak',
				photo: images.nasi_lemak,
				description: 'Malaysian coconut milk rice, served with sambal',
				calories: 300,
				price: 8
			},
			{
				menuId: 13,
				name: 'Sarawak Laksa',
				photo: images.nasi_briyani_mutton,
				description: 'Sarawak Laksa is a comforting Malaysian noodle soup that is spicy',
				calories: 300,
				price: 8
			}
		]
	},
	{
		id: 6,
		name: 'Desserts',
		rating: 4.9,
		qty: 0,
		categories: [ 9, 10 ],
		photo: images.kek_lapis_shop,
		duration: '35 - 40 min',
		menu: [
			{
				menuId: 12,
				name: 'Teh C Peng',
				photo: images.teh_c_peng,
				description: 'Teh C Peng Special is a popular drink',
				calories: 100,
				price: 2
			},
			{
				menuId: 13,
				name: 'ABC Ice Kacang',
				photo: images.ice_kacang,
				description: 'Shaved Ice with Beans and Palm Sugar Syrup',
				calories: 100,
				price: 3
			},
			{
				menuId: 14,
				name: 'ABC Ice Kacang',
				photo: images.kek_lapis,
				description: 'Shaved Ice with Beans and Palm Sugar Syrup',
				calories: 300,
				price: 20
			}
		]
	}
];

export { restaurantData, categoryData, initialCurrentLocation };
