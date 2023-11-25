fetch('https://randomuser.me/api/?results=5')
  .then(res => res.json())
  .then((res) => {
    console.log(res);
  })

function loadData() {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then((res) => {
        res.results.forEach(e => {
            document.querySelectorAll(`.image`)[res.results.indexOf(e)].src = `${e.picture.large}`;
            document.querySelectorAll(`.phone`)[res.results.indexOf(e)].innerHTML = `${e.cell}`
            document.querySelectorAll(`.coords`)[res.results.indexOf(e)].innerHTML = `${e.location.coordinates.latitude} ${e.location.coordinates.longitude}`
            document.querySelectorAll(`.postcode`)[res.results.indexOf(e)].innerHTML = `${e.location.postcode}`
            document.querySelectorAll(`.country`)[res.results.indexOf(e)].innerHTML = `${e.location.country}`
        });
    });
}
   
  
