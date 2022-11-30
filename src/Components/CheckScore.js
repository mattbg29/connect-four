export function checkScore(row, col, playerNow, grid, target) {
    //check row for win
    let score = 1
    for (let i = col+1; i < 7; i++) {
        if (grid[row*7+i].value === target) {
            score++
        } else {
            break
        }
    }
    for (let i = col-1; i>=0; i--) {
        if (grid[row*7+i].value === target) {
            score++
        } else {
            break
        }
    }
    if (score === 4) {
        return 1
        
    } 
    //check col for win
    score = 1
    for (let i = row+1; i < 6; i++) {
        if (grid[i*7+col].value === target) {
            score++
        } else {
            break
        }
    }
    for (let i = row-1; i>=0; i--) {
        if (grid[i*7+col].value === target) {
            score++
        } else {
            break
        }
    }
    if (score === 4) {
        return 1
        
    } 
    // check right diag for win
    score = 1
    for (let i = row+1; i < 6; i++) {
        for (let j = col+1; j < 7; j++) {
            if (grid[i*7+j].value === target) {
                score++
                i++
                if (i > 5) {
                    break
                }
            } else {
                break
            }
        }
        break
    }

    for (let i = row-1; i >= 0; i--) {
        for (let j = col-1; j >=0; j--) {
            if (grid[i*7+j].value === target) {
                score++
                i--
                if (i < 0) {
                    break
                }
            } else {
                break
            }
        }
        break
    }
    if (score === 4) {
        return 1        
    } 

    score = 1
    for (let i = row+1; i < 6; i++) {
        for (let j = col-1; j >= 0; j--) {
            if (grid[i*7+j].value === target) {
                score++
                i++
                if (i > 5) {
                    break
                }
            } else {
                break
            }
        }
        break
    }

    for (let i = row-1; i >= 0; i--) {
        for (let j = col+1; j <7; j++) {
            if (grid[i*7+j].value === target) {
                score++
                i--
                if (i < 0) {
                    break
                }
            } else {
                break
            }
        }
        break
    }
    if (score === 4) {
        return 1       
    } 
return 0
}