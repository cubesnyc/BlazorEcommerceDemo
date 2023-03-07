import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import locations from "./../../data/locations.json";
import { Menu } from "@mui/material";

export default function YearSelect(props) {
	return (
		<FormControl sx={{ minWidth: 300 }} size="small">
			<InputLabel id="yearFilter">Graduation Year</InputLabel>
			<Select
				labelId="yearFilter"
				id="year_filter"
				value={props.value}
				onChange={props.onChange}
				input={<OutlinedInput label="Graduation Year" />}
			>
				{Array(20)
					.fill(0)
					.map((p, i) => {
						const year = 2002 - i;
						return (
							<MenuItem key={i} value={year}>
								{year}
							</MenuItem>
						);
					})}
			</Select>
		</FormControl>
	);
}
