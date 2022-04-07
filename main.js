console.log("Testing")

document.body.style.backgroundImage = "url('https://images6.alphacoders.com/112/thumb-1920-1127012.jpg')";

let profileDiv1 = document.querySelector('#profile')

fetch ('https://api.github.com/users/Manny-D', {
    method: 'GET',
    headers: {},
})
    .then(function(response) {  // response: what you got from code above 
        return response.json()
    })
    .then (function (data) {  // data is what's retuned in line 10
        console.log('The response is', data)

        // test image - working
        let pImg = document.createElement('img')
        pImg.classList.add('image')
        pImg.src = `https://avatars.githubusercontent.com/u/99146530?v=4`
        profileDiv1.appendChild(pImg)

        let nameDiv = document.createElement('p')
        nameDiv.classList.add('name')
        nameDiv.innerText = data.name
        profileDiv1.appendChild(nameDiv)
    // })


//Profile section part 2 - Location, GH URL and GH Username - working
let profileDiv2 = document.querySelector('#profile2')

        //test - GitHub Info - url not spacing
        let pGhloc = document.createElement('p')
        pGhloc.classList.add('ghLocation')
        pGhloc.innerText = `Location: ${data.location}`
        profileDiv2.appendChild(pGhloc)


        let pGhurl = document.createElement('p')
        // pGhurl.classList.add('url')
        let a = document.createElement('a')
        pGhurl.innerText = `GitHub URL:`
        profileDiv2.appendChild(pGhurl)
        let link = document.createTextNode(`${data.login}`)
        a.appendChild(link)
        a.title = `${data.login}`
        a.href = `${data.html_url}`
        profileDiv2.appendChild(a)


        let pGhun = document.createElement('p')
        pGhun.classList.add('username')
        pGhun.innerText = `GitHub Username: ${data.login}`
        profileDiv2.appendChild(pGhun)

    })

// Test - Repo Header - working
let reposDiv = document.querySelector('#repoheader')
    let pGhRepoText = document.createElement('h2')
    // pGhRepoText.classList.add('repohead')
    pGhRepoText.innerText = `GitHub Repos`
    reposDiv.appendChild(pGhRepoText)


// Test - Repo body - working
let reposDiv2 = document.querySelector('#myrepos')
        fetch ('https://api.github.com/users/Manny-D/repos', {
            method: 'GET',
            headers: {},
        })
            .then(function(response) {  
                return response.json()
            })
            .then (function (data) {  
                console.log('The response is', data)
                

        // Test - repo name and link - working
            let pRepoList = document.createElement('div');
                
        // Test - repo listing 1 - working  
                pRepoList.classList.add('pRepolist') // never added
                document.getElementsByClassName('pRepolist')
                let a = document.createElement('a');
                //let link = document.createTextNode("Profile");
                let link = document.createTextNode(`${data[0].name}`);
                a.appendChild(link);
                // a.title = `${data[0].name}`;  don't need for now -> title
                a.href = `${data[0].html_url}`
                reposDiv2.appendChild(pRepoList)
                reposDiv2.appendChild(a)
                

        // Test - repo listing 2 - working 
                let pRepoListb = document.createElement('p');
                pRepoListb.classList.add('pRepolist')
                document.getElementsByClassName('pRepolistb')
                let b = document.createElement('a');
                let linkb = document.createTextNode(`${data[1].name}`);
                b.appendChild(linkb);
                b.title = `${data[1].name}`;
                b.href = `${data[1].html_url}`
                reposDiv2.appendChild(pRepoListb)
                reposDiv2.appendChild(b);


                let pRepoListc = document.createElement('p');
                pRepoListc.classList.add('pRepolist')
                document.getElementsByClassName('pRepolistc')
                let c = document.createElement('a');
                let linkc = document.createTextNode(`${data[2].name}`);
                c.appendChild(linkc);
                c.title = `${data[2].name}`;
                c.href = `${data[2].html_url}`
                reposDiv2.appendChild(pRepoListc)
                reposDiv2.appendChild(c);

                

                let pRepoListd = document.createElement('p');
                pRepoListd.classList.add('pRepolist')
                document.getElementsByClassName('pRepolistd')
                let d = document.createElement('a');
                let linkd = document.createTextNode(`${data[3].name}`);
                d.appendChild(linkd);
                d.title = `${data[3].name}`;
                d.href = `${data[3].html_url}`
                reposDiv2.appendChild(pRepoListd)
                reposDiv2.appendChild(d);


                let pRepoListe = document.createElement('p');
                pRepoListe.classList.add('pRepolist')
                document.getElementsByClassName('pRepoliste')
                let e = document.createElement('a');
                let linke = document.createTextNode(`${data[4].name}`);
                e.appendChild(linke);
                e.title = `${data[4].name}`;
                e.href = `${data[4].html_url}`
                reposDiv2.appendChild(pRepoListe)
                reposDiv2.appendChild(e);

        })