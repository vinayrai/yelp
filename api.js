

function buildURL(url, parameters) {
    let qs = "";
    for (const key in parameters) {
        if (parameters.hasOwnProperty(key)) {
            const value = parameters[key];
            qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
        }
    }

    if (qs.length > 0) {
        qs = qs.substring(0, qs.length - 1);
        url = url + "?" + qs;
    }

    return url;
}


export async function performSearch(parameters) {
    
    baseURL = "https://api.yelp.com/v3/businesses/search";
    queryURL = buildURL(baseURL, parameters)

    return fetch(queryURL, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer xvGVjXB9st97xSkY_ugCCneUn4k8DbikDLcxSPjvX7zUqmmLKlTZPpl4SpCUlyVJRU-FHZkUVvBIbNZHDSSt5MtzE5cD6x0ggGCYliZwv3TvlQegMinhfck742oEXHYx',
        })
    }).then(response => {
        return response.json();
    }).then(data => {
        return data["businesses"];
    });
}



