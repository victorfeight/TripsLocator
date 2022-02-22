const mongoose = require('mongoose');

const blogpostSchema = new mongoose.Schema({
    link: { type: String, required: true },
    title: { type: String, required: true, index: true },
    date: { type: String, required: true },
    content: { type: String, required: true },
});

// compile model
mongoose.model('blogposts', blogpostSchema);