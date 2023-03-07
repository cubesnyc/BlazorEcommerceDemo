import MobileStepper from "@mui/material/MobileStepper";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { DoneAll, KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import React, { useState } from "react";
import {
	CardContent,
	CardHeader,
	Checkbox,
	Divider,
	Grid,
	Typography,
	useTheme,
	FormGroup,
	FormControlLabel,
} from "@mui/material";
import PracticesSelect from "components/select/practicesSelect";
import { Box, FormControl, InputLabel, Select, MenuItem, OutlinedInput } from "@mui/material";
import SelectDefaults from "components/onboarding/selectDefaults";
import UploadDocuments from "components/onboarding/uploadDocuments";
import PersonalInformation from "components/onboarding/personalInformation";

export default function Stepper(props) {
	const handleFinish = () => {
		console.log(stepData);
	};

	const persistText = () => {};

	const persistFiles = () => {};

	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	const handleDataUpdate = (data) => {
		const newStepData = [...stepData];
		newStepData[activeStep] = data;
		updateStepData(newStepData);
	};

	const [stepData, updateStepData] = useState(Array(3).fill({}));
	const steps = [
		<SelectDefaults key={0} data={stepData[0]} onDataChange={handleDataUpdate} />,
		<UploadDocuments key={1} data={stepData[1]} onDataChange={handleDataUpdate} />,
		<PersonalInformation key={2} data={stepData[2]} onDataChange={handleDataUpdate} />,
	];

	//const steps = [<SelectDefaults key={0} />, <UploadDocuments key={1} />, <PersonalInformation key={0} />];
	//steps.forEach((s, i) => (s.save = () => console.log(String(i) + "saved")));
	const [activeStep, setActiveStep] = React.useState(0);

	const theme = useTheme();

	return (
		<>
			<Container>
				<Card variant="outlined">
					<CardHeader
						subheader="Welcome to LatList!"
						subheaderTypographyProps={{ variant: "h5", color: "white" }}
						sx={{ bgcolor: theme.palette.primary.main }}
					/>
					<Divider variant="middle" />
					<CardContent sx={{ minHeight: "500px" }}>{steps[activeStep]}</CardContent>

					<MobileStepper
						variant="dots"
						position="static"
						steps={steps.length}
						activeStep={activeStep}
						nextButton={
							activeStep == steps.length - 1 ? (
								<Button variant="contained" onClick={handleFinish}>
									Finish
								</Button>
							) : (
								<Button variant="contained" onClick={handleNext}>
									Next
									<KeyboardArrowRight />
								</Button>
							)
						}
						backButton={
							<Button variant="contained" onClick={handleBack} disabled={activeStep === 0}>
								<KeyboardArrowLeft />
								Back
							</Button>
						}
						// sx={{ bgcolor: "#dddddd" }}
					></MobileStepper>
				</Card>
			</Container>
		</>
	);
}
