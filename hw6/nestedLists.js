function showList(nestedList, parentElement, listTag = 'ul', itemTag = 'li') {
    const listElement = document.createElement(listTag);
    createHTMLList(nestedList, listElement, listTag, itemTag);

    parentElement.append(listElement);
}

function createHTMLList(nestedList, listElement, listTag, itemTag) {
    nestedList.forEach(item => {
        if (Array.isArray(item)) {
            const nestedUl = document.createElement(listTag);
            createHTMLList(item, nestedUl, listTag, itemTag);
            listElement.append(nestedUl);
        } else {
            const li = document.createElement(itemTag);
            li.textContent = item;
            listElement.append(li);
        }
    })
}

const nestedList = ["Item", ["Item2", ["Item3"]]];
showList(nestedList, document.querySelector('body'));
