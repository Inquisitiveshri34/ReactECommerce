
function pageHandler(pageState) {
    if(pageState == "Home"){
        return "Cart";
    } else {
        return "Home";
    }
}

export {pageHandler}