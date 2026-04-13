import Course from './Course';
import html from './assets/img/html.png';
import css from './assets/img/css.png'
import js from './assets/img/js.png'
import useFetch from './useFetch';


function CourseList(){

    
    // const [course,setCourse]=useState(null);
    
     const [course,dummy,error]=useFetch('http://localhost:3000/course');
     
    
    function handleDelete(id)
    {
        console.log(id);
        const newCourse =course.filter((course)=>course.id !=id)
        setCourse(newCourse);
    }
    
    //course.sort((x,y)=>y.price-x.price)

    //const vfmCourses = course.filter((course)=>course.price<200)
    if(!course)
    {
        return(
          <>
            {!error && <p>Loading...</p>}
            {error && <h4>{error}</h4>}
          </>
        );
    }
    const courseList=course.map((course)=><Course key={course.id} name={course.name} 
        description={course.description}  
        img={course.img} 
        price={course.price} 
        rating={course.rating} delete={handleDelete} id={course.id} />)

    return(
       <>
         {courseList}
         <button onClick={()=>{setDummy(false)}}>dummy button</button>
       </>
    );


}

export default CourseList;

// npx json-server --watch data/dummyData.json --port 3000 --static ./data