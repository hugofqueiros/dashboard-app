import dictionary from "../../assets/dictionary.json";

// Based on we talked about in out chat and
// approach suggested by ChatGPT -> breadth-first search (BFS) exploring possible transformations until the end of the word is reached 
export const findSolution = (firstWord: string, lastWord: string) => {
    const wordLength = firstWord.length;

    // filter out the words that are not of the same length as the words -> smaller set to iterate through
    const filterDictionaryByLength = dictionary.filter((word: string) => word.length === wordLength);

    // make it a set so it's easy to do lookups Set.has() has a time complexity of O(1) enhancing performace
    // in comparison as an example Array.includes() has a time complexity of O(n)
    const wordList = new Set(filterDictionaryByLength);

    const queue: string[][] = [[firstWord]];
    const visited = new Set([firstWord]);

    // 
    while (queue.length > 0) {
        const currentListOfWords = queue.shift(); // get the first array of words of the queue to get the possible array of possible solution
        const currentWord = currentListOfWords[currentListOfWords.length - 1]; // get the last word on the array of the current possible solution

        for (let i = 0; i < wordLength; i++) { // iterate over all letters in word
            for (let j = 97; j <= 122; j++) { // iterates over english letters (ASCII character code 97 (a) till 122 (z))
                const newWord = `${currentWord.slice(0, i)}${String.fromCharCode(j)}${currentWord.slice(i + 1)}`;

                if (wordList.has(newWord) && !visited.has(newWord)) {
                    if (newWord === lastWord) {
                        return currentListOfWords.slice(1); // removes the first word of the list since we initiated the queue with the firstWord
                    }

                    visited.add(newWord);
                    queue.push([...currentListOfWords, newWord]);
                }
            }
        }
    } 

    return []; // if the queue is zero returns no solution, it means we exausted all combinations of words possible
};