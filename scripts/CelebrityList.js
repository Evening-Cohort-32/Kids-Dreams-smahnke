import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

//clickEvent to display their sport
document.addEventListener(
    "click",
    (clickEvent) => {
        const celebrityTarget = clickEvent.target
        const celebritySport = celebrityTarget.dataset.sport
        const celebrityName = celebrityTarget.dataset.name

        if (celebrityTarget.dataset.type === "celebrity") {
            window.alert(`${celebrityName} is a ${celebritySport} star`)
        }
    }
)

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}"
                    data-name="${celebrity.name}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
