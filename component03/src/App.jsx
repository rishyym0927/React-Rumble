import DynamicTable from "../../component03/src/components/DynamicTable";
function App() {
  return (
    <div className="app">
      <h1>React Rumble App</h1>
      <ThemeToggle />
      <DynamicTable />
      <Modal />
      <Skeleton type="card" />
    </div>
  );
}

export default App;
