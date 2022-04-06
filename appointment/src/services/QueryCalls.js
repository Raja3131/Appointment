import { useQuery } from 'react-query';
import Api from '../api/Api';

const fetchAppoints = async () => {
    const {data} = await Api.get('/appoints')
    return data;
}

const useAppoints = () => {
    return useQuery('appoints', fetchAppoints);
}

export default useAppoints;