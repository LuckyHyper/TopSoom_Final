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
                <div>
                { this.props.searchR != null ? <h1 className="product-title">{this.props.searchR}</h1> : ""}
                <div className="cards">
                    {(this.props.codeB != null) ?
                    // if we search with code_bar
                     items.filter(item => item.product_id == this.props.codeB ).map((itemCB) => (
                       <div>
                         {items.filter(itemF => itemF.product_name == itemCB.product_name).map((Res)=>(
                            <Card product_name={Res.product_name} price={Res.price} market_id={Res.market_id} />   
                         ))
                         }
                       </div>)) 
                    // if we search with product name in search_input
                        : (this.props.searchR != null) ?
                             items.filter(item => item.product_name == this.props.searchR ).map((itemC) => (
                            <Card product_name={itemC.product_name} price={itemC.price} market_id={itemC.market_id} />  
                         )) 
                    //else if there is no code_barre or search_input
                        :
                      items.map((item) => (
                        <Card product_name={item.product_name} price={item.price} market_id={item.market_id} />
                    ))
                }
                </div>
                </div>
            );
        }
    }
}
export default Main;
