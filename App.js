import React from 'react';
import logo from './logo.svg';
import MyList from "./components/MyList";
import Recommendations from "./components/Recommendations";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
  
    this.state = {
       myList:[],
       recommedations:[]
    }
  };
  componentDidMount(){
    Promise.all([
      fetch("http://localhost:8000/mylist"),
      fetch("http://localhost:8000/recommendations")
    ])
    .then(([res1, res2])=>Promise.all([
      res1.json(),
      res2.json()
    ])
    )
    .then(([res1,res2])=>{
      //console.log("data",res1, res2)
      this.setState({
        myList:res1,
        recommedations: res2
       })
    })
  }
  removeHandler(list, id){     
    //console.log(id);
    let mList = this.state.myList;
    console.log(mList.splice(id,1));
    //console.log(mList);
    this.setState({myList:mList});
  }
  addHandler(list, id){
    console.log(list, id)
    let mList = this.state.myList;
    let mRecommend =this.state.recommedations;
    //console.log(this.state.recommedations);
     mList.push(mRecommend[id]);
     mRecommend.splice(id,1)    
      this.setState({myList:mList, recommedations:mRecommend})    
  }
  
  render() {
    console.log(this.state.myList, this.state.recommedations)
    return (
      <div className="App">
        <header><img src={logo} alt="netflix"/></header>
        <main className="container">
          <MyList 
          mylist={this.state.myList} 
          removeHandler={(list, index)=>this.removeHandler(list, index)} />
          <Recommendations 
          recommendations={this.state.recommedations}
          addHandler={(list, index)=>this.addHandler(list, index)}/>
        </main>
      </div>
    );
  }
}

export default App;
