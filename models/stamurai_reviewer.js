'use strict';
module.exports = (sequelize, DataTypes) => {
	var stamurai_reviewer = sequelize.define('stamurai_reviewer',{
		id:{
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			unique: true,
			autoIncrement: true
		},

		reviewer_id:{
			type: DataTypes.INTEGER,
			references: {
          		model: 'stamurai_users',
          		key: 'id'
       		}
		},

		user_id:{
			type: DataTypes.INTEGER,
			references: {
          		model: 'stamurai_users',
          		key: 'id'
       		}
		}
	});

	return stamurai_reviewer;
}