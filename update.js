const dbConnect = require('./mongodb');

const updateData = async () => {
	let data = await dbConnect();
	let result = await data.updateOne(
		{ name: 'max 6' },
		{
			$set: { name: 'max pro 8', price: 5000 },
		}
	);
	console.log(result);
};

updateData();
