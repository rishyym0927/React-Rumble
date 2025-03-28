import Table from "./Table";

function App() {
    return (
        <div>
            <h1>📊 Dynamic Table</h1>
            <Table csvFile="/data.csv" />
        </div>
    );
}

export default App;

