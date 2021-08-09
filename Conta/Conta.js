export class Conta{

    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instancia um objeto do tipo conta");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this.agencia =  agencia;

    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        return this._sacar();
        throw new Error("O método sacar da conta é abstrato");
    }

    _sacar(valor,taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valor;
        }

        return 0;
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){

        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}