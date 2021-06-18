import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = async () => {
    try {
        const res = await axiosWithAuth().get('http://localhost:5000/api/colors')
        return res.data;
    } catch (error) {
        console.error(error);
    }
        
}

export default fetchColorService;