import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter a title"]
    },
    message: {
        type: String,
        required: [true, "Please write your blog here"]
    },
    creator: {
        type: String,
        required: [true, "Please enter creator's name"]
    },
    tags: [String],
    selectedFile: String,
    clapCount: {
        type: Number,
        default: 0
    },
    likeCount: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: new Date(),
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;
