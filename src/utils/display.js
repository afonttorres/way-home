export const displayUtil = {
    findPetIcon(pet) {
        const icons = [
            { dog: <i className="fa-solid fa-dog"></i> },
            { cow: <i className="fa-solid fa-cow"></i> },
            { hippo: <i className="fa-solid fa-hippo"></i> },
            { otter: <i className="fa-solid fa-otter"></i> },
            { cat: <i className="fa-solid fa-cat"></i> },
            { crow: <i className="fa-solid fa-crow"></i> },
            { dove: <i className="fa-solid fa-dove"></i> },
            { fish: <i className="fa-solid fa-fish"></i> },
            { frog: <i className="fa-solid fa-frog"></i> },
            { horse: <i className="fa-solid fa-horse"></i> },
            { kiwi: <i className="fa-solid fa-kiwi-bird"></i> },
            { mosquito: <i className="fa-solid fa-mosquito"></i> },
            { shrimp: <i className="fa-solid fa-shrimp"></i> },
            { spider: <i className="fa-solid fa-spider"></i> },
            { worm: <i className="fa-solid fa-worm"></i> }
        ]

        const icon = icons.filter((obj, key) => Object.keys(obj) == pet)[0];
        if (!icon) return '';
        return icon[Object.keys(icon)]
    },
    findSpecIcon(spec) {
        const icons = [
            { bed: <i className="fa-solid fa-bed"></i> },
            { lift: <i className="fa-solid fa-elevator"></i> },
            { furnised: <i className="fa-solid fa-couch"></i> },
            { parking: <i className="fa-solid fa-square-parking"></i> },
            { pool: <i className="fa-solid fa-person-swimming"></i> },
            { air: <i className="fa-solid fa-snowflake"></i> },
            { smoke: <i className="fa-solid fa-smoking"></i> },
            { shower: <i className="fa-solid fa-shower"></i> },
            { bath: <i className="fa-solid fa-bath"></i> },
            { heating: <i className="fa-solid fa-temperature-full"></i> },
            { fireplace: <i className="fa-solid fa-fire"></i> },
            { dressing: <i className="fa-solid fa-person-booth"></i> },
            { wifi: <i className="fa-solid fa-wifi"></i> },
            { storage: <i className="fa-solid fa-warehouse"></i> },
            { appliances: <i className="fa-solid fa-display"></i> },
            { balcony: <i className="fa-solid fa-umbrella-beach"></i> },
            { terrace: <i className="fa-solid fa-city"></i> },
            { garden: <i className="fa-solid fa-mountain-sun"></i> }
        ]

        const icon = icons.filter((obj, key) => spec.includes(Object.keys(obj)))[0];
        if (!icon) return '';
        return icon[Object.keys(icon)]

    },
    badgeStyle(text) {
        const colors = {
            pending: { color: 'var(--yellow)', backgroundColor: 'var(--yellow-opacity)' },
            approved: { color: 'var(--blue)', backgroundColor: 'var(--blue-opacity)' },
            denied: { color: 'var(--red)', backgroundColor: 'var(--red-opacity)' },
            completed: { color: 'var(--green)', backgroundColor: 'var(--green-opacity)' },
        }
        if (!text) return;
        return colors[text];
    }
}