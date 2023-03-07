import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import locations from "./../../data/locations.json";
import { Menu } from "@mui/material";

export default function LocationsSelect(props) {
	return (
		<FormControl sx={{ minWidth: 300 }} size="small">
			<InputLabel id="locationsFilter">Locations</InputLabel>
			<Select
				multiple
				labelId="locationsFilter"
				id="locations_filter"
				value={props.value}
				onChange={props.onChange}
				input={<OutlinedInput label="Locations" />}
			>
				{locations.map((p, i) => (
					<MenuItem key={i} value={p.location_id}>
						{p.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
