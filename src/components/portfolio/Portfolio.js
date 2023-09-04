import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";
import IconLink from './IconLink';

export default function Portfolio() {
    return (
		<Box>
			<h4>
				Some of the projects I have done <br /> in college are available below.
			</h4>
			<Grid container display={'flex'} justifyContent={'center'} flexWrap={'wrap'} alignContent={'center'} gap={'2rem'}>
				{info.portfolio.map((project, index) => (
					<Grid item xs={6} md={3} key={index} display={'flex'} flexDirection={'column'} alignItems={'center'}>
						<PortfolioBlock image={project.image} />
						<Grid container display={'flex'} justifyContent={'center'} alignContent={'center'} fontSize={'40px'}>
							<IconLink link={project.github} icon={project.gitIcon} />
							<IconLink link={project.live} icon={project.liveIcon} />
						</Grid>
					</Grid>
				))}
			</Grid>
		</Box>
    );
};