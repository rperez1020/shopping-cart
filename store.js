import items from "./items.json"

const storeItemTemplate = document.querySelector("#store-item-template")

export function setupStore(){
    items.forEach(renderStoreItem)
}

function renderStoreItem(item){
    const storeItem = storeItemTemplate.content.cloneNode(true)
}