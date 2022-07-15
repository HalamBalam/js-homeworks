function setAttributesToChildren(parentItem, fields) {
    for (let i = 0; i < parentItem.children.length; i++) {
        const item = parentItem.children[i];

        if (item.hasAttribute('data-field')) {
            const field = item.getAttribute('data-field');
            if (fields[field]) {
                item.textContent = fields[field];
            } else {
                console.log('Не найдено свойство: ' + field);
            }
        }

        if (item.children.length > 0) {
            setAttributesToChildren(item, fields);
        }
    }
}

setAttributesToChildren(
    document.getElementById('item1'),
{
        title: 'Hello world',
        description: 'The first program',
    }
);

setAttributesToChildren(
    document.getElementById('item1'),
    {
        title: 'Hello world 2',
        wrongDescription: 'The second program',
    }
);
