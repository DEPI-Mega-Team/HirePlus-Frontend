import DashboardHeader from "@/feature/dashboard/components/dashboardHeader/DashboardHeader";
import JobDescription from "@/feature/jobDescription/pages/JobDescription";

const DashboardJobDescription = () => {

    return (
        <>
            <DashboardHeader title='Job Description'/>
            <JobDescription/>
        </>
    )

}


export default DashboardJobDescription;