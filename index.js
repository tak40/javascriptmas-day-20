/** @format */

const dangerArray = [
    ['🎅', '👺'],
    [
        ['🎅', '🦁'],
        ['👹', '🎅'],
    ],
    [
        [
            ['🎅', '🐻'],
            ['🧌', '🎅'],
        ],
        [
            ['🐯', '🎅'],
            ['🎅', '😈'],
        ],
    ],
]

function saveSanta(arr) {
    return arr
        .map(element => {
            if (Array.isArray(element)) {
                return saveSanta(element)
            } else {
                return !['🦁', '🐯', '🐻', '👺', '👹', '😈', '🧌'].includes(
                    element
                )
                    ? element
                    : null
            }
        })
        .filter(element => element !== null)
}

// Check the returned results from saveSanta()
console.log(saveSanta(dangerArray))
