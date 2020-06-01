const Posts = require('../models/Posts');

module.exports = {
  async store(req, res) {
    if (!req.file) {
      return res
        .status(400)
        .json({ err: 'A file must be present on the post' });
    }

    const { originalname: name, size, key, location: url = '' } = req.file;

    const post = await Posts.create(
      {
        size,
        name,
        key,
        url
      },
      (err, post) => {
        if (err) return res.status(500).json({ err: err.message });

        return res.status(201).json(post);
      }
    );
  },

  index(req, res) {
    Posts.find({}).exec((err, posts) => {
      if (err) return res.status({ err: err.message });

      return res.status(200).json(posts);
    });
  },

  delete(req, res) {
    const { id } = req.params;

    Posts.findById(id).exec(async (err, post) => {
      if (err) return res.status(500).json({ err: err.message });

      if (!post) return res.status(404).json({ err: 'No posts found' });

      await post.remove();

      return res.status(204).json(null);
    });
  }
};
