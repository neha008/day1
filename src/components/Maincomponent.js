import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Homepage from './Homepage';


export default class Maincomponent extends React.Component {
    state = {
        options: [],
        selectedOption: undefined,
        enable:false
        
    };


    componentDidMount() {
        try {
        }
        catch (e) {
            //do nothing
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);

        }
    }

    componentWillUnmount() {
        console.log('componentwillunmount');
    }

    handlePick = () => {
        this.setState(() => ({
            selectedOption: option
        }))
    }
    handlePortal = () => {
        this.setState(() => ({
            enable:true
        }))
        console.log("hghgjj");
    }
   
    render() {
        return (
            <div>
            <Navbar/>

<div className="row">
<div className="col-sm-4"><Sidebar handlePick={this.handlePick} handlePortal={this.handlePortal}/></div>
  <div className="col-sm-8"><Homepage/></div>
  
</div>
</div>
         
        )
    }
}


