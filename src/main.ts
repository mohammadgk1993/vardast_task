let str1:string = "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."

function topThreeWords(str: string): string[] {
    if (!str) return []                                                   // if we recieve an empty string so we return and empty array
    let allWords: [string, number][] = []                                 // make an array to hold all words and their repeats in pairs
    /* remove ponctuations marks except of qoutation and double qoutation (', "")
    and then convert all of string in to lowerCase */
    let filteredString: string = str.trim().toLowerCase().replace(/(['"])\1+|[~`!@#$%^&*()-_=+{}|\:;<>,.?/]/g,'')
    // remove extra white spaces such as double spaces and tabs and line breaks
    filteredString = filteredString.replace(/\s+/g, ' ')

    loop1: for (let word of filteredString.split(' ')) {                  // we push arrays which containing of each word and it's repeat
        if (word == "'" || word == '"') continue
        let counter: number = 0                                           // counts how many times word this is repeated
        loop2: for (let arr of allWords) {                                // if allWord array contain of this word we skip our loop to the next word
            if (arr[0] === word) continue loop1
        }

        for (let phrase of filteredString.split(' ')) {                   // this loop count how many times word is repeated with counter variable
            if (word == phrase) counter += 1
        }

        allWords.push([word, counter])
    }
    
    allWords.sort((a:[string, number], b:[string, number]): number => b[1] - a[1])   // sort array pairs decending by their second element
    return allWords.slice(0,3).map(val => val[0])                         // return first three most repeated words as an array
}


console.log(topThreeWords(str1))