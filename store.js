import items from "./items.json"

const storeItemTemplate = document.querySelector("#store-item-template")
const storeItemContainer = document.querySelector("[data-store-container]")

export function setupStore(){
    items.forEach(renderStoreItem)
}

function renderStoreItem(item){
    const storeItem = storeItemTemplate.content.cloneNode(true)
    const container = storeItem.querySelector("[data-store-item]")
    container.dataset.itemID = item.id

    const name = storeItem.querySelector('[data-name]')
    name.innerText = item.name

    storeItemContainer.appendChild(storeItem)
}