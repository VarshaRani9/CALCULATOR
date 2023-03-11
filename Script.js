const buttons = document.getElementsByClassName('button');
const inputField = document.getElementById('number-input');
const infoParagraph = document.getElementById('info')

console.log(inputField.value);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',(event)=>{
        // console.log(event.target.innerHTML);
        infoParagraph.style.display = 'none';
        let inputText = '';
        switch(event.target.innerHTML){
            case 'C':break;
            case '=':
                try{inputText = eval(inputField.value);}
                catch(e){
                    inputText = '';
                    infoParagraph.style.display = 'block';
                    infoParagraph.innerHTML = 'invalid operation';
                }
            break;
            case '⬅️':inputText = inputField.value.slice(0,inputField.value.length-1);
            break;
            default : inputText = `${inputField.value}${event.target.innerHTML}`;
        }

        inputField.value = inputText;
    });
    
}