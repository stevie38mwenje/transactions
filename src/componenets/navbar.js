import React from "react";
import {AppBar, CssBaseline, makeStyles, Toolbar, Typography,} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(10),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                {/*<Typography variant="h4" className={classes.logo}>*/}
                {/*    <Link to="/" className={classes.link}>*/}
                {/*        Transactions*/}
                {/*    </Link>*/}
                {/*</Typography>*/}
                <div className={classes.navlinks}>
                    <Link to="/transactions" className={classes.link}>
                        Transactions
                    </Link>

                </div>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;