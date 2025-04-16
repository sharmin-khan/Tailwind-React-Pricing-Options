import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataResult = use(marksPromise)
    // console.log(marksDataResult);
    const marksData = marksDataResult.data;


    //data processing for the chart
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.student_id,
            name:studentData.name,
            physics: studentData.marks.physics,
            math: studentData.marks.math
        }
const avg = (student.physics + student.math)/2;
student.avg = avg

        return student;
    })
// console.log(marksChartData);

    return (
        <div>
             <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Student Result Bar Chart</h2>
            <BarChart width={500} height={450} data={marksChartData}> 
            <XAxis dataKey='name'></XAxis>
            <YAxis></YAxis>
            <Bar dataKey="avg" fill='tomato'></Bar>
            <Bar dataKey={'physics'} fill='cyan'></Bar>
            </BarChart>
            
        </div>
    );
};

export default MarksChart;