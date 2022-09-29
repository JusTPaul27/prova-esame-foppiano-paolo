let europeNations = []

fetch('https://restcountries.com/v3.1/region/europe')
.then(resp => resp.json())
.then(res => displayCountries(res));

function displayCountries(nations) {
    europeNations = nations;
    
    const container = document.getElementById('container');

    for (const nation of nations) {
        console.log(nation);


        nationDiv = document.createElement('div');
        nationDiv.classList.add('nation-div');

        const flagImg = document.createElement('img');
        flagImg.src = nation.flags['png'];
        flagImg.classList.add('flag');
        nationDiv.appendChild(flagImg);
        
        const nameDiv = document.createElement('div');
            const nameP = document.createElement('h3');
            nameP.innerText =  nation.name.common;
            nameDiv.appendChild(nameP);
            const nameOfficial = document.createElement('h3');
            nameOfficial.innerText = nation.name.official;
            nameDiv.appendChild(nameOfficial)

            nationDiv.appendChild(nameDiv);

        const populationDiv = document.createElement('p');
        populationDiv.innerText = 'Population:' + ' ' + nation.population;
        nationDiv.appendChild(populationDiv);


        const capitalDiv = document.createElement('p');
        capitalDiv.innerText = 'Capital: ' + ' ' + nation.capital;
        nationDiv.appendChild(capitalDiv);

    let language = "Language: ";
    for (const key in nation.languages) {
      const length = Object.keys(nation.languages).length;
      if (length === 1) {
        language = language + nation.languages[key];
      } else {
        language = language + nation.languages[key] + ", ";
      }
    }
    const languages = document.createElement("span");
    languages.innerText = language;
    nationDiv.appendChild(languages);


        if (nation.currencies) {
            const currencyDiv = document.createElement('p');
            for (const key in nation.currencies) {
                if (Object.hasOwnProperty.call(nation.currencies, key)) {
                    const element = nation.currencies[key];
                    currencyDiv.innerText = 'Currency: ' + ' ' + element.name + ' ' + '(' + element.symbol + ')';
                }
            }
            nationDiv.appendChild(currencyDiv);     
        }

        const bordersP = document.createElement('p');
        bordersP.innerText = 'It borders with: '
        nationDiv.appendChild(bordersP);
        const bordersUl = document.createElement('ul');
        if (nation.borders) {
            for (const border of nation.borders) {
                const borderLi = document.createElement('li');
                borderLi.innerText = border;
                bordersUl.appendChild(borderLi);
                nationDiv.appendChild(bordersUl);
            }
        } else{
            const borderLi = document.createElement('li');
                borderLi.innerText = 'Nothing';
                bordersUl.appendChild(borderLi);
                nationDiv.appendChild(bordersUl);
        }
    

        const unMemberImg = document.createElement('img');
        function unMember() {
            if (nation.unMember === true) {
                return 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/UN_flag.png/1024px-UN_flag.png'
            } else {
                return './assets/immagine.png'
            }
        }
        unMemberImg.src = unMember();
        unMemberImg.style.height = '80px';
        unMemberImg.style.width = '120px';
        unMemberImg.classList.add('un-member')
        nationDiv.appendChild(unMemberImg);

        container.appendChild(nationDiv);
    }
}



function sortByPopM() {
    container.innerHTML = "";
    europeNations.sort((a, b) => a.population - b.population);
    displayCountries(europeNations);
  }

  function sortByPopL() {
    container.innerHTML = "";
    europeNations.sort((a, b) => b.population - a.population);
    displayCountries(europeNations);
  }

function sortByName(){
    container.innerHTML = "";
    europeNations.sort((a, b) => a.name.official.localeCompare(b.name.official));
    displayCountries(europeNations);
}