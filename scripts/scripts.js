var categButton = document.getElementById("categBtn");
var categMenu = document.getElementById("categMenu");

categButton.addEventListener("click", function() {

    if (categMenu.classList.contains("categMenu")) {

        categMenu.classList.remove("categMenu");
        categMenu.classList.add("categMenuHide");

    } else if (categMenu.classList.contains("categMenuHide")) {
        
        categMenu.classList.remove("categMenuHide");
        categMenu.classList.add("categMenu");

    }

});

var priceButton = document.getElementById("priceButton");
var priceMenu = document.getElementById("botRowPrice")
                                            
priceButton.addEventListener("click", function() {

    if(priceMenu.classList.contains("priceMenu")) {

        priceMenu.classList.remove("priceMenu");
        priceMenu.classList.add("priceMenuHide");

    }else if (priceMenu.classList.contains("priceMenuHide")) {

        priceMenu.classList.remove("priceMenuHide");
        priceMenu.classList.add("priceMenu");

    }
});

