import React,{useState} from 'react';
//import Button from '../components/Button';

 const Recommendations=(props)=> {
     //console.log("r",props.recommendations);
     let [button, setButton]=useState(false);
     let [myIndex, setIndex]=useState(0)
     const showHideButton = (operator, value)=>{
         //console.log(value);
            setButton(button=operator)
            setIndex(myIndex=value)
     }
    return (
        <div>
            <div className="section-title">
                <h2>Recomendatons</h2>
            </div>
            <section className="flex-container p1">
                {
                props.recommendations.map((list,index)=>{
                    return(
                    <div key={list.id} style={{width: "130px"}}
                    onMouseEnter={()=>showHideButton(true, list.id)}
                    onMouseLeave={()=>showHideButton(false, list.id)}>
                        <img src={list.img} alt={list.title} title={list.title}/>
                        <div className="p1">
                            <h6>{list.title}</h6>
                            {(list.id===myIndex && button)&&<button className="addRemoveButton" valuue="add" onClick={()=>props.addHandler(list, index)}>Add</button>}
                        </div>
                    </div>
                    )
                })
                }
            </section>
        </div>
    )
}
export default Recommendations;