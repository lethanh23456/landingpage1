import axios from 'axios';
import { ip } from 'data/ip';

export async function get(setRelate, setLoading, url, payload) {
    setLoading(true);
    const response = await axios.get(`${ip}/${url}`, payload);
    const data = _.get(response, "data.data", []);
    setRelate(data);
    setLoading(false);
}

export async function getWithTotal(setRelate, setLoading, setTotal, url, payload) {
    setLoading(true);
    const response = await axios.get(`${ip}/${url}`, payload);
    const data = _.get(response, "data.data", []);
    setRelate(data);
    setTotal(data.length);
    setLoading(false);
}