class App extends React.Component {
    render() {
        return (
            <div>
                <Machine
                    first={this.props.first}
                    second={this.props.second}
                    third={this.props.third}
                />
                <Machine
                    first={this.props.first}
                    second={this.props.second}
                    third={this.props.third}
                />
                <Machine
                    first={this.props.first}
                    second={this.props.second}
                    third={this.props.third}
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
