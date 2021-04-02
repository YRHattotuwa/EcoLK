// menu toggle button
function toggle(){
    const toggle=document.querySelector('.toggle');
    const banner=document.querySelector('.banner');
    toggle.classList.toggle('active');
    banner.classList.toggle('active');
}

function setDefaults() {
    document.getElementById("current_order_brand").innerHTML = "Eco-Products SL";
    document.getElementById("current_order_product").innerHTML = "Bags";
    var priceproduct = 1000;
    document.getElementById("current_order_size").innerHTML = "Medium";
    var pricesize = 2500;
    document.getElementById("current_order_extras").innerHTML = "Eco-friendly packaging";
    var priceextras = 500;
    var total = priceproduct + pricesize + priceextras;
    document.getElementById("current_order_total").innerHTML = total;
}

function setManufacturer() {
    if (document.getElementById('ecoproductsl').checked) {
        x = document.getElementById('ecoproductsl').value;
        document.getElementById("current_order_brand").innerHTML = x;
    }
    else if (document.getElementById('ecowarelanka').checked) {
        x = document.getElementById('ecowarelanka').value;
        document.getElementById("current_order_brand").innerHTML = x;
    }
    else if (document.getElementById('trickledown').checked) {
        x = document.getElementById('trickledown').value;
        document.getElementById("current_order_brand").innerHTML = x;
    }
    else if (document.getElementById('backtoearth').checked) {
        x = document.getElementById('backtoearth').value;
        document.getElementById("current_order_brand").innerHTML = x;
    }
}

function setProduct() {
    if (document.getElementById('bags').checked) {
        x = document.getElementById('bags').value;
        document.getElementById("current_order_product").innerHTML = x;
        var priceproduct = 1000;

        if (document.getElementById('small').checked) {
            y = document.getElementById('small').value;
            document.getElementById("current_order_size").innerHTML = y;
            var pricesize = 0
        }
        else if (document.getElementById('medium').checked) {
            y = document.getElementById('medium').value;
            document.getElementById("current_order_size").innerHTML = y;
            var pricesize = 2500;
        }
        else if (document.getElementById('large').checked) {
            y = document.getElementById('large').value;
            document.getElementById("current_order_size").innerHTML = y;
            var pricesize = 5000;
        }
        var z = document.getElementById("others").value;
        document.getElementById("current_order_extras").innerHTML = z;

        if (z = "Eco-friendly packaging") {
            var priceextras = 500;
        }
        else if (z = "Eco-friendly greeting cards") {
            var priceextras = 1000;
        }
        else if (z = "Eco-friendly decorations") {
            var priceextras = 1500;
        }
        var total = priceproduct + pricesize + priceextras;
        document.getElementById("current_order_total").innerHTML = total;

    }
    else if (document.getElementById('plates').checked) {
        x = document.getElementById('plates').value;
        document.getElementById("current_order_product").innerHTML = x;
        var priceproduct = 2000;

        if (document.getElementById('small').checked) {
            y = document.getElementById('small').value;
            document.getElementById("current_order_size").innerHTML = y;
            var pricesize = 0
        }
        else if (document.getElementById('medium').checked) {
            y = document.getElementById('medium').value;
            document.getElementById("current_order_size").innerHTML = y;
            var pricesize = 2500;
        }
        else if (document.getElementById('large').checked) {
            y = document.getElementById('large').value;
            document.getElementById("current_order_size").innerHTML = y;
            var pricesize = 5000;
        }
        var z = document.getElementById("others").value;
        document.getElementById("current_order_extras").innerHTML = z;

        if (z = "Eco-friendly packaging") {
            var priceextras = 500;
        }
        else if (z = "Eco-friendly greeting cards") {
            var priceextras = 1000;
        }
        else if (z = "Eco-friendly decorations") {
            var priceextras = 1500;
        }
        var total = priceproduct + pricesize + priceextras;
        document.getElementById("current_order_total").innerHTML = total;

    }
    else if (document.getElementById('mugs').checked) {
        x = document.getElementById('mugs').value;
        document.getElementById("current_order_product").innerHTML = x;
        var priceproduct = 2500;

        if (document.getElementById('small').checked) {
            y = document.getElementById('small').value;
            document.getElementById("current_order_size").innerHTML = y;
            var pricesize = 0
        }
        else if (document.getElementById('medium').checked) {
            y = document.getElementById('medium').value;
            document.getElementById("current_order_size").innerHTML = y;
            var pricesize = 2500;
        }
        else if (document.getElementById('large').checked) {
            y = document.getElementById('large').value;
            document.getElementById("current_order_size").innerHTML = y;
            var pricesize = 5000;
        }
        var z = document.getElementById("others").value;
        document.getElementById("current_order_extras").innerHTML = z;

        if (z = "Eco-friendly packaging") {
            var priceextras = 500;
        }
        else if (z = "Eco-friendly greeting cards") {
            var priceextras = 1000;
        }
        else if (z = "Eco-friendly decorations") {
            var priceextras = 1500;
        }
        var total = priceproduct + pricesize + priceextras;
        document.getElementById("current_order_total").innerHTML = total;

    }
    else if (document.getElementById('soap').checked) {
        x = document.getElementById('soap').value;
        document.getElementById("current_order_product").innerHTML = x;
        var priceproduct = 800;

        if (document.getElementById('small').checked) {
            y = document.getElementById('small').value;
            document.getElementById("current_order_size").innerHTML = y;
            var pricesize = 0
        }
        else if (document.getElementById('medium').checked) {
            y = document.getElementById('medium').value;
            document.getElementById("current_order_size").innerHTML = y;
            var pricesize = 2500;
        }
        else if (document.getElementById('large').checked) {
            y = document.getElementById('large').value;
            document.getElementById("current_order_size").innerHTML = y;
            var pricesize = 5000;
        }
        var z = document.getElementById("others").value;
        document.getElementById("current_order_extras").innerHTML = z;

        if (z = "Eco-friendly packaging") {
            var priceextras = 500;
        }
        else if (z = "Eco-friendly greeting cards") {
            var priceextras = 1000;
        }
        else if (z = "Eco-friendly decorations") {
            var priceextras = 1500;
        }
        var total = priceproduct + pricesize + priceextras;
        document.getElementById("current_order_total").innerHTML = total;

    }
}

function setSize() {
    if (document.getElementById('small').checked) {
        x = document.getElementById('small').value;
        document.getElementById("current_order_size").innerHTML = x;
        var pricesize = 0;

        if (document.getElementById('bags').checked) {
            x = document.getElementById('bags').value;
            document.getElementById("current_order_product").innerHTML = x;
            var priceproduct = 1000;
        }
        else if (document.getElementById('plates').checked) {
            x = document.getElementById('plates').value;
            document.getElementById("current_order_product").innerHTML = x;
            var priceproduct = 2000;
        }
        else if (document.getElementById('mugs').checked) {
            x = document.getElementById('mugs').value;
            document.getElementById("current_order_product").innerHTML = x;
            var priceproduct = 2500;
        }
        else if (document.getElementById('soap').checked) {
            x = document.getElementById('soap').value;
            document.getElementById("current_order_product").innerHTML = x;
            var priceproduct = 800;
        }
        var z = document.getElementById("others").value;
        document.getElementById("current_order_extras").innerHTML = z;

        if (z = "Eco-friendly packaging") {
            var priceextras = 500;
        }
        else if (z = "Eco-friendly greeting cards") {
            var priceextras = 1000;
        }
        else if (z = "Eco-friendly decorations") {
            var priceextras = 1500;
        }
        var total = priceproduct + pricesize + priceextras;
        document.getElementById("current_order_total").innerHTML = total;

    }
    else if (document.getElementById('medium').checked) {
        x = document.getElementById('medium').value;
        document.getElementById("current_order_size").innerHTML = x;
        var pricesize = 2500;

        if (document.getElementById('bags').checked) {
            x = document.getElementById('bags').value;
            document.getElementById("current_order_product").innerHTML = x;
            var priceproduct = 1000;
        }
        else if (document.getElementById('plates').checked) {
            x = document.getElementById('plates').value;
            document.getElementById("current_order_product").innerHTML = x;
            var priceproduct = 2000;
        }
        else if (document.getElementById('mugs').checked) {
            x = document.getElementById('mugs').value;
            document.getElementById("current_order_product").innerHTML = x;
            var priceproduct = 2500;
        }
        else if (document.getElementById('soap').checked) {
            x = document.getElementById('soap').value;
            document.getElementById("current_order_product").innerHTML = x;
            var priceproduct = 800;
        }
        var z = document.getElementById("others").value;
        document.getElementById("current_order_extras").innerHTML = z;

        if (z = "Eco-friendly packaging") {
            var priceextras = 500;
        }
        else if (z = "Eco-friendly greeting cards") {
            var priceextras = 1000;
        }
        else if (z = "Eco-friendly decorations") {
            var priceextras = 1500;
        }
        var total = priceproduct + pricesize + priceextras;
        document.getElementById("current_order_total").innerHTML = total;

    }
    else if (document.getElementById('large').checked) {
        x = document.getElementById('large').value;
        document.getElementById("current_order_size").innerHTML = x;
        var pricesize = 5000;

        if (document.getElementById('bags').checked) {
            x = document.getElementById('bags').value;
            document.getElementById("current_order_product").innerHTML = x;
            var priceproduct = 1000;
        }
        else if (document.getElementById('plates').checked) {
            x = document.getElementById('plates').value;
            document.getElementById("current_order_product").innerHTML = x;
            var priceproduct = 2000;
        }
        else if (document.getElementById('mugs').checked) {
            x = document.getElementById('mugs').value;
            document.getElementById("current_order_product").innerHTML = x;
            var priceproduct = 2500;
        }
        else if (document.getElementById('soap').checked) {
            x = document.getElementById('soap').value;
            document.getElementById("current_order_product").innerHTML = x;
            var priceproduct = 800;
        }
        var z = document.getElementById("others").value;
        document.getElementById("current_order_extras").innerHTML = z;

        if (z = "Eco-friendly packaging") {
            var priceextras = 500;
        }
        else if (z = "Eco-friendly greeting cards") {
            var priceextras = 1000;
        }
        else if (z = "Eco-friendly decorations") {
            var priceextras = 1500;
        }
        var total = priceproduct + pricesize + priceextras;
        document.getElementById("current_order_total").innerHTML = total;

    }
}

function setExtras() {
    var z = document.getElementById("others").value;
    document.getElementById("current_order_extras").innerHTML = z;

    if (z = "Eco-friendly packaging") {
        var priceextras = 500;

        if (document.getElementById('bags').checked) {
        x = document.getElementById('bags').value;
        document.getElementById("current_order_product").innerHTML = x;
        var priceproduct = 1000;
        }
        else if (document.getElementById('plates').checked) {
        x = document.getElementById('plates').value;
        document.getElementById("current_order_product").innerHTML = x;
        var priceproduct = 2000;
        }
        else if (document.getElementById('mugs').checked) {
        x = document.getElementById('mugs').value;
        document.getElementById("current_order_product").innerHTML = x;
        var priceproduct = 2500;
        }
        else if (document.getElementById('soap').checked) {
        x = document.getElementById('soap').value;
        document.getElementById("current_order_product").innerHTML = x;
        var priceproduct = 800;
        }
        if (document.getElementById('small').checked) {
        x = document.getElementById('small').value;
        document.getElementById("current_order_size").innerHTML = x;
        var pricesize = 0;
        }
        else if (document.getElementById('medium').checked) {
        x = document.getElementById('medium').value;
        document.getElementById("current_order_size").innerHTML = x;
        var pricesize = 2500;
        }
        else if (document.getElementById('large').checked) {
        x = document.getElementById('large').value;
        document.getElementById("current_order_size").innerHTML = x;
        var pricesize = 5000;
        }
        var total = priceproduct + pricesize + priceextras;
        document.getElementById("current_order_total").innerHTML = total;

    }
    else if (z = "Eco-friendly greeting cards") {
        var priceextras = 1000;

        if (document.getElementById('bags').checked) {
        x = document.getElementById('bags').value;
        document.getElementById("current_order_product").innerHTML = x;
        var priceproduct = 1000;
        }
        else if (document.getElementById('plates').checked) {
        x = document.getElementById('plates').value;
        document.getElementById("current_order_product").innerHTML = x;
        var priceproduct = 2000;
        }
        else if (document.getElementById('mugs').checked) {
        x = document.getElementById('mugs').value;
        document.getElementById("current_order_product").innerHTML = x;
        var priceproduct = 2500;
        }
        else if (document.getElementById('soap').checked) {
        x = document.getElementById('soap').value;
        document.getElementById("current_order_product").innerHTML = x;
        var priceproduct = 800;
        }
        if (document.getElementById('small').checked) {
        x = document.getElementById('small').value;
        document.getElementById("current_order_size").innerHTML = x;
        var pricesize = 0;
        }
        else if (document.getElementById('medium').checked) {
        x = document.getElementById('medium').value;
        document.getElementById("current_order_size").innerHTML = x;
        var pricesize = 2500;
        }
        else if (document.getElementById('large').checked) {
        x = document.getElementById('large').value;
        document.getElementById("current_order_size").innerHTML = x;
        var pricesize = 5000;
        }
        var total = priceproduct + pricesize + priceextras;
        document.getElementById("current_order_total").innerHTML = total;

    }
    else if (z = "Eco-friendly decorations") {
        var priceextras = 1500;

        if (document.getElementById('bags').checked) {
        x = document.getElementById('bags').value;
        document.getElementById("current_order_product").innerHTML = x;
        var priceproduct = 1000;
        }
        else if (document.getElementById('plates').checked) {
        x = document.getElementById('plates').value;
        document.getElementById("current_order_product").innerHTML = x;
        var priceproduct = 2000;
        }
        else if (document.getElementById('mugs').checked) {
        x = document.getElementById('mugs').value;
        document.getElementById("current_order_product").innerHTML = x;
        var priceproduct = 2500;
        }
        else if (document.getElementById('soap').checked) {
        x = document.getElementById('soap').value;
        document.getElementById("current_order_product").innerHTML = x;
        var priceproduct = 800;
        }
        if (document.getElementById('small').checked) {
        x = document.getElementById('small').value;
        document.getElementById("current_order_size").innerHTML = x;
        var pricesize = 0;
        }
        else if (document.getElementById('medium').checked) {
        x = document.getElementById('medium').value;
        document.getElementById("current_order_size").innerHTML = x;
        var pricesize = 2500;
        }
        else if (document.getElementById('large').checked) {
        x = document.getElementById('large').value;
        document.getElementById("current_order_size").innerHTML = x;
        var pricesize = 5000;
        }
        var total = priceproduct + pricesize + priceextras;
        document.getElementById("current_order_total").innerHTML = total;

    }
}

setFavourite()
{
    alert ("clicked");
}