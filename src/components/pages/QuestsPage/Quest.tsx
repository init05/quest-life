'use client'

import {
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
import {useState} from "react";
import ExpandMoreButton from "@/components/pages/QuestsPage/ExpandMore.Button";
import {ExpandMore} from "@mui/icons-material";
import theme from "@/utils/theme";

const Quest: React.FC<QuestProps> = ({title, penalty, reward, startTime, endTime, description, id}) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const endDate = new Date(endTime);
    const startDate = new Date(startTime ? startTime : "");
    const currentDate = new Date();
    const matchesMobile = useMediaQuery(theme.breakpoints.up('sm'));

    const normalise = (value: number) => ((value - startDate.getTime()) * 100) / (endDate.getTime() - startDate.getTime());
    const normalisedCurrentTime = normalise(currentDate.getTime());

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

    return (
        <ListItem>
            <Card sx={{width: "100%"}}>
                <CardContent>
                    <Typography sx={{mb: 2}} variant={"h5"} component={"h5"}>
                        {title}
                    </Typography>
                    <Typography sx={{maxWidth: matchesMobile ? "30%" : "100%"}} paragraph>
                        {description}
                    </Typography>
                    <LinearProgress variant="determinate" color={getProgressColor(normalisedCurrentTime)} value={normalisedCurrentTime}/>
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
                            Reward: {reward}
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