import axios from 'axios';

export default axios.create({
    baseURL: 'https://proyecto-georeferenciados-default-rtdb.firebaseio.com/'
});