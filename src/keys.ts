import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI_CLOUD =  process.env.MONGO_URI_CLOUD
const MONGO_URI_LOCAL = process.env.MONGO_URI_LOCAL
const JWT_SECRET = process.env.JWT_SECRET
const BASE_URL = process.env.BASE_URL
const PORT = process.env.PORT

export { MONGO_URI_CLOUD, MONGO_URI_LOCAL, JWT_SECRET, BASE_URL, PORT };