function loadRazorpay() {
    let options = {
        "key": "YOUR_RAZORPAY_KEY", // Your Razorpay Key ID
        "amount": 50000, // Amount in paise (50000 paise = 500 INR)
        "currency": "INR",
        "name": "Event Booking",
        "description": "Booking for event",
        "handler": function (response) {
            alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        },
        "prefill": {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "contact": "9999999999"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    let rzp1 = new Razorpay(options);
    rzp1.open();
}

window.onload = loadRazorpay;
