class App extends React.Component {
    render() {
        return (
            <div>
                <Hello to="Ring" from="Paul"/>
                <Hello to="Sher" from="Sunny"/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
