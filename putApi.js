const express = require('express');

const dbConnect = require('./mongodb');

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
	let data = await dbConnect();
	data = await data.find().toArray();
	console.log(data, 'getApidata');
	res.send(data);
});

app.post('/', async (req, res) => {
	// let result = await data.insertOne(req.body);
	let result = await data.insertMany(req.body);

	// res.send(data)
	res.send(result);
	// console.log(req.body);
	// res.send({ name: 'satti' });
	// res.send(req.body);
});
app.put('/', async (req, res) => {
	let data = await dbConnect();

	let result = data.updateOne(
		// { name: 'hafeez satti' },
		// { $set: { price: 20 } }
		{ name: req.body.name },
		{ $set: req.body }
	);

	res.send({ name: 'update api' });
	console.log(req.body);
});

app.listen(5000, () => {
	console.log('server is running at port');
});
