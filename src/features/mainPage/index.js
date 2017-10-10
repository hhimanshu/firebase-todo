import React from "react";
import base from "../../config/rebase";

export default class ToDos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            textBox: "",
            loading: true
        }
    }

    componentDidMount() {
        this.ref = base.syncState("items", {
            context: this,
            state: "items",
            asArray: true,
            then() {
                this.setState({loading: false});
            }
        })
    }

    handleTextBoxChange = (event) => {
        this.setState({textBox: event.target.value});
    };

    handleAddItem = () => {
        this.setState({
            items: this.state.items.concat([this.state.textBox]),
            textBox: ""
        });
    };

    handleRemoveItem = (index) => {
        let remainingItems = this.state.items;
        remainingItems.splice(index, 1);
        this.setState({items: remainingItems});
    };

    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.state.textBox} onChange={this.handleTextBoxChange}/>
                    <input type="submit" value="Add Item" onClick={this.handleAddItem}/>
                </div>
                <div>{this.state.items.map((item, index) => <Item key={index}
                                                                  index={index}
                                                                  item={item}
                                                                  onDeleteClick={this.handleRemoveItem}/>)}</div>

            </div>
        )
    }
}

const Item = ({index, item, onDeleteClick}) => {
    return <div>
        <input type="button" value="delete" onClick={() => onDeleteClick(index)}/>
        <span>{item}</span>

    </div>
};