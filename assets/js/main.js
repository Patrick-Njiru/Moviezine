document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form'),
    commentsForm = document.getElementById('customer-reviews-form'),
    image = document.getElementById('resulting-image'),
    movieDetails = document.getElementById("movie-details-result"),
    addedComments = document.getElementById('added-comments')

    // Default Movie and it's details
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=d6424164')
    .then(response => response.json())
    .then(object => {
        image.removeAttribute('src')
        image.setAttribute('src', `${object.Poster}`)
        movieDetails.innerHTML = 
        `
        <p id="movie-info"> 
            <span>Title</span> : &emsp;&emsp;&emsp;&emsp; <strong><i>${object.Title}</i></strong> <br>
            <span>Type</span> : &emsp;&emsp;&emsp;&emsp; <i>${object.Type}</i> <br>
            <span>Genre</span> : &emsp;&emsp;&emsp; <i>${object.Genre}</i> <br>
            <span>Release date</span> : &nbsp; <i>${object.Released}</i> <br>
            <span>Rated</span> : &emsp;&emsp;&emsp;&nbsp; <i>${object.Rated}</i>  <br>
            <span>Duration</span> : &emsp;&emsp;&nbsp; <i>${object.Runtime}</i> <br>
            <span>Director(s)</span> : &emsp;&emsp; <i>${object.Director}</i> <br>
            <span>Writer(s)</span> : &emsp;&emsp;&nbsp; <i>${object.Writer}</i> <br>
            <span>Actors</span> : &emsp;&emsp;&emsp; <i>${object.Actors}</i> <br>
            <span>Plot</span> : <br> ${object.Plot} <br>
            <span>Awards</span> : <br> ${object.Awards} <br> 
            <span>Ratings</span> : 
            <ul>
                <li><i>IMDB - &nbsp; ${object.Ratings[0].Value}</i></li>
                <li><i>Rotten Tomatoes - &nbsp; ${object.Ratings[1].Value}</i></li>
                <li><i>Metacritic - &nbsp; ${object.Ratings[2].Value}</i></li>                        
            </ul> <br>
        </p>
        `
    })
    .catch(error => error)

    // commentsForm.addEventListener('submit', e => {
    //     e.preventDefault()
    //     AddComment(e.customer-review.value)
    //     commentsForm.reset()
    // })
    // function AddComment(userComment) {
    //     if(userComment.length > 0) {
    //         const li=document.createElement('li')
    //         li.innerText = userComment
    //         button = document.createElement('button')
    //         button.innerText = 'undo'
    //         li.appendChild(button)
    //         addedComments.appendChild(li)
    //     }
    // }

})