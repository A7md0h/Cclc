function calculateProfit() {
    let amount = parseFloat(document.getElementById("amount").value);
    let cost = parseFloat(document.getElementById("cost").value);
    let currentPrice = parseFloat(document.getElementById("currentPrice").value);
    let currency = document.getElementById("currency").value;

    if (isNaN(amount) || isNaN(cost) || isNaN(currentPrice) || amount <= 0 || cost <= 0 || currentPrice <= 0) {
        document.getElementById("result").innerHTML = "⚠️ الرجاء إدخال قيم صحيحة.";
        document.getElementById("result").style.color = "#dc3545";
        return;
    }

    let totalCost = amount * cost;
    let totalCurrentValue = amount * currentPrice;
    let profitLoss = totalCurrentValue - totalCost;
    let profitLossPercentage = (profitLoss / totalCost) * 100;

    let resultMessage = `🔹 بالنسبة لعملة ${currency}: <br> 
                         💰 الربح / الخسارة: <strong>${profitLoss.toFixed(2)} دولار</strong> <br>
                         📈 النسبة: <strong>${profitLossPercentage.toFixed(2)}%</strong>`;

    if (profitLoss > 0) {
        document.getElementById("result").innerHTML = resultMessage;
        document.getElementById("result").style.color = "#28a745";
    } else {
        document.getElementById("result").innerHTML = resultMessage;
        document.getElementById("result").style.color = "#dc3545";
    }
}
