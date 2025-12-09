import './App.css';
import TestComponent from "./components/TestComponent";
import ProblemWrapper from "./ProblemWrapper";

function App() {
    return (
        <>
            <h1>UMSI 579 - Final Deliverable (React)</h1>
            <h3>Lan Xu</h3>
            <ProblemWrapper name='Increment'><TestComponent/></ProblemWrapper>
        </>
    );
}

export default App;
