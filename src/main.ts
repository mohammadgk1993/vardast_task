/* our solution to optimize this function to work better and decrease
memory usage is to use map except of the array to store key-value pairs 
of [string(Word): number(Times that word repeated)] by iterating over
string word by word and set them to the map we except of using regexp.match
method for all of each word matches we decreased our memory use and as a
result we can handle large strings efficiently */

function topThreeWords(str: string): string[] {
    if (!str) return []        // If the input string is empty or consists only of spaces, return an empty array
    
    let allWords: Map<string, number> = new Map()      // Create a map to store word frequencies
    let filteredString: string = str.toLowerCase()         // Convert the input string to lowercase

    // Loop through each word in the filtered string (split by spaces)
    for (let word of filteredString.split(' ')) {
        const filteredString: string = word
        .replace(/(['"])\1+|[~`!@#$%^&*()-_=+{}|\:;<>,.?/]/g,' ')
        .trim() // delete ponctuations marks if it's next to a word
        
        if (filteredString.replace(/(["'])\1+/g,'') == '') continue;      // Skip if the word contains only repeated quotes
        if (filteredString.match(/[a-z'"]/g)) {       // If the word contains lowercase letters, apostrophes, or quotes
            const count: number = allWords.get(filteredString) || 0      // Get the current count for the word from the map
            allWords.set(filteredString, count + 1)      // Increment the word count in the map
        } else continue         // Skip if the word doesn't match the allowed characters
    }
    
    /* Convert the map entries to an array of [word, count] pairs,
    sort it based on count in descending order, take the top 3,
    and extract only the words into a new array */
    let sortedWords: [string, number][] = Array
        .from(allWords.entries())
        .sort((pair1: [string, number], pair2: [string, number]): number => pair2[1] - pair1[1]);
    
    return sortedWords.slice(0, 3).map((pair: [string, number]): string => pair[0]); // Return the top 3 words
}


console.log(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call
 to mind, there lived not long since one of those gentlemen that keep
a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton,
a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon
or so extra on Sundays, made away with three-quarters of his income.`))
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"))
console.log(topThreeWords(" //wont won't won't"))