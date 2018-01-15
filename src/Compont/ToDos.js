import React,{Component} from 'react';


class ToDos extends Component{
    constructor(props){
        super(props);
        this.addClick=this.addClick.bind(this);
        this.changeText=this.changeText.bind(this);
        this.removeClick=this.removeClick.bind(this);
        this.state={todoText:"",todoList:["hello"]};
    }
    changeText(e){
        this.setState({todoText:e.target.value});
    }
    addClick(e) {
        e.preventDefault();

        this.setState(function(prevState){
            return prevState.todoList.push(this.state.todoText);
        });
        this.setState({todoText:""});
    }
    removeClick(index){
        this.setState(function (preState) {
            console.log(index);
            return preState.todoList.splice(index,1);
        });

    }
    render(){

        return(
            <div className="todo">
            <input type="text" value={this.state.todoText} onChange={(e)=>this.changeText(e)}/>
            <button onClick={(e) => this.addClick(e)}>添加</button>

                <TodoList todoList={this.state.todoList} remove={this.removeClick}/>
            </div>
        );
    }
}
function TodoList(props){
    return(
        <ul>
            {
            props.todoList.map(function(text,index){
            return (<li  key={index}><i>{text}</i><button data-index={index} onClick={(e)=>removeOne(e)}>X</button></li>);})
            }
        </ul>
    )
    function removeOne(e){
        console.log(e.target.getAttribute("data-index"));
        props.remove(e.target.getAttribute("data-index"));
    }
}
export default  ToDos;