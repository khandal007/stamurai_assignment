'use strict';
module.exports = (sequelize, DataTypes) => {
	var stamurai_task = sequelize.define('stamurai_task',{
		id:{
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			unique: true,
			autoIncrement: true
		},

		task_title:{
			type: DataTypes.STRING,
			allowNull: true
		},

		task_description:{
			type: DataTypes.STRING,
			allowNull: true
		},

		due_date:{
			type: DataTypes.DATE,
			allowNull: true
		},

		created_by:{
			type: DataTypes.INTEGER,
			references: {
          		model: 'stamurai_users',
          		key: 'id'
       		}
		}
	});

	return stamurai_task;
}