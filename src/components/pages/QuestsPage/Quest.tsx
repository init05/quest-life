'use client'

import {
    Box, Button,
    Card,
    CardActions,
    CardContent,
    Collapse,
    Divider,
    LinearProgress,
    ListItem,
    Typography,
    useMediaQuery
} from "@mui/material";
import {QuestProps} from "@/components/pages/QuestsPage/types";
import {useEffect, useState} from "react";
import ExpandMoreButton from "@/components/pages/QuestsPage/ExpandMore.Button";
import {ExpandMore} from "@mui/icons-material";
import theme from "@/utils/theme";

const Quest: React.FC<QuestProps> = ({title, penalty, reward, startTime, endTime, description, id, daily, active}) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const endDate = new Date(endTime);
    const startDate = new Date(startTime ? startTime : "");
    const matchesMobile = useMediaQuery(theme.breakpoints.up('sm'));

    const normalise = (value: number) => ((value - startDate.getTime()) * 100) / (endDate.getTime() - startDate.getTime());
    const [normalisedCurrentTime, setNormalisedCurrentTime] = useState(normalise(currentDate.getTime()));

    const handleExpandClick = () => {
        setExpanded(prevState => !prevState);
    }

    const getProgressColor = (value: number) => {
        if (value > 80) {
            return "error";
        } else if (value > 50) {
            return "warning"
        }
        return "primary"
    }

    // Needs to be changed
    const formattedDate = (date: Date) => {
        if (date.getTime() < currentDate.getTime()) {
            return `${date.toUTCString()}`
            // return `${date.getUTCDate()} ${months[date.getMonth()]} ${dayDictionary[date.getDay()]}`
        } else if (date === currentDate) {
            return `${date.toUTCString()}`
            // return `${date.toUTCString()} ${dayDictionary[date.getDay()]}`
        } else {
            return `${date.toUTCString()}`
            // return `${date.toUTCString()} ${dayDictionary[date.getDay()]}`
        }
    }

    useEffect(() => {
        let timer = setInterval(()=>setCurrentDate(new Date()), 1000);

        return function cleanup() {
            clearInterval(timer);
        }
    }, []);

    return (
        <ListItem>
            <Card sx={{width: "100%"}}>
                <CardContent>
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                        <Box sx={{display: "flex", flexDirection: "column"}}>
                            <Typography sx={{mb: 2}} variant={"h5"} component={"h5"}>
                                {title}
                            </Typography>
                            <Typography sx={{maxWidth: matchesMobile ? "30%" : "100%"}} paragraph>
                                {description}
                            </Typography>
                        </Box>
                        <Box sx={{display: "flex", alignSelf: "flex-end", mb: "10px", gap: "10px"}}>
                            {
                                active ?
                                    <Button variant="outlined" color="error">
                                        Cancel
                                    </Button>
                                    :
                                    <Button variant="contained" color="success">
                                        Accept
                                    </Button>
                            }
                        </Box>
                    </Box>
                    <LinearProgress variant="determinate" color={getProgressColor(normalisedCurrentTime)}
                                    value={normalisedCurrentTime}/>
                    <Box sx={{width: '100%', display: "flex", position: "relative", mt: "5px"}} role="presentation">
                        <Typography sx={{position: 'absolute'}}>
                            {formattedDate(startDate)}
                        </Typography>
                        {
                            matchesMobile &&
                            <Typography sx={{position: 'absolute', left: `${normalisedCurrentTime - 7}%`}}>
                                {formattedDate(currentDate)}
                            </Typography>
                        }
                        <Typography sx={{position: 'absolute', right: 0}}>
                            {formattedDate(endDate)}
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <ExpandMoreButton expand={expanded} onClick={handleExpandClick} aria-expanded={expanded}
                                      aria-label="show more">
                        <ExpandMore/>
                    </ExpandMoreButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Divider/>
                    <CardContent>
                        <Typography>
                            Reward: {reward.title}
                        </Typography>
                        <Typography>
                            Penalty: {penalty}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </ListItem>
    )
}
export default Quest;