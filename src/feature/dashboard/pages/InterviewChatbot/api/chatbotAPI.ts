
const CHATBOT_BASE_URL = import.meta.env.VITE_CHATBOT_BASE_URL


const chatbotAPI = () => {
    const fetchHealth = async () => {
        const res = await fetch(`${CHATBOT_BASE_URL}/healthy`, {
            method: 'GET',
            headers: {
                'ngrok-skip-browser-warning': 'true'
            }
        })
        if (res.ok) {
            console.log(res);
            
            return res;
        }
        else
            throw new Error('ERROR WHILE FETCHING /healthy')
    }
    const fetchInitializeInterview = async (job_title: string, candidate_name: string, interview_type: string, number_of_questions: number, skills: string[]) => {
        const body = {
            interview_id:1,job_title, candidate_name, interview_type, number_of_questions, skills
        }
        const res = await fetch(`${CHATBOT_BASE_URL}/init_interview`, {
            method: 'POST',
            headers: {
                'ngrok-skip-browser-warning': 'true',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(body)
            
        })
        if (res.ok) {
            console.log(res);
            return res;
        }
        else
            throw new Error('ERROR WHILE FETCHING /init_interview')
    }

    const fetchNewInterview = async (id: number, prompt: string, job_title: string, candidate_name: string,interview_type:string, number_of_questions: number, skills: string[], messages:string[]) => {
       
        const chat_history = messages
        const interview_properties = {
            job_title,candidate_name, number_of_questions, skills, interview_type

        }
        const body = { 'interview_id': id, 'prompt': prompt, interview_properties, chat_history}

        const res = await fetch(`${CHATBOT_BASE_URL}/chat`, {
            method: 'POST',
            headers: {
                'ngrok-skip-browser-warning': 'true',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)

        })
        if (res.ok) {
            console.log(res);
            return res;
        }
        else
            throw new Error('ERROR WHILE FETCHING /chat')

    }
    return { fetchHealth, fetchInitializeInterview, fetchNewInterview }
}
export default chatbotAPI