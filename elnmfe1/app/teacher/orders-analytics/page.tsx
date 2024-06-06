'use client'
import React from 'react'
import Heading from '../../../app/utils/Heading';
import OrdersAnalytics from "../../components/Admin/Analytics/OrdersAnalytics";
import DashboardHeader from '../../../app/components/Admin/DashboardHeader';
import TeacherSidebar from '@/app/components/Teacher/sidebar/TeacherSidebar';

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Heading
         title="Elearning - Teacher"
         description="ELearning is a platform for students to learn and get help from teachers"
         keywords="Prograaming,MERN,Redux,Machine Learning"
        />
        <div className="flex">
            <div className="1500px:w-[16%] w-1/5">
                <TeacherSidebar />
            </div>
            <div className="w-[85%]">
               <DashboardHeader />
            </div>
        </div>
    </div>
  )
}

export default page