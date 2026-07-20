class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array.from({length:9}, () => new Set())
        let columns = Array.from({length:9}, () => new Set())
        let boxes = Array.from({length:9}, () => new Set())

       for (let i  = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {

            let cell = board[i][j]

            const boxIndex = Math.floor(i/3) * 3 + Math.floor(j/3)
            
            if (cell === ".") continue

            if (rows[i].has(cell) || columns[j].has(cell) || boxes[boxIndex].has(cell)) {
                return false
            }

            rows[i].add(cell)
            columns[j].add(cell)
            boxes[boxIndex].add(cell)
        }
       }
       return true
    }
}
