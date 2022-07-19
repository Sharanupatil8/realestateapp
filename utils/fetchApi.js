import axios from 'axios';


export const baseUrl = 'https://bayut.p.rapidapi.com';




export const fetchApi = async (url) => {
    const {data} = await axios.get((url)  , {
        headers: {
                 'X-RapidAPI-Key': 'ddc7f12a79msh3c226af159d0141p129043jsn4ca0ca63b3ef',
                 'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
              } 
    })
   return data;
}


