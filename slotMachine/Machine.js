class Machine extends React.Component {
    render() {
        function makeid(length) {
            var result           = '';
            var characters       = '0123';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        let first = makeid(1);
        let second = makeid(1);
        let third = makeid(1);
        let msg;
        if (first == second && second == third) {
            msg = 'WINNER'
        } else {
            msg = 'LOSER'
        }
        return (
            <div>
                <p>{first} {second} {third}</p>
                <h2>{msg}</h2>
            </div>
        )
    }
}
