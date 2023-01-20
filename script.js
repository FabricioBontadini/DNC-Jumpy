function validadeForm(){
    let x = document.forms['myForm'] ['fname'].value;
    let y = document.forms['myForm'] ['fmail'].value;
    let z = document.forms['myForm'] ['tel'].value;
    let x1 = document.forms['myForm'] ['cpf'].value;
    let x2 = document.forms['myForm'] ['senha'].value;

    if(x == "") {
        // alert("preencha o Campo nome");
        var erro = document.getElementById('erroname');
        erroname.innerHTML = "NOME = Campo Obrigátorio*";
    
    }
    if(y == "") {
        // alert("preencha o Campo nome");
        var erro1 = document.getElementById('erroemail');
        erro1.innerHTML = "E-MAIL= Campo Obrigátorio*";
    }

    if(z == "") {
        // alert("preencha o Campo nome");
        var erro2 = document.getElementById('errotel');
        erro2.innerHTML = "TELEFONE = Campo Obrigátorio*";
    }

    if(x1 == "") {
    // alert("preencha o Campo nome");
    var erro3 = document.getElementById('errocpf');
    erro3.innerHTML = "CPF = Campo Obrigátorio*";
    }

    if(x2 == "") {
    // alert("preencha o Campo nome");
    var erro4 = document.getElementById('errosenha');
    erro4.innerHTML = "SENHA = Campo Obrigátorio*";
    }
        

    if(x == "" || y == "" || z == "" || x1 == "" || x2 != "" ) {
    // alert("preencha o Campo nome");
    var obritagorio = document.getElementById('obrigatorio');
    obrigatorio.innerHTML = "Campos Obrigatórios não preenchidos";
    }
    
    if(x != "" && y != "" && z != "" && x1 != "" && x2 != "" ) {
        // alert("preencha o Campo nome");
        var sucesso = document.getElementById('sucesso');
        sucesso.innerHTML = "Sucesso";
    }

    return false;
}

