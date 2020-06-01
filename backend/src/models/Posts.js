const { Schema, model } = require('mongoose');
const { S3 } = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const s3 = new S3();

const PostSchema = new Schema(
  {
    name: String,
    size: Number,
    key: String,
    url: String
  },
  { timestamps: true }
);

PostSchema.pre('save', function () {
  if (!this.url) {
    this.url = `${process.env.APP_URL}/files/${this.key}`;
  }
});

PostSchema.pre('remove', function () {
  if (process.env.STORAGE_TYPE === 's3') {
    return s3
      .deleteObject({ Bucket: 'luk3skyw4lker', Key: this.key })
      .promise();
  } else {
    return promisify(fs.unlink)(
      path.resolve(__dirname, '..', '..', 'tmp', 'uploads', this.key)
    );
  }
});

module.exports = model('Post', PostSchema);
