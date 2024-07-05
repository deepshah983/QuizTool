import { mongoose } from '../db/connection.js'; // Import mongoose from connection.js

let departmentSchema = new mongoose.Schema({
    department_name: {
        type: String,
        required: true,
        min: 4,
        max: 15
    }
}, {
    timestamps: true
});

const Department = mongoose.model('Department', departmentSchema);

export default Department;
