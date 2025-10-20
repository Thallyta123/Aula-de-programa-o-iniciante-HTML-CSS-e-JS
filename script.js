const btn = document.getElementById('btn');
const imagem = document.querySelector('#img-perfil');
const nomeAluno = document.querySelector('#nomeAluno');
const bioAluno = document.querySelector('#bioAluno');
const img1 = "images/foto-perfil.jpg";
const username = "cerdeloma"; // aqui vai o seu username do github

async function fetchGithub(username) {
    const userUrl = `https://api.github.com/users/${username}`;

    try {
        const userResponse = await fetch(userUrl)
        if (!userResponse.ok) {
            if (userResponse.status === 404) throw new Error('Usuário não encontrado');
            throw new Error('Erro ao buscar o usuário');
        }
        const userData = await userResponse.json();

        getImage(userData["avatar_url"]);
        getName(userData.name)
        getBio(userData.bio)

        console.log('userData => ', userData);
    } catch (err) {
        console.log(err.message)
    } 
}

function getImage(image) {
    btn.addEventListener('click', () => {
    if (imagem.src === img1 || imagem.src.endsWith("perfil.jpg") ) {
        imagem.src = image;
        imagem.alt = "imagem do avatar"
    } else {
        imagem.src = img1;
        imagem.alt = "imagem de perfil"
    }
})
}

function getName(name) {
    nomeAluno.innerHTML = `${name}`;
}

function getBio(bio) {
    bioAluno.innerHTML = `${bio}`;
}

fetchGithub(username);