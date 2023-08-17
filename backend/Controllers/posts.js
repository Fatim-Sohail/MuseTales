import PostMessage from '../Models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.send(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }

    res.send('Get Request Successful!')
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save()
        res.send(201).json(newPost);
    } catch (error) {
        res.status(409).json ({ message: error.message});
    }
}