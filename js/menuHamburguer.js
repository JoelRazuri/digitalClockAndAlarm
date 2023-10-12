const menuHamburguerActivate = (menuHBtn, menuHItem) => {
    const d = document;
    const $menuHamburguerActivate = document.getElementById("menu-hamburguer-activate");


    d.addEventListener("click", (e) => {
        if (e.target.matches(menuHBtn)){
            if ($menuHamburguerActivate.style.display === "none"){
                        $menuHamburguerActivate.style.display = "flex"
                    } else {
                        $menuHamburguerActivate.style.display = "none"
                    }
        }

        if (e.target.matches(menuHItem)){
            $menuHamburguerActivate.style.display = "none";
        }
    })
};

menuHamburguerActivate(".menu-hamburguer",".item a");