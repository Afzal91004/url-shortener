# ✂️ URL Shortener
A simple URL shortener application built using Node.js, Express, MongoDB, and EJS.
## ✨ Features
- 🔗 Shorten long URLs to a more manageable length.
- ↪️ Redirect to the original URL using the shortened version.
- 📊 Track the number of clicks for each shortened URL.
- 📋 Display a list of all shortened URLs with their click counts.
## 🚀 Getting Started
### 🛠️ Prerequisites
- Node.js (v12 or higher)
- MongoDB
### 💾 Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```
2. Install dependencies:
```bash 
npm install
```
3. Start MongoDB:
```bash
mongod
```
4. Configure the database connection in connection.js:
```bash
const mongoose = require("mongoose");
async function connectToMongoDb(url) {
return mongoose.connect(url);
}
module.exports = {
connectToMongoDb,
};
```
5. Start the server:
```bash
npm start
```
The server will start at http://localhost:8001.
### Usage 💡
1. Open your browser and go to http://localhost:8001.
2. Enter the URL you want to shorten and click the "Generate" button.
3. The shortened URL will be displayed. You can use this URL to redirect to the original URL.
4. The list of all shortened URLs and their click counts will be displayed in the table below the form.

### 📁 Project Structure
```plaintext
url-shortener/
├── controllers/
│   └── url.js
├── models/
│   └── url.js
├── routes/
│   ├── staticRouter.js
│   └── url.js
├── views/
│   └── home.ejs
├── connection.js
├── index.js
├── package.json
└── README.md
```
### 🤝 Contributing
Feel free to submit issues and pull requests. For major changes, please open an issue first to discuss what you would like to change.
### 🙏 Acknowledgments
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [EJS](https://ejs.co/)
