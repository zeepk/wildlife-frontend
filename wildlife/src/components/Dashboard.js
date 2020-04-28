import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { bugs } from '../data_files/bugs.json';
class Dashboard extends Component {
	render() {
		const bugs_rows = bugs.map((bug) => (
			<TableRow key={bug.id}>
				<TableCell component="th" scope="row">
					{bug.name}
				</TableCell>
				<TableCell align="right">{bug.rarity}</TableCell>
				<TableCell align="right">{bug.price}</TableCell>
				<TableCell align="right">{bug.location}</TableCell>
			</TableRow>
		));
		return (
			<div>
				<TableContainer component={Paper}>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCell align="right">Rarity</TableCell>
								<TableCell align="right">Price</TableCell>
								<TableCell align="right">Location</TableCell>
								<TableCell align="right">Caught</TableCell>
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
