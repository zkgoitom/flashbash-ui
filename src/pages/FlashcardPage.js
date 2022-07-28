import Flashcard from "../components/Flashcard";


let flashcards = [
    {
        question: "What does IOC stand for in Spring?",
        answer: "Inversion of Control",
        topic: "Java"
    },

    {
        question: "What is DOM?",
        answer: "Document Object Model",
        topic: "JavaScript"

    }
]

export default function FlashcardPage() {
    return <>
    {flashcards.map((flashcard) =>
        <Flashcard flashcard={flashcard} />
        )}
    </>
}