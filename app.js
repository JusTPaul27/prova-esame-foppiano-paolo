fetch('https://restcountries.com/v3.1/region/europe')
.then(resp => resp.json())
.then(res => displayCountries(res));

function displayCountries(nations) {
    
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
        } 

        const unMemberImg = document.createElement('img');
        function unMember() {
            if (nation.unMember === true) {
                return 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/UN_flag.png/1024px-UN_flag.png'
            } else {
                return 'https://i.ytimg.com/vi/H9VO34S4NMY/maxresdefault.jpg'
            }
        }
        unMemberImg.src = unMember();
        unMemberImg.style.height = '80px';
        unMemberImg.style.width = '120px'
        nationDiv.appendChild(unMemberImg);


        container.appendChild(nationDiv);
    }
}