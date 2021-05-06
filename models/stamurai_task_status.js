'use strict';
module.exports = (sequelize, DataTypes) => {
	var stamurai_task_status = sequelize.define('stamurai_task_status',{
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

		task_id:{
			type: DataTypes.INTEGER,
			references: {
          		model: 'stamurai_tasks',
          		key: 'id'
       		}
		},

		status:{
			type: DataTypes.TINYINT,
			allowNull: true
		}
	});

	return stamurai_task_status;
}