
function Course(props)
{
 return(
    <div className="card">
      <img src={props.img} />
     <h4>{props.name}</h4>
     <p>{props.price}</p>
     <p>{props.price}</p>
    </div>
 );
}

export default Course;