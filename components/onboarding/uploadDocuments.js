import { Alert, Container, Grid, Snackbar, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import FileUpload from "components/fileUpload";
import React, { useEffect } from "react";

export default function UploadDocuments({ data, onDataChange }) {
	const [snackMessages, setSnackMessages] = React.useState([]);
	const [snackbarOpen, setSnackbarOpen] = React.useState(false);
	const [currentMessage, setCurrentMessage] = React.useState(undefined);
	const [buttonColors, setButtonColors] = React.useState({});

	useEffect(() => {
		//console.log(snackMessages, snackbarOpen);
		if (!snackbarOpen && snackMessages.length) {
			setCurrentMessage(snackMessages[0]);
			setSnackMessages((prev) => prev.slice(1));
			setSnackbarOpen(true);
		}
	}, [snackMessages, snackbarOpen]);

	//useEffect( {}, [])
	const appendMessage = (msg, type) => {
		setSnackMessages((prev) => [...prev, { key: new Date().getTime(), msg, type }]);
		//if (!snackbarOpen) setSnackbarOpen(true);
	};

	const handleSnackbarClose = (e, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setSnackbarOpen(false);
	};

	const handleChange = async (event, label, file_type) => {
		setButtonColors((prev) => {
			return { ...prev, [file_type]: "success" };
		});

		const file = event.target.files[0];
		const newData = { ...data };
		newData[file_type] = file;
		onDataChange(newData);
		// await new Promise((resolve) => setTimeout(resolve, 1000));
		// const r = Math.random();

		// if (r > 0.5) {
		// 	appendMessage("Successfully uploaded your " + label, "success");
		// 	setButtonColors((prev) => {
		// 		return { ...prev, [file_type]: "success" };
		// 	});
		// } else {
		// 	appendMessage("There was an error uploading your " + label, "error");
		// 	setButtonColors((prev) => {
		// 		return { ...prev, [file_type]: "error" };
		// 	});
		// 	console.log(buttonColors);
		// }
	};

	return (
		<>
			<Typography>
				We will NEVER share any of these documents with a firm (or anyone else) without your permission. When
				you apply to a firm, you're giving us permission to send these documents to that firm, and only that
				firm.
				<br />
				<br />
				Don't want to provide all of these documents now? That's fine, you can still view listings, but you'll
				need to provide your resume before applying to any job. Firms may be willing to allow you to apply with
				a resume only, but most will ask for these documents eventually, so you should provide them now if you
				have them.
			</Typography>
			<Container>
				<Box sx={{ width: "55%", marginLeft: "auto", marginRight: "auto" }}>
					<Stack direction="column" alignItems="center" spacing={2} marginTop={4}>
						<FileUpload
							label="Upload Your Resume"
							fit
							onChange={(e) => handleChange(e, "Resume", "resume")}
							color={buttonColors["resume"]}
							value={data.resume}
						/>
						<FileUpload
							label="Upload Your Transcript"
							fit
							onChange={(e) => handleChange(e, "Transcript", "transcript")}
							color={buttonColors["transcript"]}
							value={data.transcript}
						/>
						<FileUpload
							label="Upload Your Writing Sample"
							fit
							onChange={(e) => handleChange(e, "Writing sample", "writing")}
							color={buttonColors["writing"]}
							value={data.writing}
						/>
					</Stack>
				</Box>
			</Container>
			<Snackbar
				key={currentMessage?.key}
				open={snackbarOpen}
				autoHideDuration={1500}
				onClose={handleSnackbarClose}
			>
				<Alert onClose={handleSnackbarClose} severity={currentMessage?.type} sx={{ width: "100%" }}>
					{currentMessage?.msg}
				</Alert>
			</Snackbar>
		</>
	);
}
