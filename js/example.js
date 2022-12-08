const nameH1Elemnet = document.querySelector('h1.inline');

const localName = localStorage.getItem('name');
const connectNameElement = document.querySelector('span.red');
if(localName) nameH1Elemnet.textContent = localName;
nameH1Elemnet.onclick = () =>{
    const inputName = prompt('이름을 입력해 주세요');

    if(inputName){
    localStorage.setItem('name', inputName);

    nameH1Elemnet.textContent = inputName;
    connectNameElement.textContent=inputName;
    }else {alert('내용을 입력하세요');}
}