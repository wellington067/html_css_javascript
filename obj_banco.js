function banco(conta, saldo, tipoDeConta, agencia){
    this.conta = 0958;
    this.saldo = 500;
    this.tipoDeConta = "conta_corrente";
    this.agencia = 00323;

    mostrasaldo = function valorSaldo(){
        return console.log(this.saldo);
    }

    deposito = function deposito(quantia = 300){
        var novosaldo = this.saldo + quantia;
        console.log(novosaldo);
    }

    saque = function saque(quantia = 20){
        var novosaldo = this.saldo - quantia;
        console.log(novosaldo)
    }

    numerodaconta = function mostrarnumerodaconta(){
        return console.log(this.conta);
    }
}

//=================================================================================
//                     segunda forma de criar um objeto
//=================================================================================



var banco = {conta:"5435", saldo: 200, tipodeconta: "contacorrente", agencia: "76859",
        mostrarsaldo: function(){
            console.log(this.saldo);
        },
        deposito: function(quantia){
            var novosaldo = parseFloat(this.saldo) + parseFloat(quantia);
            console.log(novosaldo);
        },

        saque: function(quantia){
            var novosaldo = parseFloat(this.saldo) - parseFloat(quantia);
            console.log(novosaldo)
        },

        numerodaconta: function(){
            console.log(this.conta)
        }
    }; 
