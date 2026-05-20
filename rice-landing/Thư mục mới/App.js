const App = () => {
    return (
        <main className="no-scrollbar">
            <window.Navbar />
            <window.Hero />
            <window.Capabilities />
        </main>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
