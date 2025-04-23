const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        name: {
            type: String,
            requireed: [true, "Please add the contct name"]
        },
        email: {
            type: String,
            requireed: [true, "Please add your email address"]
        },
        phone: {
            type: String,
            requireed: [true, "Please add your phone number"]
        },
    }, {
    timestamps: true,
});

module.exports = mongoose.model("Contact", contactSchema);
