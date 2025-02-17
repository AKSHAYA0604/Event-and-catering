const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const Razorpay = require('razorpay');
const crypto = require('crypto');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost:3306',
    user: 'root',      // Replace with your MySQL username
    password: 'Akshaya@06',      // Replace with your MySQL password
    database: 'event_booking' // Replace with your MySQL database name
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL connected...');
});

// Razorpay configuration
const razorpay = new Razorpay({
    key_id: 'YOUR_RAZORPAY_KEY_ID',
    key_secret: 'YOUR_RAZORPAY_KEY_SECRET'
});

// Get all event halls
app.get('/api/event-halls', (req, res) => {
    const sql = 'SELECT * FROM event_halls';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add to cart
app.post('/api/cart', (req, res) => {
    const { userId, eventHallId } = req.body;
    const sql = 'INSERT INTO cart (user_id, event_hall_id) VALUES (?, ?)';
    db.query(sql, [userId, eventHallId], (err, results) => {
        if (err) throw err;
        res.json({ success: true, message: 'Added to cart' });
    });
});

// Get cart items
app.get('/api/cart/:userId', (req, res) => {
    const { userId } = req.params;
    const sql = 'SELECT * FROM event_halls JOIN cart ON event_halls.id = cart.event_hall_id WHERE cart.user_id = ?';
    db.query(sql, [userId], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Create Razorpay order
app.post('/api/create-order', (req, res) => {
    const { amount, currency = 'INR' } = req.body;
    razorpay.orders.create({ amount, currency, receipt: crypto.randomBytes(10).toString('hex') }, (err, order) => {
        if (err) throw err;
        res.json(order);
    });
});

// Verify Razorpay payment
app.post('/api/verify-payment', (req, res) => {
    const { orderId, paymentId, signature } = req.body;
    const hmac = crypto.createHmac('sha256', 'YOUR_RAZORPAY_KEY_SECRET');
    hmac.update(`${orderId}|${paymentId}`);
    const generatedSignature = hmac.digest('hex');
    if (generatedSignature === signature) {
        res.json({ success: true, message: 'Payment verified' });
    } else {
        res.status(400).json({ success: false, message: 'Invalid signature' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:3306`);
});
