import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArticleIcon from '@mui/icons-material/Article';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const DisplayAllData = ({ launch }) => {
    const { details, links, rocket, flight_number, launch_date_local, launch_date_unix, launch_failure_details, launch_site, launch_success, launch_year, video_link, mission_name, static_fire_date_unix, upcoming, tentative_max_precision, reddit_campaign, } = launch;

    const externalLinkOpen = (link) => {
        console.log(link)
    }

    // expand control
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            <CardHeader sx={{ textAlign: 'start' }}
                avatar={
                    <Avatar aria-label="recipe">
                        <img className='mx-auto' src={links?.mission_patch_small} alt="Avatar" />
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={mission_name}
                subheader={launch_date_local}
            />
            <img className='h-[150px] md:h-[200px] mx-auto' src={links?.mission_patch} alt="Mission img" />
            <CardContent sx={{ textAlign: 'start' }}>
                <Typography variant="body2">
                    <span className='font-bold'>Rocket: </span> {rocket?.rocket_name || "Rocket name is missing"}
                </Typography>
                <Typography variant="body2" >
                    <span className='font-bold'>Site name: </span> {launch_site?.site_name || "No Details Available"}
                </Typography>
            </CardContent>

            {/* ---- External Links ---- */}

            <CardActions disableSpacing>

                <a href={links?.article_link} target="_blank" rel="noopener noreferrer">
                    <IconButton  >
                        <ArticleIcon />
                    </IconButton></a>
                <a href={links?.reddit_launch} target="_blank" rel="noopener noreferrer">
                    <IconButton  >
                        <RocketLaunchIcon />
                    </IconButton></a>
                <a href={links?.video_link} target="_blank" rel="noopener noreferrer">
                    <IconButton  >
                        <YouTubeIcon />
                    </IconButton></a>

                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent sx={{ textAlign: 'start' }}>

                    <Typography paragraph color="text.secondary">
                        <span className='font-bold'>Details: </span> {details || "No Details Available"}
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
    );
}

export default DisplayAllData;