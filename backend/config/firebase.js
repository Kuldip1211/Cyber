const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


// Check Firebase Connection
db.listCollections()
    .then(() => {
        console.log("✅ Firebase Firestore connected successfully");
    })
    .catch((error) => {
        console.log("❌ Firebase connection failed");
        console.log(error.message);
    });

module.exports = { admin, db };