// const express = require('express');
// const dbConnect = require('./mongodb');

// // or as an es module:
// // import { MongoClient } from 'mongodb'
// const path = require('path');

// const app = express();

// const publicPath = path.join(__dirname, 'Public');
// app.set('view engine', 'ejs');
// app.set('Views', __dirname + '/Views');

// // app.use(express.static(publicPath));

// app.get('', (req, res) => {
// 	res.sendFile(`${publicPath}/index.html`);
// });
// app.get('*', (req, res) => {
// 	res.sendFile(`${publicPath}/pagenotfound.html`);
// });
// app.get('/profile', (__, res) => {
// 	const user = {
// 		name: 'ahsan',
// 		email: 'ahsansatti@gmail.com',
// 		status: 'software',
// 	};
// 	res.render('profile', { user });
// });

// app.listen(7000, () => {
// 	console.log('Server is running on port 7000');
// });

const dbConnect = require('./mongodb');

// dbConnect().then(resp => {
// 	resp
// 		.find({ name: 'nord' })
// 		.toArray()
// 		.then(data => {
// 			console.log(data);
// 		});
// });

const main = async () => {
	let data = await dbConnect();
	data = await data.find().toArray();
	console.log(data);
};

main();
