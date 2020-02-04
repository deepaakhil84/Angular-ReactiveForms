import { Team } from "./team"

export const ALL_TEAMS: Team[] = [
    {
        "teamName": "java Team",
        "teamManager": "yogi",
        "teamDept": {
            "deptHead": "Clare",
            "deptName": "e-commerce",
        },
        "employees": [
            {
                "empId": "101",
                "empName": "Harish",
                "skill": "java"
            },
            {
                "empId": "102",
                "empName": "Mohit",
                "skill": "Angular"

            }
        ]


    },
]
export const ALL_SKILLS = [
    { name: "java", displayName: "java" },
    { name: "Angular", displayName: "Angular" },
    { name: "Dot Net", displayName: "Do Net" },
]