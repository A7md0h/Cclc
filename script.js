// التأكد من تحميل الصفحة بالكامل قبل تشغيل JavaScript
document.addEventListener("DOMContentLoaded", function () {
    let calculateBtn = document.getElementById("calculateBtn");

    if (calculateBtn) {
        calculateBtn.addEventListener("click", calculateProfit);
    }
});

function calculateProfit() {
    let currency = document.getElementById("currency").value.trim();
    let amount = document.getElementById("amount").value.trim();
    let cost = document.getElementById("cost").value.trim();
    let currentPrice = document.getElementById("currentPrice").value.trim();
    let resultDiv = document.getElementById("result");

    // التحقق من صحة المدخلات
    if (currency === "") {
        resultDiv.innerHTML = "⚠️ الرجاء إدخال اسم العملة.";
        resultDiv.style.color = "#dc3545";
        return;
    }

    if (amount === "" || isNaN(amount) || parseFloat(amount) <= 0) {
        resultDiv.innerHTML = "⚠️ الرجاء إدخال عدد العملات بشكل صحيح.";
        resultDiv.style.color = "#dc3545";
        return;
    }

    if (cost === "" || isNaN(cost) || parseFloat(cost) <= 0) {
        resultDiv.innerHTML = "⚠️ الرجاء إدخال متوسط التكلفة بشكل صحيح.";
        resultDiv.style.color = "#dc3545";
        return;
    }

    if (currentPrice === "" || isNaN(currentPrice) || parseFloat(currentPrice) <= 0) {
        resultDiv.innerHTML = "⚠️ الرجاء إدخال السعر الحالي بشكل صحيح.";
        resultDiv.style.color = "#dc3545";
        return;
    }

    // تحويل القيم إلى أرقام
    amount = parseFloat(amount);
    cost = parseFloat(cost);
    currentPrice = parseFloat(currentPrice);

    // حساب القيم
    let totalCost = amount * cost;
    let totalCurrentValue = amount * currentPrice;
    let profitLoss = totalCurrentValue - totalCost;
    let profitLossPercentage = (profitLoss / totalCost) * 100;

    // تنسيق النتيجة وعرضها
    let resultMessage = `🔹 بالنسبة لعملة <strong>${currency}</strong>: <br> 
                         💰 الربح / الخسارة: <strong>${profitLoss.toFixed(2)} دولار</strong> <br>
                         📈 النسبة: <strong>${profitLossPercentage.toFixed(2)}%</strong>`;

    // تحديد لون النتيجة بناءً على الربح أو الخسارة
    if (profitLoss > 0) {
        resultDiv.innerHTML = resultMessage;
        resultDiv.style.color = "#28a745";
    } else {
        resultDiv.innerHTML = resultMessage;
        resultDiv.style.color = "#dc3545";
    }
}
