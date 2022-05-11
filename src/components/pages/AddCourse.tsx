import React from "react";
import { coursesService } from "../../config/service-config";
import courseData from '../../config/courseData.json'
import { getRandomCourse } from "../../util/randomCourse";
import { useDispatch } from "react-redux";
import { addCourse } from "../../redux/actions";
import CourseForm from "../forms/CourseForm";
import { Course } from "../../models/Course";
const AddCourse: React.FC = () =>
{
   const dispatch = useDispatch();
    return <CourseForm submitFn={(course:Course)=> dispatch(addCourse(course))}></CourseForm>
}
export default AddCourse;