export type Job = {
    id: string
    charge: string;
    tecnologies: string[];
    description: string;
    business_name: string;
    years_of_experience: number;
    seniority: string | null;
    salary: number;
    created_at: string;
    mail: string | null
    mode: string
};