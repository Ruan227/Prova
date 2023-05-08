import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Galeria = (props) => {

    return (

        <>
            {
                props.titulo &&
            <h2 className='mt-3'>{props.titulo}</h2>
           }
            <Row>

                {props.lista.map(item => (

                    <Col md={1} className='mb-3'>
                       {
                                
                                item[props.foto]
                                ?
                                <Card.Img variant='top' src={'https://image.tmdb.org/t/p/w500/' + item[props.foto]} />
                                :
                                <Card.Img variant='top' src={'https://www.google.com/imgres?imgurl=https%3A%2F%2Fw0.peakpx.com%2Fwallpaper%2F894%2F391%2FHD-wallpaper-404-background-apple-designer-error-humor-logo-not-found-silly.jpg&tbnid=kSgIteT_e5AH8M&vet=12ahUKEwjNj9fzq8v-AhVDtpUCHeF9BZsQMygGegUIARDPAQ..i&imgrefurl=https%3A%2F%2Fwww.peakpx.com%2Fen%2Fhd-wallpaper-desktop-graov&docid=6jRzVJm1xtvHDM&w=800&h=1422&q=imagem%20not%20found%20wallppaer&ved=2ahUKEwjNj9fzq8v-AhVDtpUCHeF9BZsQMygGegUIARDPAQ'} />

                            }
                    </Col>
                ))}
            </Row>

        </>
    )
}

export default Galeria