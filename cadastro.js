function cadastrar(){
    var nome = document.getElementById('txtnome')
    var ulnome = document.getElementById('txtutnome')
    var telefone = document.getElementById('txttel')
    var email = document.getElementById('txtemail')
    var senha = document.getElementById('txtsenha')
    var comsenha = document.getElementById('txtcsenha')
    var ter = document.getElementsByName('termos')
    let checkbox = document.getElementById('box1')
    let cas = document.getElementById('cadas')
    let res = document.getElementById('res')

    if(checkbox.checked) {
        alert("ok");

    } else {
        console.log("O cliente não marcou o checkbox");
        alert("Por favor, aceite os termos e condições");
}






}