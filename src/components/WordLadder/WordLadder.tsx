import { useEffect, useState } from "react";

import { Spinner } from "./Spinner";
import { Modal } from "./Modal";
import { Button } from "./Button";

import dictionary from "../../assets/dictionary.json";

import "./WordLadder.css";

// random array or words to simulate a solution list (bigger than 8 items so we can simulate scroll on list)
const SOL = ["Class", "Claws", "Clack", "Blank", "Blink", "Whatever1", "Whatever2", "Whatever3", "Whatever4"];
const REGEX = /[^A-Za-z]/g; // it can accept cap letters but they will be lowercased.

export const WordLadder = () => {
    const [firstWord, setFirstWord] = useState("");
    const [lastWord, setLastWord] = useState("");
    const [solution, setSolution] = useState([]);
    const [isErrorSolution, setIsErrorSolution] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isFindingSolution, setIsFindingSolution] = useState(false);

    useEffect(() => {
        if (isFindingSolution) {
            setTimeout(() => {
                setIsLoading(true);
            }, 500);
        }
    }, [isFindingSolution]);

    const wordList = new Set(dictionary);

    const onChangeFirstWord = (e: { target: { value: string } }) => {
        setFirstWord(e.target.value.toLowerCase().replace(REGEX, "")); // allow only english letters, no numbers or symbols
        if (solution.length) { // solution cleared if words are changed
            setSolution([]);
        }
    };

    const onChangeLastWord = (e: { target: { value: string } }) => {
        setLastWord(e.target.value.toLowerCase().replace(REGEX, "")); // allow only english letters, no numbers or symbols
        if (solution.length) { // solution cleared if words are changed
            setSolution([]);
        }
    };

    const solveWordLadder = () => {
        setIsFindingSolution(true);

        setTimeout(() => {
            if (Math.random() < 0.5) {
                setIsErrorSolution(true);
            } else {
                setSolution(SOL);
            }
            setIsLoading(false);
            setIsFindingSolution(false);
        }, 3000)
    }

    const validate = () => {
        // if there is a solution, button needs to be disabled
        if (solution.length > 0) {
            return false;
        }

        // Verify if words are in the english dictionary
        const isFirstWordInDictionary = wordList.has(firstWord);
        const isLastWordInDictionary = wordList.has(lastWord);

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

    const handleSpinnerClose = () => setIsLoading(false);

    const handleErrorClose = () => setIsErrorSolution(false);

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

                {solution.length > 0 && (
                    <div className="wordladder-list">
                        {solution.map((word, index) => (
                            <div key={`${index}-${word}`}>{word}</div>
                        ))}
                    </div>
                )}

                <input
                    className="wordladder-input"
                    type="text"
                    placeholder="Last Word"
                    value={lastWord}
                    onChange={onChangeLastWord}
                />

                <Button disabled={!validate()} onClick={solveWordLadder}>
                    Solve
                </Button>
            </div>

            <Modal isOpen={isLoading} onClose={handleSpinnerClose}>
                <Spinner />
            </Modal>

            <Modal isOpen={isErrorSolution} onClose={handleErrorClose}>
                There is no solution for this Word Ladder!!! 
            </Modal>
        </div>
    );
};