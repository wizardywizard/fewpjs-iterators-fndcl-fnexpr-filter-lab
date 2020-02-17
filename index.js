function findMatching(drivers, string){
    let driver = drivers.filter(d =>{
        return d.toUpperCase() === string.toUpperCase()
    })
    return driver
}

function fuzzyMatch(drivers, string){
    let driver = drivers.filter(d => {
        return d.slice(0, string.length) === string
    })
    return driver
}

function matchName(drivers, string){
    let driver = drivers.filter(d => {
        return d.name === string
    })
    return driver
}