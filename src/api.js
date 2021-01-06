const key = '84f85a58146a2d2a9feeea9c4cf55735';
const imgUrl = 'https://image.tmdb.org/t/p/original'

export async function fetching(look){
    let uri = "https://api.themoviedb.org/3/search/movie?api_key="+key+"&language=it&query="+look+"&page=1&include_adult=false";
    let response =  await fetch(uri);
         response = await response.json()
     let result = await response.results.map(element =>{
        return {
            id: element.id,
            title: element.title,
            resume: element.overview,
            avatarImg : element.poster_path ?  imgUrl+element.poster_path : '',
            backImg: element.backdrop_path ?  imgUrl+element.backdrop_path : '',
            date: element.release_date,
            vote: element.vote_avarage
        }
    }) 
    return result;
}

export async function weekly(){
    let uri = "https://api.themoviedb.org/3/trending/movie/week?api_key="+key;
    let response = await fetch(uri);
        response = await response.json();
    let result = await response.results.map(element =>{
        return {
            id: element.id,
            title: element.title,
            resume: element.overview,
            avatarImg : element.poster_path ?  imgUrl+element.poster_path : '',
            backImg: element.backdrop_path ?  imgUrl+element.backdrop_path : '',
            date: element.release_date,
            vote: element.vote_avarage
        }
    })
    return result;
}
