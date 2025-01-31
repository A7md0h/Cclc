// عند تحميل الصفحة، إضافة حدث للنقر على الزر
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculateBtn").addEventListener("click", calculateProfit);
});

function calculateProfit() {
    let currency = document.getElementById("currency").value.trim();
    let amount = parseFloat(document.getElementById("amount").value);
    let cost = parseFloat(document.getElementById("cost").value);
    let currentPrice = parseFloat(document.getElementById("currentPrice").value);
    let resultDiv = document.getElementById("result");

    // التحقق من صحة المدخلات
    if (currency === "") {
        resultDiv.innerHTML = "⚠️ الرجاء إدخال اسم العملة.";
        resultDiv.style.color = "#dc3545";
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        resultDiv.innerHTML = "⚠️ الرجاء إدخال عدد العملات بشكل صحيح.";
        resultDiv.style.color = "#dc3545";
        return;
    }

    if (isNaN(cost) || cost <= 0) {
        resultDiv.innerHTML = "⚠️ الرجاء إدخال متوسط التكلفة بشكل صحيح.";
        resultDiv.style.color = "#dc3545";
        return;
    }

    if (isNaN(currentPrice) || currentPrice <= 0) {
        resultDiv.innerHTML = "⚠️ الرجاء إدخال السعر الحالي بشكل صحيح.";
        resultDiv.style.color = "#dc3545";
        return;
    }

    // حساب القيم
    let totalCost = amount * cost;
    let totalCurrentValue = amount * currentPrice;
    let profitLoss = totalCurrentValue - totalCost;
    let profitLossPercentage = (profitLoss / totalCost) * 100;

    // تنسيق النتيجة وعرضها
    let resultMessage = `🔹 بالنسبة لعملة <strong>${currency}</strong>: <br> 
                         💰 الربح / الخسارة: <strong>${profitLoss.toFixed(2)} دولار</strong> <br>
                         📈 النسبة: <strong>${profitLossPercentage.toFixed(2)}%</strong>`;

    if (profitLoss > 0) {
        resultDiv.innerHTML = resultMessage;
        resultDiv.style.color = "#28a745";
    } else {
        resultDiv.innerHTML = resultMessage;
        resultDiv.style.color = "#dc3545";
    }
}
