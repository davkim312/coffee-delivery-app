import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
    {
        customer: {
            type: String,
            required: true,
            maxlength: 60,
        },
        address: {
            type: String,
            required: true,
            maxlength: 200,
        },
        total: {
            type: Number,
            required: true,
        },
        status: {
            type: Number,
            default: 0,
        },
        paymentMethods: {
            type: Number,
            required: true,
        }
    }
);

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);