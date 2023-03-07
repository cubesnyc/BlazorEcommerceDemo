import { Checkbox, FormGroup, FormControl, FormControlLabel, Grid, Typography } from "@mui/material";
import LocationsSelect from "components/select/locationsSelect";
import PracticesSelect from "components/select/practicesSelect";
import YearSelect from "components/select/yearSelect";
import React from "react";

const SelectDefaults = ({ data, onDataChange }) => {
	//const [practices, setPractices] = React.useState([]);
	const handleDataChange = (value, data_type) => {
		const newData = { ...data };
		newData[data_type] = value;
		onDataChange(newData);
	};

	const handleSelectOnChange = (event, select_type) => {
		const {
			target: { value },
		} = event;
		handleDataChange(value, select_type);
	};

	const handleCheckboxChange = (event, data_type) => {
		const value = event.target.checked;
		handleDataChange(value, data_type);
	};

	return (
		<>
			<Typography>
				Answer a few questions about your experience and where you want to work. LatList will curate listings
				specialized to you based on your answers. Don't worry, this will only take a minute.
				<br />
				<br />
			</Typography>
			<Grid container spacing={4} display="flex" direction="column" alignItems="center" justifyContent="center">
				<Grid
					item
					xs={12}
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Typography>What year did you graduate law school?</Typography>
					<YearSelect value={data.year ?? ""} onChange={(e) => handleSelectOnChange(e, "year")}></YearSelect>
				</Grid>
				<Grid
					item
					xs={12}
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Typography>Where do you want to work?</Typography>
					<Typography>(Pick as many cities as you want)</Typography>
					<LocationsSelect
						value={data.locations ?? []}
						onChange={(e) => handleSelectOnChange(e, "locations")}
					></LocationsSelect>
				</Grid>
				<Grid
					item
					xs={12}
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Typography>What areas of law have you practiced?</Typography>
					<PracticesSelect
						value={data.practices ?? []}
						onChange={(e) => handleSelectOnChange(e, "practices")}
					></PracticesSelect>
				</Grid>
				<Grid item xs={12}>
					<FormGroup>
						<FormControlLabel
							control={<Checkbox />}
							label="Check if you have previously clerked"
							onChange={(e) => handleCheckboxChange(e, "hasClerked")}
							checked={data.hasClerked ?? false}
						/>
					</FormGroup>
				</Grid>
			</Grid>
		</>
	);
};

export default SelectDefaults;
