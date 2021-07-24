export interface User {
    admin: boolean,
    age: number,
    email: string,
    firstName: string,
    lastName: string,
    height: number,
    mainWorkoutGoal: string,
    nationality: string,
    userName: string,
    weight: number,
    workoutExperienceLevel: string,
    workoutFrequency: number, 
}

export interface UserLoginValues {
    email: string,
    password: string,
}