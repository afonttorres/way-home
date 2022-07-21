export const displayUtil = {
    findPetIcon(pet) {
        const icons = [
            { dog: <i classNameName="fa-solid fa-dog"></i> },
            { cow: <i classNameName="fa-solid fa-cow"></i> },
            { hippo: <i classNameName="fa-solid fa-hippo"></i> },
            { otter: <i classNameName="fa-solid fa-otter"></i> },
            { cat: <i classNameName="fa-solid fa-cat"></i> },
            { crow: <i classNameName="fa-solid fa-crow"></i> },
            { dove: <i classNameName="fa-solid fa-dove"></i> },
            { fish: <i classNameName="fa-solid fa-fish"></i> },
            { frog: <i classNameName="fa-solid fa-frog"></i> },
            { horse: <i classNameName="fa-solid fa-horse"></i> },
            { kiwi: <i classNameName="fa-solid fa-kiwi-bird"></i> },
            { mosquito: <i classNameName="fa-solid fa-mosquito"></i> },
            { shrimp: <i classNameName="fa-solid fa-shrimp"></i> },
            { spider: <i classNameName="fa-solid fa-spider"></i> },
            { worm: <i classNameName="fa-solid fa-worm"></i> }
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
            { dressing: <i className="fa-solid fa-person-booth"></i> },
            { wifi: <i className="fa-solid fa-wifi"></i> },
            { storage: <i className="fa-solid fa-warehouse"></i> },
            { appliances: <i className="fa-solid fa-display"></i> },
            { balcony: <i className="fa-solid fa-umbrella-beach"></i> },
            { terrace: <i className="fa-solid fa-city"></i> },
            { garden: <i className="fa-solid fa-mountain-sun"></i> }
        ]

        const icon = icons.filter((obj, key) => Object.keys(obj) == spec)[0];
        if (!icon) return '';
        return icon[Object.keys(icon)]

    }
}