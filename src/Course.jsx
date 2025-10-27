//import PropTypes from 'PropTypes'
function Course(props)
{
   if(props.show == true)
   {
      return(
         <div className="card">
         <img src={props.img} />
         <h4>{props.name}</h4>
         <p>{props.price}</p>
         <span>{props.rating}</span>
         </div>
      );
   }
   else{
      return(
         <div className="card">Course not available</div>
      );
   }
}

// Course.propTypes={
//    name: PropTypes.string,
//    rating: PropTypes.number,
//    show: PropTypes.bool
// }
export default Course;