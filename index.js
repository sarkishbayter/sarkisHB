  fetch(' https://restcountries.com/v3.1/all')
      .then(response => response.json())       // after fetching give me only the json data in this api link (response.json())
      .then(json =>{                           // ma daroure samme json (fine samme chu ma badde )
        let countries=document.getElementById('countries');
        json.forEach(countrie => {
            let country=document.createElement('div');
            let img=document.createElement('img');
            let result=document.createElement('p');
            country.innerHTML=countrie.name.common;
            img.src=countrie.flags.png;
            img.addEventListener('click',()=>{result.innerHTML=countrie.population;});
            countries.appendChild(country);
            countries.appendChild(img);
            countries.appendChild(result);
            console.log(countrie);
        });
      }) 
