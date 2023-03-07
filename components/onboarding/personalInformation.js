import { Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function PersonalInformation({ data, onDataChange }) {
	const handleDataChange = (e, data_type) => {
		const newData = { ...data };
		//console.log(e);
		newData[data_type] = e.target.value;
		onDataChange(newData);
	};

	return (
		<>
			<Typography>
				Please tell us your name and a good contact number to reach you if we need to get in touch. This
				information will not be shared with anyone without your permission.
			</Typography>
			<Stack spacing={2} marginTop={4}>
				<TextField
					label="Name"
					size="small"
					type="text"
					value={data.name ?? ""}
					onChange={(e) => handleDataChange(e, "name")}
				></TextField>
				<TextField
					type="tel"
					label="Phone number"
					size="small"
					value={data.phone ?? ""}
					onChange={(e) => handleDataChange(e, "phone")}
				></TextField>
			</Stack>
		</>
	);
}
