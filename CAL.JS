
let CuNo = '';

function add_No(value) {
  CuNo = document.getElementById('input').value;
  CuNo += value;

  document.getElementById('input').value= CuNo;
}

function clear_No(){
document.getElementById('input').value="  ";

}

function show_result(){

    try {
      const result = eval(document.getElementById('input').value);
      document.getElementById('input').value = result;
    } catch (error) {
      document.getElementById('input').value = 'Error';
   
   }

}

function Decimal() {
  var CuNO = document.getElementById('input').value;
  if (!CuNo.includes('.')) {
    CuNo += '.';
    document.getElementById('input').value = CuNO;
    add_No('.');
  
  }
}

function openPar() {
  var CuNO = document.getElementById('input').value;
  var lastChar = CuNO.slice(-1);
  if (!isNaN(lastChar) || lastChar === ')') {
    document.getElementById('input').value += '(';
  }
}

function closePar() {
  var current = document.getElementById('input').value;

  var openCount = (current.match(/\(/g) || []).length;
  var closeCount = (current.match(/\)/g) || []).length;

  if (openCount > closeCount) {
    document.getElementById('input').value += ')';
  }
}
