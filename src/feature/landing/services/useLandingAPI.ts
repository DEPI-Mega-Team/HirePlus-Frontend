import { Job } from "@/shared/types/job"
import { useEffect, useState } from "react"
import { fetchFeaturedJobs, fetchLatestJobs, fetchJobsByCategory } from "../api/landingAPI"

const useLanding = () => {

    const getFeaturedJobs = async () => {
        const data = await fetchFeaturedJobs()
        if(data.ok) {
            if(data.headers.get('Content-Type')?.includes('json')) {
                const json = await data.json() as Job[]
                console.log(json);
                return json
            }
            else
            {
                throw new Error('Failed to fetch featured jobs Data is not json')
            }
        }
        else
        {
            throw new Error('Failed to fetch featured jobs')
        }
    }
    const getLatestJobs = async () => {
        const data = await fetchLatestJobs()
        if(data.ok) {
            if(data.headers.get('Content-Type')?.includes('json')) {
                const json = await data.json() as Job[]
                console.log(json);
                
                return json
            }
            else
            {
                throw new Error('Failed to fetch latest jobs Data is not json')
            }
        }
        else
        {
            throw new Error('Failed to fetch latest jobs')
        }
    }
    const getJobsByCategory = async () => {
        const data = await fetchJobsByCategory()
        if(data.ok) {
            if(data.headers.get('Content-Type')?.includes('json')) {
                const json = await data.json() as Job[]
                console.log(json);
                return json
                
            }
            else
            {
                throw new Error('Failed to fetch jobs by category Data is not json')
            }
        }
        else
        {
            throw new Error('Failed to fetch jobs by category')
        }
    }
    
    return { getFeaturedJobs, getLatestJobs, getJobsByCategory }
}
export default useLanding;
