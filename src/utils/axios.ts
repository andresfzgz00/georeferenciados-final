import axios from 'axios';

import { DATABASE_URL } from '../constants/google';

export default axios.create({
    baseURL: DATABASE_URL
});