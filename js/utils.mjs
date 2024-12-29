export function clearView(parentElemt) {
    parentElemt.innerHTML = "";
}

export function qs(selector, parent = document) {
    return parent.querySelector(selector);
}