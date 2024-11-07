// array que contenga las operaciones bancarias
const operacionesBancarias = [15000, -5000, 25000, -10000, 15500, -15000];

// Función para calcular saldos
function calculateBalances(operaciones){
    const totalDepositos = operaciones.filter(m => m > 0).reduce((sum, m) => sum + m, 0);
    const totalRetiros = operaciones.filter(m => m <= 0).reduce((sum, m) => sum + m, 0);

    return {
        totalDepositos,
        totalRetiros,
        saldoActual: totalDepositos + totalRetiros
    };
}

// Función para mostrar el balance bancario del cliente
function bankBalance(nombre, apellido, operaciones){
    const { totalDepositos, totalRetiros, saldoActual } = calculateBalances(operaciones);

    return `Estimada ${nombre} ${apellido}:
    El monto total de los depósitos es de: $${totalDepositos}.
    El monto total de los retiros es de: $${Math.abs(totalRetiros)}.
    Por lo tanto, su saldo actual en la cuenta es de: $${saldoActual}.`;
}

console.log(bankBalance("Gloria", "Medina", operacionesBancarias));
console.log(bankBalance("Moria", "Casán", [1000, -500, 200, -100, 1500]));

module.exports = bankBalance;