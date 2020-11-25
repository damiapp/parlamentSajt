import React from 'react';


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
                <a href={item.link} class="list-group-item list-group-item-action list-group-item-dark">
                    {item.tekst}
                </a>
            );
        })
    }

    render(){
        return(
            <div class="container">
                <h1 class="display-5">Обавештења</h1>
                <div>
                    {this.makeItems(this.state.items)}  
                </div>
            </div>
        );
    }
}

export default Notification;