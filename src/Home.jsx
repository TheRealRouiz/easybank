
import { useState } from 'react'
import './assets/styles/Home.css'
import bgIntro from './assets/images/bg-intro-desktop.svg'
import phones from './assets/images/image-mockups.png'
import { Container, Typography, Button, Grid, Paper } from '@mui/material'
import icon1 from './assets/images/icon-online.svg'
import blogPic1 from './assets/images/image-restaurant.jpg'
import blogPic2 from './assets/images/image-confetti.jpg'
import blogPic3 from './assets/images/image-currency.jpg'
import blogPic4 from './assets/images/image-plane.jpg'


const Home = () => {
    const [leftColTitle, setLeftColTitle] = useState("Next generation Banking")
    const [leftColText, setLeftColtext] = useState("Take your financial life online, Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.")

    
    return (
        <div className="home-wrapper">

            <section className="sec-1 hero">
                <div className="left-col">
                    <div className="text-container">
                        <Typography variant='h2' >{leftColTitle}</Typography>
                        <Typography variant='h6'>{leftColText}</Typography>
                        <Button variant="contained" color="success">
                            Request info
                        </Button>
                    </div>

                </div>
                <div className="right-col">
                    <img className='img1' src={bgIntro} alt="" />
                    <img className="img2" src={phones} alt="" />
                </div>
            </section>

            <section className="sec-2 hero">
                <Container className='upper-div'>
                    <Typography variant='h3' >{leftColTitle}</Typography>
                    <Typography className='subtitle2' variant='subtitle2'>{leftColText}</Typography>
                </Container>

                <Container className='lower-div'>
                    <Container className='pros-list'>
                        <img src={icon1} alt="" />
                        <div className="inner-text">
                            <Typography variant='subtitle2'>{leftColTitle}</Typography>
                            <Typography variant='caption'>{leftColText}</Typography>
                        </div>
                    </Container>

                    <Container className='pros-list'>
                        <img src={icon1} alt="" />
                        <div className="inner-text">
                            <Typography variant='subtitle2'>{leftColTitle}</Typography>
                            <Typography variant='caption'>{leftColText}</Typography>
                        </div>
                    </Container>

                    <Container className='pros-list'>
                        <img src={icon1} alt="" />
                        <div className="inner-text">
                            <Typography variant='subtitle2'>{leftColTitle}</Typography>
                            <Typography variant='caption'>{leftColText}</Typography>
                        </div>

                    </Container>

                    <Container className='pros-list'>
                        <img src={icon1} alt="" />
                        <div className="inner-text">
                            <Typography variant='subtitle2'>{leftColTitle}</Typography>
                            <Typography variant='caption'>{leftColText}</Typography>
                        </div>
                    </Container>

                </Container>
            </section>

            <section className='sec-3 hero'>

                <Grid container spacing={2} className='blog-grid' justifyContent="center" alignItems="center"
                    disableGutters="true" direction="row">

                    <Grid item md={2.5} xs={3}>
                        <Paper elevation={3} className='paper'>
                            <Container className='blog'>
                                <img src={blogPic1} alt="" />
                                <Container className='blog-text'>
                                    <Typography variant='subtitle1' style={{ margin: "0.5rem 0rem 0.5rem 0rem" }}>{leftColTitle}</Typography>
                                    <Typography variant='caption' style={{ margin: "0.5rem 0rem 3rem 0rem" }}>{leftColText}</Typography>
                                </Container>
                            </Container>
                        </Paper>
                    </Grid>

                    <Grid item md={2.5} xs={3}>
                        <Paper elevation={3} className='paper'>
                            <Container className='blog'>
                                <img src={blogPic2} alt="" />
                                <Container className='blog-text'>
                                    <Typography variant='subtitle1' style={{ margin: "0.5rem 0rem 0.5rem 0rem" }}>{leftColTitle}</Typography>
                                    <Typography variant='caption' style={{ margin: "0.5rem 0rem 3rem 0rem" }}>{leftColText}</Typography>
                                </Container>
                            </Container>
                        </Paper>
                    </Grid>

                    <Grid item md={2.5} xs={3}>
                        <Paper elevation={3} className='paper'>
                            <Container className='blog'>
                                <img src={blogPic3} alt="" />
                                <Container className='blog-text'>
                                    <Typography variant='subtitle1' style={{ margin: "0.5rem 0rem 0.5rem 0rem" }}>{leftColTitle}</Typography>
                                    <Typography variant='caption' style={{ margin: "0.5rem 0rem 3rem 0rem" }}>{leftColText}</Typography>
                                </Container>
                            </Container>
                        </Paper>
                    </Grid>

                    <Grid item md={2.5} xs={3}>
                        <Paper elevation={3} className='paper'>
                            <Container className='blog'>
                                <img src={blogPic4} alt="" />
                                <Container className='blog-text'>
                                    <Typography variant='subtitle1' style={{ margin: "0.5rem 0rem 0.5rem 0rem" }}>{leftColTitle}</Typography>
                                    <Typography variant='caption' style={{ margin: "0.5rem 0rem 3rem 0rem" }}>{leftColText}</Typography>
                                </Container>
                            </Container>
                        </Paper>
                    </Grid>

                </Grid>

            </section >

        </div >
    )

}
export default Home