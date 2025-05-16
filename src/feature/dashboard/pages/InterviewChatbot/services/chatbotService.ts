import chatbotAPI from "../api/chatbotAPI";

const chatbotService = () => {
   const  getHealth = async() => {
        const { fetchHealth } = chatbotAPI()
        const res = await fetchHealth()
        return await res.json()
    }

    const getInterview = async (job_title: string, candidate_name: string, interview_type: string, number_of_questions: number, skills: { value: string, label: string }[], messages: string[]) => {
        const arr = skills.map(skill => {
            return skill.value
        })
        console.log(arr);
        
        const {fetchInitializeInterview} = chatbotAPI();
        const res = await fetchInitializeInterview(job_title,candidate_name,interview_type, number_of_questions, arr)
        return await res.json();
    }

    const getChat = async (id: number, prompt: string, job_title: string, candidate_name: string, interview_type: string, number_of_questions: number, skills: { value: string, label: string }[], messages: string[] ) => {
        const chat_history = messages.map((message, idx) => {
            return {
                message:message, 
                role: idx%2 === 0 ? 'assistant':'user'
            }
        })
        const arr = skills.map(skill => {
            return skill.value
        })
        console.log(arr);
        
        console.log(chat_history);
        
        const {fetchNewInterview} = chatbotAPI();
        const res = await fetchNewInterview(id, prompt, job_title, candidate_name, interview_type, number_of_questions, arr, chat_history);
        return await res.json();
    }
    return { getHealth, getInterview, getChat }
    
}

export default chatbotService ;