const elementsToReplace = [
    'p',
    'span',
    'h1',
    'h2',    
    'h3',
    'h4',
    'h5',
    'h6',
    'h7',
    'li',
    'td',
    'caption',
    'a'
]

fetch(chrome.runtime.getURL('/data/orky.json'))
    .then((resp) => resp.json())
    .then(function (orky) {
        let bodyText = document.body.innerText
        console.log(bodyText);
        for (let index = 0; index < orky.length; index++) {
            const element = orky[index];
            element.umieWordz.forEach(umieWord => {
                bodyText = bodyText.replace(umieWord, element.orkyWord);
            });
        }
        console.log(bodyText);
        document.body.innerText = bodyText;
    });