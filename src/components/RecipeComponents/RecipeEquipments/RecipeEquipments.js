import React from "react";
import {Container, Row, Col, Card,CardTitle } from 'reactstrap';

const RecipeEquipments = (props)=>{
    return <> { props.equipments.length > 0 && <div className="RecipeEquipments"><center><h3>Equipments</h3></center>
        <Container>
            <Row lg="4" md= "3" sm = "2" xs="1">
        {props.equipments.map((equipment, index)=>{
            return<Col  key = {index + equipment}><Card body className="text-center" className="RecipeEquipment">
            <CardTitle tag="h5">{equipment.charAt(0).toUpperCase() + equipment.slice(1)}</CardTitle>
          </Card></Col>
        })}
        </Row>
        </Container>
    </div>}</>
}

export default RecipeEquipments;