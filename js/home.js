

window.onload = (function () {
    var text = "";

    var i;

    for (i = 0; i < bestSellerItems.length; i++) {

        text += "<div class='col-sm-offset-1 col-sm-3'><div class='card'><img src='" + bestSellerItems[i].imgPath + "' style='width:100%' /><h1>" + bestSellerItems[i].itemName + "</h1><p class='price'>" + bestSellerItems[i].itemPrice + "</p><p><button>Add to Cart</button></p></div></div>";

        document.getElementById("bestSellerItemsRow").innerHTML = text;
    }

    

    text = "";

    i = 0;

    for (i = 0; i < hotDealItems.length; i++) {

        text += "<div class='col-sm-offset-1 col-sm-3'><div class='card'><img src='" + hotDealItems[i].imgPath + "' style='width:100%' /><h1>" + hotDealItems[i].itemName + "</h1><p class='price'>" + hotDealItems[i].itemPrice + "</p><!-- <p>Some text about the PS4..</p> --><p><button>Add to Cart</button></p></div></div>";
    }

    document.getElementById("hotDealsItemsRow").innerHTML = text;

    text = "";

    i = 0;

    for (i = 0; i < newItems.length; i++) {

        text += "<div class='col-sm-offset-1 col-sm-3'><div class='card'><img src='" + newItems[i].imgPath + "' style='width:100%' /><h1>" + newItems[i].itemName + "</h1><p class='price'>" + newItems[i].itemPrice + "</p><!-- <p>Some text about the PS4..</p> --><p><button>Add to Cart</button></p></div></div>";
    }

    document.getElementById("newItemsRow").innerHTML = text;
});
