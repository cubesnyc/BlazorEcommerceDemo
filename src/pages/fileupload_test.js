import { Check, FileUpload } from "@mui/icons-material";
import { Alert, Button, Card, CardContent, Paper, Snackbar, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import UploadDocuments from "components/onboarding/uploadDocuments";
import React from "react";

export default function Fileupload_test(props) {
	const { onChange, caption } = props;
	return <UploadDocuments />;
	// const [snackbarMsg, setSnackbarMsg] = React.useState(null);
	// const [snackbarOpen, setSnackbarOpen] = React.useState(false);
	// const [file, setFile] = React.useState(null);
	// const handleChange = async (event) => {
	// 	setFile(event.target.files[0]);
	// 	await new Promise((resolve) => setTimeout(resolve, 1000));
	// 	const random = Math.random();
	// 	const success = random > 0.5 ? true : false;
	// 	let msg, severity;
	// 	if (success) {
	// 		msg = "Resume uploaded successfully";
	// 		severity = "success";
	// 	} else {
	// 		msg = "Resume upload failed";
	// 		severity = "error";
	// 	}
	// 	setSnackbarMsg(
	// 		<Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
	// 			{msg}
	// 		</Alert>
	// 	);
	// 	setSnackbarOpen(true);
	// };
	// const handleClose = (event, reason) => {
	// 	console.log(reason);
	// 	if (reason === "clickaway") {
	// 		return;
	// 	}
	// 	setSnackbarOpen(false);
	// };

	return (
		<>
			<Button
				variant="contained"
				startIcon={<FileUpload />}
				// endIcon={}
				component="label"
				size="large"
			>
				<input
					hidden
					type="file"
					accept="application/pdf"
					onClick={(e) => (e.target.value = "")}
					onChange={onChange}
				/>
				{caption}
			</Button>
		</>
	);
}
