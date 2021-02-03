import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Picker } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Avatar } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { icons, images, SIZES, COLORS, FONTS, dummyData } from '../constants';
import { categoryData, restaurantData, initialCurrentLocation } from '../constants/dummyData';


Feather.loadFont();   //to fix error unrecognized on ios platform
MaterialCommunityIcons.loadFont()   //to fix error unrecognized on ios platform


const Home = ({ navigation, props }) => {
	const [ categories, setCategories ] = React.useState(categoryData);
	const [ selectedCategory, setSelectedCategory ] = React.useState(null);
	const [ restaurants, setRestaurants ] = React.useState(restaurantData);
	const [ currentLocation, setCurrentLocation ] = React.useState(initialCurrentLocation);
	const [city, setCity] = React.useState("");
	

	function onSelectCategory(category) {    // filter restaurant depends on id
		
		let restaurantList = restaurantData.filter((a) => a.categories.includes(category.id));
		setRestaurants(restaurantList);
		setSelectedCategory(category);
	}

	function getCategoryNameById(id) {     // retrieve category names

		let category = categories.filter((a) => a.id == id);
		if (category.length > 0) return category[0].name;
		return '';   // if it's not we will return empty string 
	}

	function renderHeader() {
		return (
			<View style={{ flexDirection: 'row', height: 50, marginTop:5 }}>
				<TouchableOpacity
					style={{
						// width: 50,
						paddingLeft: SIZES.padding * 2,
						justifyContent: 'center'
					}}
					onPress={() => navigation.navigate("Profile")}
				>
					
					<Avatar.Image 
						source={require('../assets/images/profile.jpeg')}
						resizeMode="contain"
						size={50} 
					/>
				</TouchableOpacity>

				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Picker
                        selectedValue={city}
                        style={{height: 50, width: 160}}
                        onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
                       >
							<Picker.Item
								label="Cairo"
								value="Cairo"
								style={{ fontWeight: "bold" }}
								
							/>
								<Picker.Item
								label="Giza"
								value="Giza"
								style={{fontWeight:"bold"}}
							/>
								<Picker.Item
								label="Alex"
								value="Alex"
								style={{fontWeight:"bold"}}
							/>
                       </Picker>
				</View>

				<TouchableOpacity
					style={{
						width: 50,
						paddingRight: SIZES.padding * 2,
						justifyContent: 'center'
					}}
					onPress={() => {}}
				>
					<FontAwesome name="heart" size={30} style={{ color:COLORS.primary }}/>
				</TouchableOpacity>
			</View>
		);
	}

	function renderMainCategories() {
		const renderItem = ({ item }) => {
			return (
				<TouchableOpacity
					style={{
						paddingHorizontal: SIZES.padding * 2,
						paddingVertical: SIZES.padding * 3,
						// paddingBottom: SIZES.padding * 2,
						backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
						 
						borderRadius: SIZES.radius / 2,
						alignItems: 'center',
						justifyContent: 'center',
						marginRight: SIZES.padding,
						...styles.shadow
					}}
					onPress={() => onSelectCategory(item)}
				>
					<View
						style={{
							width: 60,
							height: 60,
							borderRadius: 30,
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray,
							}}
					>
						<Image
							source={item.icon}
							resizeMode="contain"
							style={{
								width: 35,
								height: 35
							}}
						/>
					</View>

					<Text
						style={{
							marginTop: SIZES.padding,
							color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
							...FONTS.body3
						}}
					>
						{item.name}
					</Text>
				</TouchableOpacity>
			);
		};

		return (
			<View style={{ paddingHorizontal: SIZES.padding * 2, paddingVertical: SIZES.padding}}>
				<Text style={{ ...FONTS.h2 }}>Food</Text>
				<Text style={{ ...FONTS.h1, fontWeight: 'bold' }}>Delivery</Text>
			
				<FlatList
					data={categories}
					horizontal
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item) => `${item.id}`}
					renderItem={renderItem}
					contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
				/>
			</View>
		);
	}

	function renderRestaurantList() {
		const renderItem = ({ item }) => (
			<TouchableOpacity
				style={{ marginBottom: SIZES.padding * 2 }}
				onPress={() => navigation.navigate('Restaurant', { item, currentLocation })}
			>
				{/* Image */}
				<View
					style={{
						marginBottom: SIZES.padding
					}}
				>
					<Image
						source={item.photo}
						resizeMode="cover"
						style={{
							width: '100%',
							height: 200,
							borderRadius: SIZES.radius
						}}
					/>

					<View
						style={{
							position: 'absolute',
							bottom: 0,
							height: 50,
							width: SIZES.width * 0.3,
							backgroundColor: COLORS.white,
							borderTopRightRadius: SIZES.radius,
							borderBottomLeftRadius: SIZES.radius,
							alignItems: 'center',
							justifyContent: 'center',
							...styles.shadow
						}}
					>
						<Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
					</View>
				</View>

				{/* Restaurant Info */}
				<Text style={{ ...FONTS.body2 }}>{item.name}</Text>

				<View
					style={{
						marginTop: SIZES.padding,
						flexDirection: 'row'
					}}
				>
					{/* Rating */}
					<Image
						source={icons.star}
						style={{
							height: 20,
							width: 20,
							tintColor: COLORS.yellow,
							marginRight: 10
						}}
					/>
					<Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

					{/* Categories */}
					<View
						style={{
							flexDirection: 'row',
							marginLeft: 10
						}}
					>
						{item.categories.map((categoryId) => {
							return (
								<View style={{ flexDirection: 'row' }} key={categoryId}>
									<Text style={{ ...FONTS.body3, marginRight: 8 }}>
										{getCategoryNameById(categoryId)}
									</Text>
								</View>
							);
						})}
					</View>
				</View>
			</TouchableOpacity>
		);

		return (
			<FlatList
				data={restaurants}
				keyExtractor={(item) => `${item.id}`}
				renderItem={renderItem}
				contentContainerStyle={{
				paddingHorizontal: SIZES.padding * 2,
				paddingBottom: 30
				}}
			/>
		);
	}

	
	return (
		<SafeAreaView style={styles.container}>
			{renderHeader()}
			{renderMainCategories()}
			{renderRestaurantList()}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.lightGray4
	},
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 1
	}
});

export default Home;

