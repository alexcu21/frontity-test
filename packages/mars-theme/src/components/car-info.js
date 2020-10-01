import React from "react";
import { connect, styled } from "frontity";

const CarInfoWrapper = styled.div`
    background-color: #cdcdcd;
    padding: 1rem;
`
const CarInforItem = styled.p`
    margin-bottom: 5px;
    margin-top: 5px;
    font-weight:bold;
    color: ${props => props.activated === 'on' ? 'blue' : 'red'};
`

const CarInfo = ({state}) => {

    const data = state.source.get(state.router.link);
    const auto = state.source["autos"][data.id];

    const modelo = auto.acf.modelo;
    const marca = auto.acf.marca;
    const year = auto.acf.year;

    return(
        <CarInfoWrapper>
            <CarInforItem activated="on">Modelo: {modelo}</CarInforItem>
            <CarInforItem activated="off">Marca: {marca}</CarInforItem>
            <CarInforItem activated="off">Anio: {year}</CarInforItem>
        </CarInfoWrapper>
    )
}

export default connect(CarInfo)
