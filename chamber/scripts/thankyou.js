
const info = new URLSearchParams(window.location.search);


document.querySelector('#results').innerHTML = 
    `<p>Your name is ${info.get('first')} ${info.get('last')}</p>
    <p>Your phone number is ${info.get('phone')}</p>
    <p> your email is ${info.get('email')}</p>
    <p>Your business name is ${info.get('businessname')}</p>
    <p>The timestamp is ${info.get('timestamp') }</p>`