import Hero from "../components/hero/Hero";
import CompanyDesk from "../components/company/Company";
import Category from "../components/category/Category";
import CTA from "../components/cta/CTA";
import Featured from "../components/featured/Featured";
import Latest from "../components/latestJobs/Latest";

const Landing = () => {
    return (
        <div>
            <Hero />
            <CompanyDesk />
            <Category />
            <CTA />
            <Featured />
            <Latest />
        </div>
    )
}
export default Landing;