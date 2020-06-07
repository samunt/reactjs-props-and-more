class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    to="Ringo"
                    from="Paul"
                    bangs={3}
                    img="https://images.unsplash.com/photo-1558521958-0a228e77e984?ixlib=rb-1.2.1&auto=format&fit=crop&w=786&q=80"
                />

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
