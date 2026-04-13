import { useEffect, useState } from "react";

// import PropTypes from 'prop-types'
function Course(props)
{
   //let puruchase=false;
   const [puruchase,setPuruchase] =useState('false');
   const [discount,setDiscount]=useState(props.price)

   // useEffect(()=>{
   //    console.log("inside course use Effects");
   //    console.log(puruchase);
   // })
   function BuyCourse(amt)
   {
      console.log(props.name,"Purchase with",discount,"% discount")
      setPuruchase('true');
      setDiscount(discount-amt);
      console.log(puruchase);
   }
   // if(props.show == true)
   // {
      return(
         props.name && <div className="card">
            <img src={props.img} />
            <h4>{props.name}</h4>
            <p>{props.price}</p>
            <button onClick={()=>BuyCourse(20)}>BuyNow</button>
            <button onClick={()=>props.delete(props.id)}>Delete</button>
            <p>{puruchase}</p>
         </div>
      );
   // }
   // else{
   //    return(
   //       <div className="card">Course not available</div>
   //    );
   // }
}

// Course.propTypes={
//    name: PropTypes.string,
//    rating: PropTypes.number,
//    show: PropTypes.bool
// }
export default Course;