import {
	AppBar,
	Box,
	Typography,
	Button,
	IconButton,
	Toolbar,
	Fade,
	Fab,
	useMediaQuery,
	Select,
	OutlinedInput,
	InputLabel,
	FormControl,
	Card,
	CardContent,
	Stack,
} from "@mui/material";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { MenuOpen, KeyboardArrowUp, Refresh } from "@mui/icons-material";
import { Container, fontSize } from "@mui/system";

function ScrollTop(props) {
	const { children, window } = props;
	//
	const scrollTrigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");

		if (anchor) {
			anchor.scrollIntoView({
				block: "center",
			});
		}
	};

	return (
		<Fade in={scrollTrigger}>
			<Box onClick={handleClick} role="presentation" sx={{ position: "fixed", bottom: 16, right: 16 }}>
				{children}
			</Box>
		</Fade>
	);
}

export default function Mui(props) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const [locationsFilter, setLocationsFilter] = React.useState([]);
	const handleLocationsFilterChange = (event) => {
		const {
			target: { value },
		} = event;
		setLocationsFilter(value);
	};
	const [practicesFilter, setPracticesFilter] = React.useState([]);
	const handlePracticesFilterChange = (event) => {
		const {
			target: { value },
		} = event;
		setPracticesFilter(value);
	};
	const isSmallForm = useMediaQuery("(max-width:720px)"); //xs, sm md
	return (
		<>
			<AppBar>
				<Toolbar>
					<Box flexGrow={1}>
						<Typography sx={{ fontWeight: "1000" }}>LATLIST</Typography>
					</Box>
					{isSmallForm ? (
						<>
							<IconButton onClick={handleClick} sx={{ color: "white" }}>
								<MenuOpen></MenuOpen>
							</IconButton>
							<Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleLocationsFilterChange}>
								<MenuItem>Listings</MenuItem>
								<MenuItem>Applications</MenuItem>
								<MenuItem>Settings</MenuItem>
								<MenuItem>Terms</MenuItem>
							</Menu>
						</>
					) : (
						<>
							<Button sx={{ color: "white" }}>Listings</Button>
							<Button sx={{ color: "white" }}>Applications</Button>
							<Button sx={{ color: "white" }}>Settings</Button>
							<Button sx={{ color: "white" }}>Terms</Button>
						</>
					)}
				</Toolbar>
			</AppBar>
			<Box id="back-to-top-anchor" height={100} />
			<Container>
				<Toolbar
					disableGutters
					sx={{ height: "100px", padding: "0px", paddingLeft: "0px", paddingRight: "0px" }}
				>
					{/* LOCATION FILTER */}
					<FormControl sx={{ width: 300 }} size="small">
						<InputLabel id="locationsFilter">Locations</InputLabel>
						<Select
							multiple
							labelId="locationsFilter"
							id="locations_filter"
							value={locationsFilter}
							onChange={handleLocationsFilterChange}
							input={<OutlinedInput label="Location" />}
						>
							<MenuItem value={1}>Ten</MenuItem>
							<MenuItem value={2}>Twenty</MenuItem>
							<MenuItem value={3}>Thirty</MenuItem>
						</Select>
					</FormControl>
					{/* PRACTICE FILTER */}
					<FormControl sx={{ width: 300 }} size="small">
						<InputLabel id="practicesFilter">Practices</InputLabel>
						<Select
							multiple
							labelId="practicesFilter"
							id="practices_filter"
							value={practicesFilter}
							onChange={handlePracticesFilterChange}
							input={<OutlinedInput label="Location" />}
						>
							<MenuItem value={1}>Ten</MenuItem>
							<MenuItem value={2}>Twenty</MenuItem>
							<MenuItem value={3}>Thirty</MenuItem>
						</Select>
					</FormControl>

					<Button variant="contained" startIcon={<Refresh />}>
						Refresh
					</Button>
					{/* <IconButton onClick={handleClick} sx={{}}>
		
	</IconButton> */}
					{/* YEAR FILTER */}
					{/* <FormControl sx={{ width: 300 }}>
	<InputLabel id="locationFilter">Location</InputLabel>
	<Select
	multiple
	labelId="locationFilter"
	id="location_filter"
	value={locationsFilter}
	onChange={handleLocationFilterChange}
	input={<OutlinedInput label="Location" />}
	>
	<MenuItem value={1}>Ten</MenuItem>
	<MenuItem value={2}>Twenty</MenuItem>
	<MenuItem value={3}>Thirty</MenuItem>
	</Select>
</FormControl> */}
				</Toolbar>
				<Stack direction="column" spacing={4}>
					{Array(12)
						.fill()
						.map((_) => (
							<Card variant="outlined">
								<CardContent>
									<Typography variant="h4">Job Title</Typography>
									<Typography variant="h6">Locations</Typography>
									<Typography>
										Often a card allow users to interact with the entirety of its surface to trigger
										its main action, be it an expansion, a link to another screen or some other
										behavior. The action area of the card can be specified by wrapping its contents
										in a CardActionArea component. Often a card allow users to interact with the
										entirety of its surface to trigger its main action, be it an expansion, a link
										to another screen or some other behavior. The action area of the card can be
										specified by wrapping its contents in a CardActionArea component.
									</Typography>
									<Typography sx={{ fontSize: ".75em" }}>Last Updated: 1/1/1900</Typography>
								</CardContent>
							</Card>
						))}
				</Stack>

				<ScrollTop {...props}>
					<Fab>
						<KeyboardArrowUp />
					</Fab>
				</ScrollTop>
			</Container>
		</>
	);
}
