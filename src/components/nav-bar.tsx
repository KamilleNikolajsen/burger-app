import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Review from "../pages/review-page/Review";
import Home from "../pages/home-page/Home";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import './nav-bar.css';
import BurgerPlacesMap from "../pages/map-page/BurgerMap";
import {TabPanelProps} from "../models/apiModels";
import GetImage from "../pages/gallery-page/GalleryPage";
import GalleryList from "../pages/gallery-page/GalleryList";

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            className="tab-panel"
        >
            {value === index && (
                <Box style={{padding: "24px"}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function tabId(index: number) {
    return {
        id: `simple-tab-${index}`,
    };
}

export default function MenuTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', height: '100vh'}}>
            <Box className="nav-bar" sx={{borderBottom: 1, borderColor: 'divider'}}>
                <div className="nav-bar-title">
                    <FastfoodIcon/> Burger Social
                </div>
                <Tabs className="nav-bar-tabs" orientation="vertical" value={value} onChange={handleChange}
                      aria-label="basic tabs">
                    <Tab className={value === 0 ? "selected-tab" : ""} label="Home" {...tabId(0)}/>
                    <Tab className={value === 1 ? "selected-tab" : ""} label="Review" {...tabId(1)}/>
                    <Tab className={value === 2 ? "selected-tab" : ""} label="Gallery" {...tabId(2)}/>
                    <Tab className={value === 3 ? "selected-tab" : ""} label="Map" {...tabId(3)}/>
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
            <Home />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Review />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <div className="page">
                    <GetImage />
                    <GalleryList />
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <div className="page-title">
                    Map of Burger Places
                </div>
                <div className="burger-text">
                    Here you can find the best burgers in and around town. Just search for a city or your favorite burger place.
                </div>
                <div className="div-with-divider"/>
                <div className="burger-map">
                    <BurgerPlacesMap/>
                </div>
            </CustomTabPanel>
        </Box>
    );
}
