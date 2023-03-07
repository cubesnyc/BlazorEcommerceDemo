import { Check, FileUpload as FileUploadIcon } from "@mui/icons-material";
import {
	Alert,
	Button,
	Card,
	CardContent,
	Paper,
	Snackbar,
	Stack,
	TextField,
	ThemeProvider,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function FileUpload({ onChange, label, value, ...props }) {
	const style = {
		...(props.fit ? { width: "100%" } : undefined),
		// ...(props.color ? { color: "success" } : undefined),
		//color: theme.p,
	};

	return (
		<>
			<Button
				variant="contained"
				startIcon={<FileUploadIcon />}
				// endIcon={}
				component="label"
				size="large"
				sx={style}
				color={props.color}
			>
				<input
					hidden
					type="file"
					accept="application/pdf"
					// value={value}
					onClick={(e) => (e.target.value = "")}
					onChange={onChange}
				/>
				{label}
			</Button>
		</>
	);
}
