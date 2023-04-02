import config from "../config/config.js"

const base_url = config.base_url;
const key = config.x_rapid_key;
const host = config.x_rapid_host;

async function getCountries(){
    const ops = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': host
        }
    };
    const response = await fetch(`${base_url}/countries`, ops);
    const result = await response.json()
    return result;
}

export {getCountries}