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

        const icon = icons.filter((obj, key)=> Object.keys(obj) == pet)[0];
        return icon[Object.keys(icon)]
    }
}