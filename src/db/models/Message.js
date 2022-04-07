module.exports = (sequelize, DataTypes) => {
	const Message = sequelize.define(
		"Message",
		{
			messageId: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			messageText: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			sender: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			createdAt: {
				type: DataTypes.BIGINT,
				defaultValue: () => new Date().getTime(),
			},
		},
		{
			timestamps: false,
		}
	);

	return Message;
};
