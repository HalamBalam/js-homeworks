function showList(nestedList) {
    const ul = document.createElement('ul');
    createHTMLList(nestedList, ul);

    const body = document.querySelector('body');
    body.append(ul);
}

function createHTMLList(nestedList, ul) {
    nestedList.forEach(item => {
        if (typeof item === 'string') {
            const li = document.createElement('li');
            li.textContent = item;
            ul.append(li);
        } else {
            const nestedUl = document.createElement('ul');
            createHTMLList(item, nestedUl);
            ul.append(nestedUl);
        }
    })
}

const nestedList = ["Item", ["Item2", ["Item3"]]];
showList(nestedList);
