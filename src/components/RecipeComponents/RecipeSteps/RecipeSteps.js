import React from "react";
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const RecipeSteps = (props)=>{
    return <> { props.steps.length > 0 && <div className = "RecipeSteps" style={{
    }}><center><h3>Steps</h3></center>
            {props.steps.map((step, index)=>{
                return   <Toast key={step+index} className = "RecipeStep">
                <ToastHeader>
                  Step {index + 1}. 
                </ToastHeader>
                <ToastBody>
                  {step}
                </ToastBody>
              </Toast>
            })} 
    </div>}</>
    //use toast with red badge

}
export default RecipeSteps;