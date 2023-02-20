
export const getGifs = async(category) => {

    const limite = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ZWTNmdKK4AHJIGt73jVtUyuI00bmA6yR&q=${category}&limit=${limite}`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({ 
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
     }));

    return gifs;

}