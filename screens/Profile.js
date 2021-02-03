import React from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { icons, images, SIZES, COLORS, FONTS } from '../constants';

const Profile = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.userInfoSection}>
				<View style={{ flexDirection: 'row', marginTop: 15 }}>
					<Avatar.Image source={require('../assets/images/profile.jpeg')} size={80} />
					<View style={{ marginLeft: 20 }}>
						<Title
							style={[
								styles.title,
								{
									marginTop: 15,
									marginBottom: 5
								}
							]}
						>
							Angela
						</Title>
						<Caption style={styles.caption}>@A_ang</Caption>
					</View>
				</View>
			</View>

			<View style={styles.userInfoSection}>
				<View style={styles.row}>
					<Icon name="map-marker-radius" color={COLORS.darkGray} size={25} />
					<Text style={{ color: COLORS.darkGray, marginLeft: 20, fontSize: 17 }}>Cairo, Egypt</Text>
				</View>
				<View style={styles.row}>
					<Icon name="phone" color={COLORS.darkGray} size={25} />
					<Text style={{ color: COLORS.darkGray, marginLeft: 20, fontSize: 17 }}>+2223339997</Text>
				</View>
				<View style={styles.row}>
					<Icon name="email" color={COLORS.darkGray} size={25} />
					<Text style={{ color: COLORS.darkGray, marginLeft: 20, fontSize: 17 }}>angela555@gmail.com</Text>
				</View>
			</View>

			<View>
				<TouchableRipple
					onPress={() => {
						navigation.navigate('Home');
					}}
				>
					<View style={styles.menuItem}>
						<FontAwesome name="heart" size={30} style={{ color: COLORS.darkGray }} />
						<Text style={styles.menuItemText}>Your Favorites</Text>
					</View>
				</TouchableRipple>

				<TouchableRipple
					onPress={() => {
						navigation.navigate('Home');
					}}
				>
					<View style={styles.menuItem}>
						<FontAwesome name="share" color={COLORS.darkGray} size={30} />
						<Text style={styles.menuItemText}>Share with Friends</Text>
					</View>
				</TouchableRipple>

				<TouchableRipple
					onPress={() => {
						navigation.navigate('Home');
					}}
				>
					<View style={styles.menuItem}>
						<FontAwesome name="user" size={30} style={{ color: COLORS.darkGray }} />
						<Text style={styles.menuItemText}>Support</Text>
					</View>
				</TouchableRipple>

				<TouchableRipple
					onPress={() => {
						navigation.navigate('Home');
					}}
				>
					<View style={styles.menuItem}>
						<FontAwesome name="cog" size={30} style={{ color: COLORS.darkGray }} />
						<Text style={styles.menuItemText}>Settings</Text>
					</View>
				</TouchableRipple>

				<TouchableRipple
					onPress={() => {
						navigation.navigate('Home');
					}}
				>
					<View style={styles.menuItem}>
						<FontAwesome name="edit" size={30} style={{ color: COLORS.darkGray }} />
						<Text style={styles.menuItemText}>Edit Profile</Text>
					</View>
				</TouchableRipple>
			</View>
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	userInfoSection: {
		paddingHorizontal: 30,
		marginBottom: 18
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold'
	},
	caption: {
		fontSize: 14,
		lineHeight: 14,
		fontWeight: '500'
	},
	row: {
		flexDirection: 'row',
		marginBottom: 10
	},
	infoBoxWrapper: {
		borderBottomColor: '#dddddd',
		borderBottomWidth: 1,
		borderTopColor: '#dddddd',
		borderTopWidth: 1,
		flexDirection: 'row',
		height: 100
	},
	menuItem: {
		flexDirection: 'row',
		paddingVertical: 15,
		paddingHorizontal: 30
	},
	menuItemText: {
		color: '#777777',
		marginLeft: 20,
		fontWeight: '600',
		fontSize: 16,
		lineHeight: 26
	}
});
