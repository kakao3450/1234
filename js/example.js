const nameH1Elemnet = document.querySelector('h1.inline');
const connectNameElement = document.querySelector('span.red');

const studentNo = document.querySelector('.studentNo');

const studentEmail = document.querySelector('.email');

const inputModalElement = document.querySelector('#inputModal');

const setUserName = (name) =>{
    nameH1Elemnet.textContent = name;
    connectNameElement.textContent = name;
}
const setStudentNo = (num) =>{
    studentNo.textContent = num;
}

const setEmail = (email) =>{
    studentEmail.textContent = email;
}


const localName = localStorage.getItem('name');
if(localName) {
    setUserName(localName);
 }
 const localNo = localStorage.getItem('num');
if(localNo) {
    setUserName(localNo);
 }
 const localEmail = localStorage.getItem('email');
 if(localEmail) {
     setUserName(localEmail);
  }

nameH1Elemnet.onclick = () =>{
    inputModalElement.showModal();
    // const inputName = prompt('이름을 입력해 주세요');

    //  if(inputName){
    //  localStorage.setItem('name', inputName);

    // setUserName(inputName);
    // }else {alert('내용을 입력하세요');}
    
    
   
}
const modalSubnitBtn = document.querySelector('button.modalSubmit');

modalSubnitBtn.onclick = () =>{
    const modalFormElement = document.querySelector('.modalForm');
    const formData = new FormData(modalFormElement);

    for(const [key, value] of formData){
        localStorage.setItem(key,value);
        if(key==='userName') {setUserName(value);}
        if(key==='studentNo') {setStudentNo(value);}
        if(key==='email'){setEmail(value);}
    }

    inputModalElement.close();
}

inputModalElement.onclick = (event)=> {
    if(event.target.nodeName ==='DLALOG') inputModalElement.close();
}