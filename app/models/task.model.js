//define sequelize model of the tasks

module.exports = (sequelize, Sequelize) => {
	const Task = sequelize.define("task", {

		title: {
			type: Sequelize.STRING
		},
		position: {
			type: Sequelize.STRING
		},

		description: {
			type: Sequelize.STRING
		},

		date: {
     	type: Sequelize.DATE
		},
		
		time: {
		type: Sequelize.STRING
		}
	});

	return Task;
};