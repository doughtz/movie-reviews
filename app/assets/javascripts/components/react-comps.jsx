class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {topMovies: []}
    }
    
    componentDidMount() {
        fetch('https://api.themoviedb.org/4/list/1?api_key=0bc5e4a620a186b0cf1d2146e379442e')
            .then( (response) => {
                    return response.json() })   
                        .then( (json) => {
                            const results = [];
                            json.results.forEach(function(element) {
                                results.push(element);
                            });
                            this.setState({topMovies: results});
                            console.log(results[0]);
                        });
    }
    render() {
        return (
            <div className="row">{this.state.topMovies.map(element => <IndividualMovie title={element.title} image={element.poster_path} release_date={element.release_date} overview={element.overview} />)}</div>
            )
        
    }
}

class IndividualMovie extends React.Component {
  render() {
    return (
        <div className="col-xs-10 col-xs-offset-1">
            <div className="col-xs-4">
                <img src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2" + this.props.image } />
                
            </div>
            <div className="col-xs-8 text-left">
                <div className="col-xs-12">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="col-xs-12">
                    <b>Release Date:</b> {this.props.release_date}
                </div>
                <div className="col-xs-12">
                    <b>Summary:</b> {this.props.overview}
                </div>
            </div>
        </div>
        )
  }
}