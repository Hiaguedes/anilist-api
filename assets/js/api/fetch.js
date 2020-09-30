export class FetchSearch {

constructor(search){
    this.variables = {
        search: search,
        page: 1
    };

    this.query=  `
    query ($id: Int, $search: String, $page: Int) { 
    
      Page(page : $page){
      pageInfo{
        total
      }
      media (id: $id, type: ANIME, search: $search) { 
        id
        title {
          romaji
          english
          native
        }
      }
      }
    }
    `;

    this.url = 'https://graphql.anilist.co';

    this.options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: this.query,
            variables: this.variables

        })
    };
}

handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

 handleData(data) {
    console.log(data); //in case you want to see what is the return from anilist
    return data
}

 handleError(error) {
    alert('Error, check console');
    console.error(error);
}

// Make the HTTP Api request
sendFetch(){
return fetch(this.url, this.options).then(this.handleResponse)
    .then(this.handleData)
    .catch(this.handleError);

}
}