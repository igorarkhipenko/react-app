import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = {items: [], nameFilter: '', genderFilter: ''};
		this.handleNameFilter = this.handleNameFilter.bind(this);
		this.handleGenderFilter = this.handleGenderFilter.bind(this); 
	}

	componentWillMount() {
		fetch( 'http://swapi.co/api/people/?format=json' )
		.then( response => response.json() )
		.then( ({results: items}) => this.setState({items}) );
	}

	handleGenderFilter(e) {
		this.setState({genderFilter: e.target.value});
	}

	handleNameFilter(e) {
		this.setState({nameFilter: e.target.value});
	}

	render() {
		let items = this.state.items;
		if (this.state.nameFilter) {
			items = items.filter(item => 
				item.name.toLowerCase().includes(
					this.state.nameFilter.toLowerCase()
				)
			);
		}
		if (this.state.genderFilter) {
			items = items.filter(item =>
				item.gender === this.state.genderFilter
			)			
		}

		return (
			<div>
				<input type="text" onChange={this.handleNameFilter} />
				<select onChange={this.handleGenderFilter}>
					<option value="">All</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="n/a">N/A</option>
				</select>
				{items.map(item => 
					<h4 key={item.name}>{item.name}</h4>)}
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)