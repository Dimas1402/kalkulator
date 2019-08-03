let hasil= document.formAngka.isiText;
function ins(num){
  hasil.value = hasil.value += num;
}

  function hapusAll(){
    hasil.value=" ";
  }

function bcksp(){
  hasil.value= hasil.value.substr(0,hasil.value.length-1);
}

function samaDengan(){
  hasil.value= eval(hasil.value)
}