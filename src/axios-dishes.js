import axios from 'axios';

const axiosTurtle = axios.create({
    baseURL: 'https://homework-a3501.firebaseio.com/turtlePizza/'
});
export default axiosTurtle;
