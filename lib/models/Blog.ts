
import mongoose, { Schema, model, models } from 'mongoose';

const BlogSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title for this blog post.'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
        type: String,
        required: [false, 'Please provide a description.'],
        maxlength: [200, 'Description cannot be more than 200 characters'],
    },
    content: {
        type: String,
        required: [true, 'Please provide the content of the blog post.'],
    },
    coverImage: {
        type: String,
        required: false,
    },
    status: {
        type: String,
        enum: ['Draft', 'Published', 'Archived'],
        default: 'Draft',
    },
    visibility: {
        type: String,
        enum: ['Public', 'Private', 'Members Only'],
        default: 'Public',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

export default models.Blog || model('Blog', BlogSchema);
