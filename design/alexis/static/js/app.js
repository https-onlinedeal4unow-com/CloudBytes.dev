window.addEventListener("load", myInit, true);

function myInit() {
    //Manage highlights for current page
    function logo(e) {
        try {
            var currentURL = window.location.pathname;
            var activePath = "";
            //console.log(currentURL)
            if (currentURL == "/") {
                activePath = "home";
            }
            else {
                var pathArray = window.location.pathname.split('/');
                activePath = pathArray[1];

            }
            document.getElementById(activePath).className += " active";
        }
        catch (err) {
            document.getElementById("home").className += " active";
        }
    };
    logo();

    // Pagination Handler
    function page(e) {
        var selection = document.querySelectorAll('ul.pagination')[0]
        if (selection) {
            pageItems = document.querySelectorAll('ul.pagination')[0].getElementsByClassName("page-item");
            for (let i = 0; i < pageItems.length; i++) {
                if (pageItems[i].getElementsByTagName("a")[0].href == document.location.href) {
                    pageItems[i].getElementsByTagName("a")[0].removeAttribute("href");
                    if (!((i == 0) || (i == (pageItems.length - 1)))) {
                        pageItems[i].classList.add("active");
                    };
                };
            };
        };
    };
    page();
};

var openMenu = document.getElementById("open")
var closeMenu = document.getElementById("close")
var megaMenu = document.getElementById("mega")



openMenu.addEventListener("click", function (e) {
    e.preventDefault();
    //script
    openMenu.style.display = "none";
    closeMenu.style.display = "flex";
    megaMenu.style.visibility = "visible";
}

)
closeMenu.addEventListener("click", function (e) {
    e.preventDefault();
    closeMenu.style.display = "none";
    openMenu.style.display = "flex";
    megaMenu.style.visibility = "hidden";
})

// Check that service workers are supported
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/SW.js');
    });
}
console.log("WTF")
