
function showSum(){
    var prdName = document.getElementById("Prd_Name").value;
    var Qty = document.getElementById("Qty").value;
    var Prce = document.getElementById("Prce").value;

    var Ttl = Qty * Prce;
    document.getElementById("Ttl").value = Ttl;
}
