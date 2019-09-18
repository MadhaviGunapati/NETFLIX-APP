import React, {useEffect, useState} from 'react'

const MyList=(props) =>{
    //console.log("props",props);
   let [button, setButton] = useState(false);
   let [myIndex, setIndex] = useState(-1);
   let showHideButton=(operator, value)=>{
       // console.log(operator, value);
        setButton(button=operator)
        setIndex(myIndex=value)        
      }
    
    return (
        <div>
            <div className="section-title">
                <h2>My List</h2>
            </div>
            <section className="flex-container p1" id="mySection">
                {
                props.mylist.map((list,index)=>{
                    //console.log("hhh",list);
                    return(
                    <div key={index} style={{width: "130px"}} onMouseEnter={()=>showHideButton(true, list.id)}
                        onMouseLeave={()=>showHideButton(false, list.id)}>
                        <img className="" 
                        src={list.img} 
                        alt={list.title} 
                        title={list.title}
                        />
                        <div className="p1">
                            <h6 className="">{list.title}</h6>
                            {(list.id === myIndex && button)&&<button className="addRemoveButton" value="remove" onClick={()=>props.removeHandler(list, index)}>Remove</button>}
                        </div>
                    </div>
                    )
                })
                }
            </section>
        </div>
    )
}



export default MyList;