
const users = {
    "rocha": "307492",
    "campos": "popgma2025",
    "ropgma": "ropgma25",
    "vanisson": "gsi2@25"
};

function inserir() {
    // Clona a div original
    var div2 = document.querySelector("#tabelaconduz").cloneNode(true);

    // Adiciona a div clonada após a original
    document.querySelector("#tabelaconduz").after(div2);

    // Torna a div clonada visível
    div2.style.display = "block";

    // Adiciona o botão "EXCLUIR" na div clonada
    var excluirBtn = document.createElement("button");
    excluirBtn.innerHTML = "EXCLUIR";
    excluirBtn.classList.add("excluir-btn"); // Aplica a classe do botão
    excluirBtn.onclick = function () { ocultarDiv(div2); }; // Ao clicar, a div clonada será ocultada

    // Cria um container para centralizar o botão
    var buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.appendChild(excluirBtn);

    // Adiciona o botão de exclusão à div clonada dentro do container
    div2.appendChild(buttonContainer);
}

// Função para ocultar a div clonada
function ocultarDiv(div) {
    div.style.display = "none"; // Oculta a div
}


let fileInput = document.getElementById("file-input");
let imageContainer = document.getElementById("images");
let numOfFiles = document.getElementById("num-of-files");

function preview() {
    imageContainer.innerHTML = "";  // Limpa o container antes de exibir as novas imagens
    numOfFiles.textContent = `${fileInput.files.length} Arquivo(s) Selecionado(s)`;

    for (let i of fileInput.files) {
        let reader = new FileReader();
        let figure = document.createElement("figure");
        let figCap = document.createElement("figCaption");
        //figCap.innerText = i.name;
        figure.appendChild(figCap);

        // Função para excluir a imagem quando o botão for clicado
        function excluirImagem() {
            figure.remove();  // Remove o elemento <figure> (que contém a imagem e a legenda)
        }

        // Leitura do arquivo e exibição da imagem
        reader.onload = () => {
            let img = document.createElement("img");
            img.setAttribute("src", reader.result);
            figure.insertBefore(img, figCap);  // Adiciona a imagem antes da legenda

            // Criação do botão de excluir
            let btnExcluir = document.createElement("button");
            btnExcluir.textContent = "Excluir";
            btnExcluir.style.backgroundColor = "red";  // Cor vermelha para o botão
            btnExcluir.style.color = "white";
            btnExcluir.style.border = "none";
            btnExcluir.style.padding = "5px 10px";
            btnExcluir.style.cursor = "pointer";
            btnExcluir.onclick = excluirImagem;  // Chama a função de excluir ao clicar

            // Adiciona o botão de excluir dentro da <figure>
            figure.appendChild(btnExcluir);
        };

        imageContainer.appendChild(figure);  // Adiciona a <figure> ao contêiner
        reader.readAsDataURL(i);  // Lê o arquivo como URL para exibir a imagem
    }
}


function login() {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (users[username] && users[username] === password) {
        window.location.href = "rop.html"; // Redireciona para outra página
    } else {
        message.style.color = "red";
        message.textContent = "Usuário ou senha incorretos!";
    }
}


const uploadInput = document.getElementById('upload');
const previewContainer = document.getElementById('previewContainer');

uploadInput.addEventListener('change', function () {
    const files = this.files;

    Array.from(files).forEach(file => {
        if (!file.type.startsWith('image/')) return;

        const reader = new FileReader();
        reader.onload = function (e) {
            const imageBox = document.createElement('div');
            imageBox.classList.add('image-box');

            const img = document.createElement('img');
            img.src = e.target.result;

            const removeBtn = document.createElement('button');
            removeBtn.classList.add('remove-btn');
            removeBtn.textContent = 'Remover';

            removeBtn.addEventListener('click', () => {
                previewContainer.removeChild(imageBox);
            });

            imageBox.appendChild(img);
            imageBox.appendChild(removeBtn);
            previewContainer.appendChild(imageBox);
        };

        reader.readAsDataURL(file);
    });

    this.value = ''; // Permite reupload da mesma imagem
});




