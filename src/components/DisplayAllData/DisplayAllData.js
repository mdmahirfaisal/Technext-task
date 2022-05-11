import ArticleIcon from '@mui/icons-material/Article';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkIcon from '@mui/icons-material/Link';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import React from 'react';


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

    // expand control
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='rounded-tl-[70px] rounded-br-[60px] bg-white' >
            <CardActionArea sx={{ paddingTop: 3 }}>
                <CardHeader sx={{ textAlign: 'start' }}
                    avatar={
                        <Avatar aria-label="recipe">
                            <img className='mx-auto' src={launch?.links?.mission_patch_small} alt="Avatar" />
                        </Avatar>
                    }
                    title={launch?.mission_name}
                    subheader={`${"Launch Date: "} ${launch?.launch_date_local.split('T')[0]}`}

                />
                <img className='h-[200px] md:h-[250px] mx-auto' src={launch?.links?.flickr_images.length ? launch?.links?.flickr_images[0] : launch?.links?.mission_patch} alt="Mission img" />

                <CardContent sx={{ textAlign: 'start', bgcolor: 'black', mt: 3, paddingBottom: 4, color: '#f1f2f6', position: 'relative' }}>

                    <h2 className='text-xl md:text-2xl font-medium md:font-semibold '>{launch?.rocket?.rocket_name || "Rocket name is not available"}</h2>
                    <p className='absolute right-5 top-5 text-lg'>{launch?.launch_success ? "Success" : "Failure"}</p>

                    <div className='mt-2'>
                        <p> <span className='font-medium text-red-600'>Flight number: </span> {launch?.flight_number}</p>

                        <p><span className='font-medium text-red-600'>Launch year: </span> {launch?.launch_year}</p>

                        <p>  <span className='font-medium text-red-600'>Nationality: </span>{launch?.rocket?.second_stage?.payloads[0]?.nationality}</p>

                        <p><span className='font-medium text-red-600'>Site name: </span> {launch?.launch_site?.site_name || "No Details Available"}</p>

                        <p> <span className='font-medium text-red-600'>Landing vehicle: </span>{launch?.rocket?.first_stage?.cores[0]?.landing_vehicle}</p>

                    </div>
                </CardContent>
            </CardActionArea>

            {/* ---- External Links ---- */}
            <CardActions sx={{ pb: 2 }} >
                <a href={launch?.links?.article_link} target="_blank" rel="noopener noreferrer">
                    <IconButton  >
                        <ArticleIcon sx={{ color: "green" }} />
                    </IconButton></a>
                <a href={launch?.links?.reddit_launch} target="_blank" rel="noopener noreferrer">
                    <IconButton  >
                        <LinkIcon sx={{ color: "blue" }} />
                    </IconButton></a>
                <a href={launch?.links?.video_link} target="_blank" rel="noopener noreferrer">
                    <IconButton  >
                        <YouTubeIcon sx={{ color: "red" }} />
                    </IconButton></a>

                <ExpandMore sx={{ color: 'black' }}
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit className=''>
                <CardContent sx={{ textAlign: 'start' }}>
                    <p>
                        <span className='font-medium'>Details: </span>
                        {launch?.details ? launch?.details.slice(0, 150) : "No Details Available"}</p>

                </CardContent>
            </Collapse>
        </div>
    );
}

export default DisplayAllData;