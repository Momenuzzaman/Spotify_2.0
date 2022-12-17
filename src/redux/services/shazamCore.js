import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'dc5075da36msh4a30547499324a6p1dd7e1jsn9d4be2334f7a',
        'X-RapidAPI-Host': ''
    }
};
fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
});