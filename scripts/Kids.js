import { getChildren } from "./database.js"

const children = getChildren()

//clickEvent to display their wish
document.addEventListener(
    "click",
    (clickEvent) => {
        const childrenTarget = clickEvent.target
        const childrenWish = childrenTarget.dataset.wish
        const childrenName = childrenTarget.dataset.name

        if (childrenTarget.dataset.type === "child") {
            window.alert(`${childrenName}'s wish is ${childrenWish}`)
        }
    }
)

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}" data-name="${child.name}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

