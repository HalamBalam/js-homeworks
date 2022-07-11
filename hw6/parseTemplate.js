function parseTemplate(template, fields) {
    for (let i = 0; i < template.children.length; i++) {
        const item = template.children[i];

        if (item.hasAttribute('data-field')) {
            const field = item.getAttribute('data-field');
            if (fields[field]) {
                item.textContent = fields[field];
            } else {
                console.log('Не найдено свойство: ' + field);
            }
        }

        if (item.children.length > 0) {
            parseTemplate(item, fields);
        }
    }
}

parseTemplate(
    document.getElementById('item1'),
{
        title: 'Hello world',
        description: 'The first program',
    }
);

parseTemplate(
    document.getElementById('item1'),
    {
        title: 'Hello world 2',
        wrongDescription: 'The second program',
    }
);
