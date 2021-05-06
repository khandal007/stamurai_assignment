'use strict';
module.exports = (sequelize, DataTypes) => {
	var stamurai_user = sequelize.define('stamurai_user',{
		id:{
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			unique: true,
			autoIncrement: true
		},
		uid:{
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			unique:true
		},
		email:{
			type: DataTypes.STRING,
			allowNull: true,
		},
		first_name:{
			type: DataTypes.CHAR,
			allowNull: true,
		},
		last_name:{
			type: DataTypes.CHAR,
			allowNull: true,
		},
		password:{
			type: DataTypes.STRING,
			allowNull: true
		},
		mobile:{
			type: DataTypes.STRING,
			allowNull: true
		},
		user_role:{
			type: DataTypes.INTEGER,
			allowNull: true
		},
		avatar:{
			type: DataTypes.STRING,
			allowNull: true
		},
		is_active:{
			type: DataTypes.TINYINT,
			allowNull: true
		},
		password_reset_token:{
			type: DataTypes.STRING,
			allowNull: true
		},
		fcm_token:{
			type: DataTypes.STRING,
			allowNull: true
		},
	});

	return stamurai_user;
}