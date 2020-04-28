import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { bugs } from '../data_files/bugs.json';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Checkbox from '@material-ui/core/Checkbox';
import '../styles/Dashboard.css';

// displays a green check if the month is set to 1 instead of 0
const month_display = (is_available) => {
	if (is_available === '1') {
		return <CheckCircleIcon style={{ color: 'green' }} />;
	}
};

// checks local storage to populate checkboxes
const is_checked = (name) => {
	if (window.localStorage.getItem(name) === 'true') {
		return true;
	} else {
		return false;
	}
};

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = { ren: false };
	}

	componentDidMount() {
		if (
			typeof Storage !== 'undefined' &&
			localStorage.getItem('Spider') === null
		) {
			console.log('Could not find local storage. Creating...');
			bugs.map((bug) => {
				window.localStorage.setItem(bug.name, false);
				return bug;
			});
		}
	}
	// check for local storage, create if not found

	checkbox_change = (name) => {
		console.log('changing...');
		if (window.localStorage.getItem(name) === 'false') {
			window.localStorage.setItem(name, 'true');
		} else if (window.localStorage.getItem(name) === 'true') {
			window.localStorage.setItem(name, 'false');
		} else {
			alert('Something went wrong with updating local storage');
		}
		this.setState({
			ren: !this.state.ren,
		});
		return name;
	};

	render() {
		const bugs_rows = bugs.map((bug) => (
			<TableRow key={bug.id}>
				<TableCell component="th" scope="row">
					{bug.name}
				</TableCell>
				<TableCell align="left">
					<Checkbox
						color="primary"
						checked={is_checked(bug.name)}
						onChange={() => this.checkbox_change(bug.name)}
					/>
				</TableCell>
				<TableCell align="left">{bug.rarity}</TableCell>
				<TableCell align="left">{bug.price}</TableCell>
				<TableCell align="left">{bug.location}</TableCell>
				<TableCell align="left">{month_display(bug.january)}</TableCell>
				<TableCell align="left">{month_display(bug.february)}</TableCell>
				<TableCell align="left">{month_display(bug.march)}</TableCell>
				<TableCell align="left">{month_display(bug.april)}</TableCell>
				<TableCell align="left">{month_display(bug.may)}</TableCell>
				<TableCell align="left">{month_display(bug.june)}</TableCell>
				<TableCell align="left">{month_display(bug.july)}</TableCell>
				<TableCell align="left">{month_display(bug.august)}</TableCell>
				<TableCell align="left">{month_display(bug.september)}</TableCell>
				<TableCell align="left">{month_display(bug.october)}</TableCell>
				<TableCell align="left">{month_display(bug.november)}</TableCell>
				<TableCell align="left">{month_display(bug.december)}</TableCell>
				<TableCell align="left">{bug.time}</TableCell>
			</TableRow>
		));
		return (
			<div className="table-container">
				<TableContainer component={Paper}>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCell align="left">Caught</TableCell>
								<TableCell align="left">Rarity</TableCell>
								<TableCell align="left">Price</TableCell>
								<TableCell align="left">Location</TableCell>
								<TableCell align="left">Jan</TableCell>
								<TableCell align="left">Feb</TableCell>
								<TableCell align="left">Mar</TableCell>
								<TableCell align="left">Apr</TableCell>
								<TableCell align="left">May</TableCell>
								<TableCell align="left">June</TableCell>
								<TableCell align="left">July</TableCell>
								<TableCell align="left">Aug</TableCell>
								<TableCell align="left">Sept</TableCell>
								<TableCell align="left">Oct</TableCell>
								<TableCell align="left">Nov</TableCell>
								<TableCell align="left">Dec</TableCell>
								<TableCell align="left">Time</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>{bugs_rows}</TableBody>
					</Table>
				</TableContainer>
			</div>
		);
	}
}

export default Dashboard;
