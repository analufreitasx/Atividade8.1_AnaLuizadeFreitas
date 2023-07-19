let saldo_usuario = parseInt(prompt( 'Bem vindo! Digite seu saldo atual:'))
const compra = parseInt (prompt(' Insira o valor da compra que deseja realizar: '))
if (compra<=saldo_usuario){
    saldo_usuario = saldo_usuario - compra
    alert (' Compra efetuada com sucesso! Seu novo saldo é R$ '+ saldo_usuario+'.')
}
else if (compra > saldo_usuario){
    alert(' Seu saldo é insuficiente para a compra.')
}