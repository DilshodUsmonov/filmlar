var elRow=document.querySelector('.row');
function renderFilms(arr, node) {
arr.forEach((film)=> {
    var newcol=document.createElement('col');
    var newdiv=document.createElement('div');
    var newcard=document.createElement('div')
    var newHeading=document.createElement('h5');
    var newImages=document.createElement('img');
    var newparagraph=document.createElement('p');
    var newTime=document.createElement('time');
    var newUl=document.createElement('ul')

       
        
      
     for(var genre of film.genres) {
        var newGenreLi=document.createElement('li');
        newGenreLi.setAttribute('class', 'items')
        
        newGenreLi.textContent=genre;
        newUl.appendChild(newGenreLi);
     }
    
    newHeading.textContent=film.title;
    
    newparagraph.textContent=film.overview.split(' ').slice(0, 10).join(' ')+'...';
    newTime.textContent=taqvim(film.release_date);
    newdiv.setAttribute('class', ' col-12 col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center   flex-column mb-3 ');
    newcard.setAttribute('class', 'card  d-flex    flex-column');

    newHeading.setAttribute('class', 'film__heading mb-3');
    newImages.setAttribute('class', 'rasm mb-3')
    newImages.setAttribute('src', film.poster);
    newImages.setAttribute('width', '300');
    newImages.setAttribute('height', '200');

    newparagraph.setAttribute('class', 'paragraph');
    newcard.appendChild(newHeading);
    newcard.appendChild(newImages);
    newcard.appendChild(newparagraph);
    newcard.appendChild(newTime);
    newcard.appendChild(newUl);
    newdiv.appendChild(newcard);
    node.appendChild(newdiv);
})
}
renderFilms(films, elRow)

