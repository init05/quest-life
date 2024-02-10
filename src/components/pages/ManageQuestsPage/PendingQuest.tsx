'use client'

import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Collapse,
    Divider,
    LinearProgress, ListItem,
    Typography, useMediaQuery
} from "@mui/material";
import ExpandMoreButton from "@/components/pages/QuestsPage/ExpandMore.Button";
import {ExpandMore} from "@mui/icons-material";
import {Reward} from "@/components/pages/QuestsPage/types";
import {useEffect, useState} from "react";
import theme from "@/utils/theme";
import getProgressColor from "@/utils/getProgressColor";
import formatDate from "@/utils/formatDate";

export type PendingQuestProps = {
    id: string;
    title: string;
    description: string;
    endTime: string;
    reward: Reward;
    penalty?: string;
    daily?: boolean;
}

const PendingQuest: React.FC<PendingQuestProps> = ({
                                                       id,
                                                       title,
                                                       penalty,
                                                       reward,
                                                       endTime,
                                                       description,
                                                       daily
                                                   }) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const matchesMobile = useMediaQuery(theme.breakpoints.up('sm'));
    const [currentDate, setCurrentDate] = useState(new Date());
    const endDate = new Date(endTime);
    const startDate = new Date(parseInt(id) - 1000);
    const normalise = (value: number) => startDate ? ((value - startDate.getTime()) * 100) / (endDate.getTime() - startDate.getTime()) : ((value - endDate.getTime() - 10000) * 100) / (endDate.getTime() - endDate.getTime() - 10000);
    const [normalisedCurrentTime, setNormalisedCurrentTime] = useState(normalise(currentDate.getTime()));

    const handleExpandClick = () => {
        setExpanded(prevState => !prevState);
    }

    useEffect(() => {
        let timer = setInterval(() => setCurrentDate(new Date()), 1000);

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
                            <Button variant="outlined" color="error">
                                Cancel
                            </Button>
                            <Button variant="contained" color="success">
                                Accept
                            </Button>
                        </Box>
                    </Box>
                    <LinearProgress variant="determinate" color={getProgressColor(normalisedCurrentTime)}
                                    value={normalisedCurrentTime}/>
                    <Box sx={{width: '100%', display: "flex", position: "relative", mt: "5px"}} role="presentation">
                        <Typography sx={{position: 'absolute'}}>
                            {formatDate(startDate, currentDate)}
                        </Typography>
                        {
                            matchesMobile &&
                            <Typography sx={{position: 'absolute', left: `${normalisedCurrentTime - 7}%`}}>
                                {formatDate(currentDate, currentDate)}
                            </Typography>
                        }
                        <Typography sx={{position: 'absolute', right: 0}}>
                            {formatDate(endDate, currentDate)}
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
export default PendingQuest;