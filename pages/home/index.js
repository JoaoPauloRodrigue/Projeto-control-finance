function generateCards (items) {

    const tagLiCard         = document.createElement('li');
    const tagPCard          = document.createElement('p');
    const tagDivCardImg     = document.createElement('div');
    const tagImgTypeEntry   = document.createElement('img');
    const tagImgTypeExit    = document.createElement('img');
    const tagImgTrashButton = document.createElement('img');

    tagLiCard.classList.add('card');
    
    tagPCard.innerText = `R$ ${items.value}`;

    tagDivCardImg.classList = 'img-container-tag';

    tagImgTypeEntry.src = '../../assets/Component 1tag-entrada.svg';
    tagImgTypeEntry.alt = 'tag com o tipo';

    tagImgTypeExit.src = '../../assets/Component 1tag-saida.svg';
    tagImgTypeExit.alt = 'tag com o tipo';

    tagImgTrashButton.classList = 'trash-button';
    tagImgTrashButton.src  = '../../assets/trashtrash-default.svg';
    tagImgTrashButton.alt  = 'Botao de delete';

    tagLiCard.append(tagPCard,tagDivCardImg);

    if(items.categoryID == 0){
        tagDivCardImg.append(tagImgTypeEntry,tagImgTrashButton);
    }
    else{
        tagDivCardImg.append(tagImgTypeExit,tagImgTrashButton);
    }

    tagImgTrashButton.addEventListener('click', (event) => {

        const index = dataAccountSaves.findIndex((element) => {
           return element.id == items.id;
        })
        dataAccountSaves.splice(index,1);

        insertCards (dataAccountSaves);
        addValue(dataAccountSaves);

    })

    return tagLiCard;
}

function insertCards (array) {

    const tagUl       = document.querySelector('#account-list');
    const cardDefault = document.querySelector('#container-no-data-registered');

    tagUl.innerHTML   = '';

    if(array.length){
        array.forEach((element)=> {

            const card = generateCards(element);
            tagUl.append(card);
            return card;
        })
        
        addValue(dataAccountSaves);

    } else {
        cardDefault.toggleAttribute('no-data-registered');
    }

}
insertCards (dataAccountSaves)

const buttonFilterAll   = document.querySelector('#all');
const buttonFilterEntry = document.querySelector('#entry');
const buttonFilterExit  = document.querySelector('#exit');

buttonFilterAll.addEventListener('click', (event) => {
    event.preventDefault();

    insertCards(dataAccountSaves);
    addValue(dataAccountSaves);
})

buttonFilterEntry.addEventListener('click', (event) => {
    event.preventDefault();
    const arrayFilterEntry = dataAccountSaves.filter((element) => {

        return element.categoryID == 0;
    })

    insertCards(arrayFilterEntry);
    addValue(arrayFilterEntry);
})

buttonFilterExit.addEventListener('click', (event) => {
    event.preventDefault();
    const arrayFilterExit = dataAccountSaves.filter((element) => {

        return element.categoryID == 1;
    })

    insertCards(arrayFilterExit);
    addValue(arrayFilterExit);
})

function addValue (array) {

    const showValue = document.querySelector('#show-value');
    
   let totalValue = array.reduce((previousValue, currentValue) => {

      return  previousValue + currentValue.value

    },0)

    showValue.innerText = `R$ ${totalValue}`;
}

