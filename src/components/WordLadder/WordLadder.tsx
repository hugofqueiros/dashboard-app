import { useState } from "react";

import dictionary from "../../assets/dictionary.json";

import "./WordLadder.css";

// random array or words to simulate a solution list (bigger than 8 items so we can simulate scroll on list)
const SOL = ["Class", "Claws", "Clack", "Blank", "Blink", "Whatever1", "Whatever2", "Whatever3", "Whatever4"];
const REGEX = /[^A-Za-z]/g; // it can accept cap letters but they will be lowercased.

export const WordLadder = () => {
    const [firstWord, setFirstWord] = useState("");
    const [lastWord, setLastWord] = useState("");

    const wordList = new Set(dictionary);

    const onChangeFirstWord = (e: { target: { value: string } }) => {
        setFirstWord(e.target.value.toLowerCase().replace(REGEX, "")); // allow only english letters, no numbers or symbols
    };

    const onChangeLastWord = (e: { target: { value: string } }) => {
        setLastWord(e.target.value.toLowerCase().replace(REGEX, "")); // allow only english letters, no numbers or symbols
    };

    const solveWordLadder = () => {
        console.log('SOLVEEEE!!');
    }

    const validate = () => {
        // Verify if words are in the english dictionary
        const isFirstWordInDictionary = wordList.has(firstWord);
        const isLastWordInDictionary = wordList.has(lastWord);

        console.log('isFirstWordInDictionary: ', isFirstWordInDictionary);
        console.log('isLastWordInDictionary', isLastWordInDictionary);

        if (
            firstWord !== "" &&
            lastWord !== "" &&
            firstWord.length === lastWord.length &&
            firstWord !== lastWord &&
            isFirstWordInDictionary &&
            isLastWordInDictionary
        ) {
            return true;
        }

        return false;
    };

    return (
        <div className="wordladder">
            <div className="wordladder-body">
                <input
                    className="wordladder-input"
                    type="text"
                    placeholder="First Word"
                    value={firstWord}
                    onChange={onChangeFirstWord}
                />

                <input
                    className="wordladder-input"
                    type="text"
                    placeholder="Last Word"
                    value={lastWord}
                    onChange={onChangeLastWord}
                /> 

                <button disabled={!validate()} className="wordladder-button" onClick={solveWordLadder}>Solve</button>
            </div>

            <div className="wordladder-spinner">Loading...</div>

            <div className="wordladder-error">ERROR</div>
        </div>
    );
};