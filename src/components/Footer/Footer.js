import React from 'react'
import { Typography } from '@material-ui/core'

const Footer = () => {
    return (
        <footer style={{padding: "0 50px", backgroundColor: "lightgray"}}>
            <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary">
                Copyright 2021 @Teamdowhile2021
            </Typography>
        </footer>
    )
}

export default Footer
