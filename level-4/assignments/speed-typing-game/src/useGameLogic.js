import {useState, useRef, useEffect} from "react"

export default function UseGameLogic(startingTime = 5) {

    // set state that represents whether or not the game is running.
        const [isGameRunning, setIsGameRunning] = useState(false);

    // set state for time remaining in game
        const [timeRemaining, setTimeRemaining] = useState(startingTime);

    // set state for textContent
        const [textContent, setTextContent] = useState("");

    // set state for word count - presented on UI
        const [wordCount, setWordCount] = useState(0);

    // create instance of ref to focus on typing area when game starts
        const textAreaRef = useRef(null);
    
    // handler to update textContent state on change of textArea
        const handleTextAreaChange = (event) => {
            setTextContent(event.target.value);
        }

    // handler to count words
        const calculateWordCount = () => {
            const wordCount = textContent.split(" ").reduce((prev, current) => current.length > 0 ? prev + 1 : prev
                , 0);
            return wordCount;
        }

    // handler to start game and end the game:
        const startGame = () => {
            setIsGameRunning(true);
            setTimeRemaining(startingTime);
            setWordCount(0);
            setTextContent("");
            textAreaRef.current.disabled = false;
            textAreaRef.current.focus();
        }

        const endGame = () => {
            setIsGameRunning(false);
            setWordCount(calculateWordCount());
        }

    // useEffect for countdown
        useEffect(() => {
            setTimeout(() => {
                if (timeRemaining > 0 && isGameRunning) {
                    setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1);
                } else if (timeRemaining === 0) {
                    endGame()
                }
            }, 1000)
        }, [timeRemaining, isGameRunning])

    return {textContent, isGameRunning, timeRemaining, wordCount,
            textAreaRef,
            handleTextAreaChange, startGame}
}