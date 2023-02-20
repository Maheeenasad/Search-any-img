import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9Ql0b4mXOeY8ihTMq2oslaJMBTt7RrbJhaxLRqzjntk'
      }
}); 
