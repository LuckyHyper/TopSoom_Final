import React, { Component } from "react";
import "./Main.css";
import Card from "./card/Card";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }
    async componentDidMount() {
        console.log(this.props.codeB);
        await fetch("http://localhost:8000/api/price")
            .then((res) => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result[0],
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                }
            );
    }
    userExists(codeB) {
        return this.state.items.some(item =>
          item.product_id === codeB
        ); 
      }

    render() {
        const id=0;
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="cards">
                    {this.props.codeB != null ?
        
                     items.filter(item => item.product_id == this.props.codeB ).map((item) => (
                        <Card price={item.price} market_id={item.market_id} />)) 
                        :

                      items.map((item) => (
                        <Card price={item.price} market_id={item.market_id} />
                    ))
                }
                </div>
            );
        }
    }
}
export default Main;
