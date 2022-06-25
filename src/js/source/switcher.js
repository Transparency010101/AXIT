function switcher(item) {
    item.forEach(tag => {
        tag.addEventListener("click", function () {
            item.forEach(removeTag => {
                removeTag.classList.remove("active");
            });
            tag.classList.add("active");
        });
    });
}

const tabsSwitcher = document.querySelectorAll(".axit-tabs__item");
switcher(tabsSwitcher);