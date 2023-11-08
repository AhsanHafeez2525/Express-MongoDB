const dbConnect = require('./mongodb');

const insertData = async () => {
	let data = await dbConnect();
	let result = await data.insertMany([
		{ name: 'max 7', brand: 'micromax1', price: 420, category: 'mobile' },
		{ name: 'max 7', brand: 'microma2', price: 520, category: 'mobile' },
		{ name: 'max 7', brand: 'micromax3', price: 620, category: 'mobile' },
	]);
	if (result.acknowledged) {
		console.warn('data is inserted');
	}
};

insertData();
