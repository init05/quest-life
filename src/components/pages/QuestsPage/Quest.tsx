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
import getProgressColor from "@/utils/getProgressColor";
import formatDate from "@/utils/formatDate";
import useActiveQuestsStore from "@/stores/activeQuestsStore";

const Quest: React.FC<QuestProps> = ({title, penalty, reward, startTime, endTime, description, id, daily, active}) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const activateQuest = useActiveQuestsStore(state => state.activateQuest);
    const endDate = new Date(endTime);
    const startDate = new Date(startTime ? startTime : "2024-02-03T10:26:49+0000");
    const matchesMobile = useMediaQuery(theme.breakpoints.up('sm'));

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

    const handleActivate = () => {
        const quest: QuestProps = {
            id: id,
            title: title,
            penalty: penalty,
            reward: reward,
            startTime: currentDate.toString(),
            endTime: endTime,
            description: description,
            daily: daily,
            active: true
        }
        activateQuest(quest);

    }

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
                            Penalty: {penalty?.title}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </ListItem>
    )
}
export default Quest;