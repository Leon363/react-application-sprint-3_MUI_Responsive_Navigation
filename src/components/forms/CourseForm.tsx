// import React from "react";
// import { Course, createCourse } from "../../models/Course";
// import courseData from "../../config/courseData.json"
// import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
// import { getRandomNumber } from "../../util/random";
// type Props = {
//     submitFn: (course: Course)=> void;
// }
// let courseName: string = "";
// const CourseForm: React.FC<Props> = ({ submitFn }) => {
//     const {courses} = courseData;

// function onSubmit() {
//     const course = createCourse(id: getRandomNumber(100000,999999), courseName,
//     "Yosef", 80, 5000, new Date());
//     submitFn(course);
// }

// function handlerCourse(event:any){
//     courseName = event.target.value;
// }

//     return <form onSubmit={onSubmit}>
//         <Grid container>
//             <Grid item xs={12} sm={6}>
//             <FormControl fullWidth required>
//                 <InputLabel id="course-select-label">Course Name</InputLabel>
//                 <Select
//                     labelId="course-select-label"
//                     id="demo-simple-select"
                    
//                     label="Course Name"
//                     value={"Course Name"}
//                     onChange={(handlerCourse)=> console.log('changed')}
//                 >
//                     <MenuItem value="">NONE</MenuItem>
//                     {getCourseItems(courses)}
//                 </Select>
//                 </FormControl>

//             </Grid>
//             <Grid item xs={4}>
//                 <Button type="submit">Sybmit</Button>
//             </Grid>
//             <Grid item xs={4}>
//                 <Button type="reset">Reset</Button>
//             </Grid>

//         </Grid>
//     </form>
// }
// export default CourseForm;

// function getCourseItems(courses: string[]): React.ReactNode {
//     return courses.map(c=> <MenuItem value={c} key={c}>{c}</MenuItem>);
// }

// import React from "react";
// import { Course, createCourse } from "../../models/Course";
// import courseData from "../../config/courseData.json";
// import { Grid, Select, TextField, FormControl, InputLabel, MenuItem, Button } from "@mui/material";
// import { getRandomNumber } from "../../util/random";
// type Props = {
//     submitFn: (course: Course) => void;
// }
// const initialCourse: Course = createCourse(0, "",
// "",0, 0, new Date());
// const CourseForm: React.FC<Props> = ({ submitFn }) => {
//     const {courses, minHours, maxHours, lectors, minCost, maxCost, minYear, maxYear} = courseData;
//     const [course, setCourse] = React.useState(initialCourse);

// function onSubmit(event: any) {
//     event.preventDefault();
//     console.log(course)
//      submitFn(course);
// }
// function handlerCourse(event: any) {
//    const courseCopy = {...course};
//    courseCopy.name = event.target.value;
//    console.log(courseCopy.name)
//    setCourse(courseCopy);
// }
// function handlerLector(event: any) {
//     const courseCopy = {...course};
//     courseCopy.lecturer = event.target.value;
//     console.log(courseCopy.name)
//     setCourse(courseCopy);
//  }
// function handlerHours(event: any) {
//     const courseCopy = {...course};
//     courseCopy.hours = +event.target.value;
//     setCourse(courseCopy);
// }
// function handlerCost(event: any) {
//     const courseCopy = {...course};
//     courseCopy.cost = event.target.value;
//     setCourse(courseCopy);
// }
// function handlerOpeningDate(event: any) {
//     const courseCopy = {...course};
//     courseCopy.openingDate = event.target.value;
//     setCourse(courseCopy);
// }

//     return <form onSubmit={onSubmit}>
//         <Grid container>
//             <Grid item xs={12} sm={6} >
//                 <FormControl fullWidth required>
//                     <InputLabel id="course-select-label">Course Name</InputLabel>
//                     <Select
//                         labelId="course-select-label"
//                         id="demo-simple-select"
//                         label="Course Name"
//                         value={course.name}
//                         onChange={handlerCourse}
//                     >
//                         <MenuItem value="">None</MenuItem>
//                        {getCourseItems(courses)}
//                     </Select>
//                 </FormControl>
//             </Grid>
//             <Grid item xs={12} sm={6} >
//                 <FormControl fullWidth required>
//                     <InputLabel id="lector-select-label">Lectors</InputLabel>
//                     <Select
//                         labelId="lector-select-label"
//                         id="demo-simple-select"
//                         label="Lectors Name"
//                         value={course.lecturer}
//                         onChange={handlerLector}
//                     >
//                         <MenuItem value="">None</MenuItem>
//                        {getCourseItems(lectors)}
//                     </Select>
//                 </FormControl>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//                 <TextField type="number" label="Hours" fullWidth required value={course.hours || ""} 
//                 onChange={handlerHours}
//                 inputProps={{
                  
//                     min: `${minHours}`,
//                     max: `${maxHours}`
//                   }}/>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//                 <TextField type="number" label="Cost" fullWidth required value={course.cost || ""} 
//                 onChange={handlerCost}
//                 inputProps={{
                  
//                     min: `${minCost}`,
//                     max: `${maxCost}`
//                   }}/> 
//             </Grid>
//             <Grid item xs={12} sm={6}>
//                 <TextField type="date" label="openingDate" fullWidth required value={course.openingDate || ""} 
//                 onChange={handlerOpeningDate}
//                 InputLabelProps = {{shrink:true}}
//                 inputProps={{
                  
//                     min: `${minYear}`,
//                     max: `${maxYear}`
//                   }}/> 
//             </Grid>
             
//             <Grid item xs={5}>
//                 <Button type="submit">Submit</Button>
//             </Grid>
//             <Grid item xs={5}>
//                 <Button type="reset">Reset</Button>
//             </Grid>

            

//         </Grid>
//     </form>
// }
// export default CourseForm;

// function getCourseItems(courses: string[]): React.ReactNode {
//     return courses.map(c => <MenuItem value={c} key={c}>{c}</MenuItem>)
// }

// Грановский

import React from "react";
import { Course, createCourse } from "../../models/Course";
import courseData from "../../config/courseData.json";
import { Grid, Select, TextField, FormControl, InputLabel, MenuItem, Button } from "@mui/material";
import { getRandomNumber } from "../../util/random";
type Props = {
    submitFn: (course: Course) => void;
}
const initialCourse: Course = createCourse(0, "",
"",0, 0, new Date());
const CourseForm: React.FC<Props> = ({ submitFn }) => {
    const {courses, minHours, maxHours, lectors, minCost, maxCost, minYear, maxYear} = courseData;
    const [course, setCourse] = React.useState(initialCourse);

function onSubmit(event: any) {
    event.preventDefault();
    console.log(course)
    submitFn(course);
    document.querySelector('form')?.reset();

}
function handlerCourse(event: any) {
   const courseCopy = {...course};
   courseCopy.name = event.target.value;
   console.log(courseCopy.name)
   setCourse(courseCopy);
}
function handlerLecturer(event: any) {
    const courseCopy = {...course};
    courseCopy.lecturer = event.target.value;
    setCourse(courseCopy);
 }
function handlerHours(event: any) {
    const courseCopy = {...course};
    courseCopy.hours = +event.target.value;
    setCourse(courseCopy);
}
function handlerCost(event: any) {
    const courseCopy = {...course};
    courseCopy.cost = +event.target.value;
    setCourse(courseCopy);
}
function handlerOpeningDate(event: any) {
    const courseCopy = {...course};
    courseCopy.openingDate = new Date(event.target.value);
    setCourse(courseCopy);
}
function onReset() {
    setCourse(initialCourse);
}

    return <form onSubmit={onSubmit} onReset={onReset}>
        <Grid container spacing={{xs: 5, sm: 2, md: 13}} justifyContent="center">
            <Grid item xs={10} sm={5} >
                <FormControl fullWidth required>
                    <InputLabel id="course-select-label">Course Name</InputLabel>
                    <Select
                        labelId="course-select-label"
                        id="demo-simple-select"
                        label="Course Name"
                        value={course.name}
                        onChange={handlerCourse}
                    >
                        <MenuItem value="">None</MenuItem>
                       {getCourseItems(courses)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={10} sm={5} >
                <FormControl fullWidth required>
                    <InputLabel id="course-select-label">Lecturer</InputLabel>
                    <Select
                        labelId="course-select-label"
                        id="demo-simple-select"
                        label="Lecturer"
                        value={course.lecturer}
                        onChange={handlerLecturer}
                    >
                        <MenuItem value="">None</MenuItem>
                       {getCourseItems(lectors)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={10} sm={5}>
                <TextField type="number" label="Hours" fullWidth required  
                onChange={handlerHours} helperText={`enter number of hours in range [${minHours}-${maxHours} ]`}
                inputProps={{
                  
                    min: `${minHours}`,
                    max: `${maxHours}`
                  }}/>
            </Grid>
            <Grid item xs={10} sm={5}>
                <TextField type="number" label="Cost" fullWidth required  
                onChange={handlerCost} helperText={`enter cost in range [${minCost}-${maxCost} ]`}
                inputProps={{
                   
                    min: `${minCost}`,
                    max: `${maxCost}`
                  }}/>
            </Grid>
            <Grid item xs={10} sm={8} >
                        <TextField required label={'Opening Date'} type={'date'} fullWidth
                        onChange={handlerOpeningDate} inputProps={
                            {min: `${minYear}-01-01`,
                             max: `${maxYear}-12-31`}
                        } InputLabelProps={{
                            shrink: true
                        }}/>
                
            </Grid>
            <Grid item xs={10} sm={8} md={6}>
               <Grid container justifyContent={"center"}>
               <Grid item xs={5}>
                <Button type="submit">Submit</Button>
            </Grid>
            <Grid item xs={5}>
                <Button type="reset">Reset</Button>
            </Grid>

               </Grid>

            </Grid>
           


        </Grid>
    </form>
}
export default CourseForm;

function getCourseItems(items: string[]): React.ReactNode {
    return items.map(c => <MenuItem value={c} key={c}>{c}</MenuItem>)
}