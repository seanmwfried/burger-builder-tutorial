import React from 'react';
import Hoc from '../../../hoc/hoc/hoc';
import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component{
    componentWillUpdate(){
        console.log("[OrderSummary] Will Update");
    }
    
    render(){
        let ingredientSummary = Object.keys(this.props.ingredients).map((igKey, i) => {
            return <li key={i}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                   </li>
        })
        return(
            <Hoc>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.price}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Hoc>
        );
    }
}

export default OrderSummary;