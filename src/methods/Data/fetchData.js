const BASE_URL = "https://admin.ikar-thinktank.org/api";

const getData = async (endpoint) => {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    const data = await response.json();
    return data;
    };

export default getData;

