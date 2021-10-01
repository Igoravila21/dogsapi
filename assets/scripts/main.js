function getDogs(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}
function listaDog (dog){
    linha = document.createElement("tr");
    tdMessage = document.createElement("td");
    tdMessage.innerHTML = dog;

    linha.appendChild(tdMessage);

    return linha;
}
function imgDogsRandom (dogImg) {
    image = document.createElement("img");
    image.innerHTML = dogImg;
    return image;
}
function main () {
    let dataDogs = getDogs("https://dog.ceo/api/breeds/list/all");
    let dataImgDogs = getDogs("https://dog.ceo/api/breeds/image/random");
    let dogImgs = JSON.parse(dataImgDogs);
    dogImgs = dogImgs.message;
    console.log(dogImgs);
    let dogs = JSON.parse(dataDogs);
    dogs = dogs.message;

    let tabela = document.getElementById("tabela");
    Object.keys(dogs).forEach(element => {
       let linha = listaDog(element);
       tabela.appendChild(linha);
    });

    let img = document.getElementById("img");
    img.src = dogImgs;
}

main();