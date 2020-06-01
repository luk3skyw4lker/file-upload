# File Upload

An application developed using Node.js for backend, React.js for frontend and Amazon S3.

The application has the feature of create "Posts", using MongoDB as persistence. At the time, it only supports the feature of uploading files, but I have plans to add description, hashtags, likes and everything more.

The packages I've installed are all listed on package.json of each part (frontend and backend).

## Running

### Backend

First, define the following environment variables:

1. APP_URL
   This is the url you have defined for the app to run (like **http://localhost:3000**)

2. STORAGE_TYPE:
   This one is for multer to know which one storage you are using, the defined storages are: **local** and **s3**, use the same values for the environment variable.

3. MONGODB_URI:
   This is the access url to your MongoDB instance.

4. AWS_ACCESS_KEY_ID:
   This is your secret key id for AWS (only if you're going to use AWS S3 service)

5. AWS_SECRET_ACCESS_KEY:
   This is your secret access key for AWS (only if you're going to use AWS S3 service)

6. AWS_DEFAULT_REGION:
   This is the region you have configured your bucket to run (only if you're going to use AWS S3 service).

Then must have [Node.js](https://nodejs.org) installed, enter the backend folder run `npm install` and then `npm start` or `npm run dev`. The npm run dev option runs the app with nodemon and watch files for alteration. Now your backend should be running (note that the .env file is required).

### Frontend

ON DEVELOPMENT
