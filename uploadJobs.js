import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase.js"

// import jobData from "./jobsData.json"

const jobData = require("./jobs.json");

const UploadJobs = async() => {
    const jobsRef = collection(db, "jobs");

    for(const job of jobData){
        try {
            await addDoc(jobsRef, job);
        } catch (error) {
            console.log("error when adding jobs: ",error)
        }
    }
}

UploadJobs()