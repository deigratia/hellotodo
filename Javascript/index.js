const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const addButton = document.getElementById('addButton');

var label = []

// fungsi untuk tambah list ke dom
const showList = function(){
  outputText.innerHTML = "";
  label.forEach((data,index) => {
    var create = document.createElement('div')
    create.id = index;
    create.innerHTML =`<span>${data}</span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    <button class="btn btn-outline-light" onclick="deleteTodo(${index})">Delete</button>&nbsp|
    <button class="btn btn-outline-light" onclick="editTodo(${index})">Edit</i><b>`;
    outputText.appendChild(create)
  })
}

//cek if localStorage.data
if (localStorage.data) {
  label = JSON.parse(localStorage.data)
  showList()
}

//fungsi nambah
const addTodo = function () {
  label.push(inputText.value)
  localStorage.data = JSON.stringify(label)
  showList()
}

//fungsi hapus semua
const clearTodo = function() {
  label = [];
  outputText.innerHTML = "";
  localStorage.clear()
}

//fungsi deleteTodo
const deleteTodo = function(index){
  label.splice(index, 1)
  localStorage.data = JSON.stringify(label);
  showList()
}

//fungsi edit
const editTodo =function(index) {
  var edit = prompt('Edit Text')
  label[index] = edit
  localStorage.data = JSON.stringify(label);
  showList()
}

addButton.addEventListener("click", addTodo)
addButton1.addEventListener("click", clearTodo)
