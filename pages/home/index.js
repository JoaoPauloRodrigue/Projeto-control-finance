function generateCards (items) {

    const tagLiCard = document.createElement('li');
    const tagPCard = document.createElement('p');
    const tagDivCardImg = document.createElement('div');
    const tagImgTypeEntry = document.createElement('img');
    const tagImgTypeExit  = document.createElement('img');
    const tagImgTrashButton = document.createElement('img');

    tagLiCard.classList.add('card');
    
    tagPCard.innerText = `R$ ${items.value}`;

    tagDivCardImg.classList = 'img-container-tag';

    tagImgTypeEntry.src = '../../assets/Component 1tag-entrada.svg';
    tagImgTypeEntry.alt = 'tag com o tipo';

    tagImgTypeExit.src = '../../assets/Component 1tag-saida.svg';
    tagImgTypeExit.alt = 'tag com o tipo';

    tagImgTrashButton.src  = '../../assets/trashtrash-default.svg';
    tagImgTrashButton.alt  = 'Botao de delete';

    tagLiCard.append(tagPCard,tagDivCardImg);

    if(items.categoryID == 0){
        tagDivCardImg.append(tagImgTypeEntry,tagImgTrashButton);
    }
    else{
        tagDivCardImg.append(tagImgTypeExit,tagImgTrashButton);
    }

    return tagLiCard;
}

function insertCards (array) {

    const tagUl   = document.querySelector('#account-list');
    tagUl.innerHTML = '';

        array.forEach((element)=> {
            
            const card = generateCards(element);
            tagUl.append(card);
            return card;
        })
    
}
insertCards (dataAccountSaves)

const buttonFilterAll   = document.querySelector('#all');
const buttonFilterEntry = document.querySelector('#entry');
const buttonFilterExit  = document.querySelector('#exit');

buttonFilterAll.addEventListener('click', (event) => {
    event.preventDefault();
    // const arrayFilterAll = dataAccountSaves.filter((element) => {

    //     return dataAccountSaves;
    // })

    insertCards(dataAccountSaves);
})

buttonFilterEntry.addEventListener('click', (event) => {
    event.preventDefault();
    const arrayFilterEntry = dataAccountSaves.filter((element) => {

        return element.categoryID == 0;
    })

    insertCards(arrayFilterEntry);
})

buttonFilterExit.addEventListener('click', (event) => {
    event.preventDefault();
    const arrayFilterExit = dataAccountSaves.filter((element) => {

        return element.categoryID == 1;
    })

    insertCards(arrayFilterExit);
})