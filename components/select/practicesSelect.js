import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import practices from "./../../data/practices.json";
import { Menu } from "@mui/material";

export default function PracticesSelect(props) {
	return (
		<FormControl sx={{ minWidth: 300 }} size="small">
			<InputLabel id="practicesFilter">Practices</InputLabel>
			<Select
				multiple
				labelId="practicesFilter"
				id="practices_filter"
				value={props.value}
				onChange={props.onChange}
				input={<OutlinedInput label="Practices" />}
			>
				{practices.map((p, i) => (
					<MenuItem key={i} value={p.practice_id}>
						{p.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
