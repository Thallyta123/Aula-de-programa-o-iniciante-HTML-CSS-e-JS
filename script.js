const btn = document.getElementById('btn');
const imagem = document.querySelector('#img-perfil');
const img1 = "foto-perfil.jpg";
const img2 = "avatar-masculino.jpg"
btn.addEventListener('click', () => {
    if (imagem.src === img1 || imagem.src.endsWith("perfil.jpg") ) {
        imagem.src = img2;
        imagem.alt = "imagem do avatar"
    } else {
        imagem.src = img1;
        imagem.alt = "imagem de perfil"
    }
})