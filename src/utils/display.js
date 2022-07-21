export const displayUtil = {
    findPetIcon(pet) {
        const icons = [
            { dog: <i class="fa-solid fa-dog"></i> },
            { cow: <i class="fa-solid fa-cow"></i> },
            { hippo: <i class="fa-solid fa-hippo"></i> },
            { otter: <i class="fa-solid fa-otter"></i> },
            { cat: <i class="fa-solid fa-cat"></i> },
            { crow: <i class="fa-solid fa-crow"></i> },
            { dove: <i class="fa-solid fa-dove"></i> },
            { fish: <i class="fa-solid fa-fish"></i> },
            { frog: <i class="fa-solid fa-frog"></i> },
            { horse: <i class="fa-solid fa-horse"></i> },
            { kiwi: <i class="fa-solid fa-kiwi-bird"></i> },
            { mosquito: <i class="fa-solid fa-mosquito"></i> },
            { shrimp: <i class="fa-solid fa-shrimp"></i> },
            { spider: <i class="fa-solid fa-spider"></i> },
            { worm: <i class="fa-solid fa-worm"></i> }
        ]

        const icon = icons.filter((obj, key)=> Object.keys(obj) == pet)[0];
        return icon[Object.keys(icon)]
    }
}