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
    'caption'
]

fetch(chrome.runtime.getURL('/data/orky.json'))
    .then((resp) => resp.json())
    .then(function (orky) {
        const elements = document.querySelectorAll(elementsToReplace.join(', '));
        let reg = new RegExp();
        let matches = []
        elements.forEach(element => {
            for (let index = 0; index < orky.length; index++) {
                const orkieLex = orky[index];
                orkieLex.umieWordz.forEach(umieWord => {
                    reg = new RegExp(`\\b${umieWord}\\b`, 'ig');
                    matches = element.innerHTML.match(reg)
                    if (matches && matches.length > 0)
                    {  
                        element.innerHTML = element.innerHTML.replace(reg, `${orkieLex.orkyWord}`);
                    }
                });
            }
        });
    });