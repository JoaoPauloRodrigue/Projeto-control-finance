function generateModal() {

    const main                        = document.querySelector('#app');
    const tagDivActivatedModal        = document.createElement('div');
    const tagSection                  = document.createElement('section');
    const tagDivHeaderModal           = document.createElement('div');
    const tagH2                       = document.createElement('h2');
    const tagButtonClose              = document.createElement('button');
    const tagPDescription             = document.createElement('p');
    const tagFormModal                = document.createElement('form');
    const tagDivInputInsert           = document.createElement('div');
    const tagLabelValue               = document.createElement('label');
    const tagInputValue               = document.createElement('input');
    const tagDivInputTag              = document.createElement('div');
    const tagLabelTag                 = document.createElement('label');
    const tagDivInputSelectModal      = document.createElement('div');
    const tagButtonEntry              = document.createElement('button');
    const tagButtonExit               = document.createElement('button');
    const tagDivButtonInsert          = document.createElement('div');
    const tagButtonInsertCancel       = document.createElement('button');
    const tagButtonInsertConfirm      = document.createElement('button');

    tagDivActivatedModal.classList.add('modal-activated');

    tagSection.classList = 'modal-container flex direction-col align-items position-absolute';

    tagDivHeaderModal.classList = 'header-modal flex justify-content-space-between align-items-center';

    tagH2.classList ='title-2-bold flex direction-row align-items-center justify-content-space-between';
    tagH2.innerText = 'Registro de valor';

    tagButtonClose.classList = 'title-2-bold flex direction-col justify-content-center align-items-center';
    tagButtonClose.innerText = 'X';
    tagButtonClose.id        = 'button-close';

    tagPDescription.classList.add('text-1-bold');
    tagPDescription.innerText = 'Digite o valor e em seguida aperte no botão referente ao tipo de valor';

    tagFormModal.classList = 'search-type-value flex direction-col align-items';
    tagFormModal.id = 'money-insert';

    tagDivInputInsert.classList = 'input-insert-modal flex direction-col';

    tagLabelValue.htmlFor ='value';
    tagLabelValue.innerText = 'Valor';

    tagInputValue.name = 'value';
    tagInputValue.type = 'number';
    tagInputValue.placeholder = 'R$ 00,00';

    tagDivInputTag.classList.add('input-tag-modal');

    tagLabelTag.innerText = 'Tipo de valor';

    tagDivInputSelectModal.classList = 'input-select-modal text-3-medium';

    tagButtonEntry.classList = 'button-entry-modal';
    tagButtonEntry.innerText = 'Entrada';

    tagButtonExit.classList = 'button-exit-modal';
    tagButtonExit.innerText = 'Saída';

    let typeEntry = 0;

    tagButtonEntry.addEventListener('click', (event) => {
        event.preventDefault();
        typeEntry = 0;
    })

    tagButtonExit.addEventListener('click', (event) => {
        event.preventDefault();
        typeEntry = 1;
    })

    tagButtonInsertConfirm.addEventListener('click', (event) =>{
        event.preventDefault();

        const newUser = {

                id: dataAccountSaves.length,
                value: +tagInputValue.value,
                categoryID: typeEntry,
              
        }

        dataAccountSaves.push(newUser);
        insertCards (dataAccountSaves);
        tagDivActivatedModal.remove();
    })

    tagDivButtonInsert.classList = 'button-insert-modal flex direction-row align-items-center justify-content-center';

    tagButtonInsertCancel.classList = 'button-modal title-2-bold';
    tagButtonInsertCancel.innerText = 'Cancelar';
    tagButtonInsertCancel.id        = 'button-modal-cancel';

    tagButtonInsertCancel.addEventListener('click', (event) => {
        event.preventDefault();

        tagDivActivatedModal.remove();
    })

    tagButtonClose.addEventListener('click', (event) => {
        event.preventDefault();

        tagDivActivatedModal.remove();
    })

    tagButtonInsertConfirm.type = 'submit';
    tagButtonInsertConfirm.classList = 'button-modal-accept title-2-bold color-bg-purple color-white';
    tagButtonInsertConfirm.innerText = 'Inserir valor';

    tagDivActivatedModal.append(tagSection);
    tagSection.append(tagDivHeaderModal,tagPDescription,tagFormModal);
    tagDivHeaderModal.append(tagH2,tagButtonClose);
    tagFormModal.append(tagDivInputInsert,tagDivInputTag,tagDivButtonInsert);
    tagDivInputInsert.append(tagLabelValue,tagInputValue);
    tagDivInputTag.append(tagLabelTag,tagDivInputSelectModal);
    tagDivInputSelectModal.append(tagButtonEntry,tagButtonExit);
    tagDivButtonInsert.append(tagButtonInsertCancel,tagButtonInsertConfirm);
    
    return tagDivActivatedModal;
}

function openModal() {

    const showModal          = document.querySelector('.button-register-nav');
    const showModalOptionTwo = document.querySelector('.no-data-registered');

    showModal.addEventListener('click', (event) => {

        const main = document.querySelector('#app');
        const modalCreated = generateModal();

        main.append(modalCreated);
        
    })

    showModalOptionTwo.addEventListener('click', (event) => {

        const main = document.querySelector('#app');
        const modalCreated = generateModal();

        main.append(modalCreated);
        

    })
}
openModal()

