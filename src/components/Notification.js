import React from 'react';
import '../pages/helping.css';


class Notification extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    tekst:"Календар активности",
                    link:"http://www.matf.bg.ac.rs/files/nnv-374-8-KALENDAR_AKTIVNOSTI_20211.pdf"
                },
            ]
        }
    }

    makeItems = (items) => {
        return items.map(item => {
            return (
                <a href={item.link} target="_blank" class="list-group-item list-group-item-action list-group-item-dark">
                    {item.tekst}
                </a>
            );
        })
    }

    render(){
        return(
            <div  id='rcorners1' class="container">
                <h2 style={{textAlign : 'center'}}>Обавештења</h2>
                <div>
                    {this.makeItems(this.state.items)}  
                </div>
            </div>
        );
    }
}

export default Notification;