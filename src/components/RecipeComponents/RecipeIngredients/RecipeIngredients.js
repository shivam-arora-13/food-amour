import React from "react";
import { Card, CardTitle, Container , Row, Col} from 'reactstrap';

const RecipeIngredients = (props)=>{
    return <> { props.ingredients.length > 0 && <div className="RecipeIngredients"><center><h3>Ingredients</h3></center>
        <Container>
            <Row lg="4" md= "3" sm = "2" xs="1">
            {props.ingredients.map((ing, index)=>{
                return <Col key = {index + ing}><Card body className="text-center" className="RecipeIngredient">
                <CardTitle tag="h5" >{ing.charAt(0).toUpperCase() + ing.slice(1)}</CardTitle>
              </Card></Col>  
            })} 
            </Row>
    </Container>
    </div> } </>
}



export default RecipeIngredients;