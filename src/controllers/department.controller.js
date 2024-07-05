import departmentSchema from '../models/department.model.js';

let departmentAdd = (req, res) => {
    const department = new departmentSchema({
        department_name: req.body.department_name
    });

    department.save()
    .then(d => {
        res.status(200).json({
            msg: "Department added Successfully",
            data: req.body
        });
    })
    .catch(e => {
        res.status(400).json({
            msg: "Department not added Successfully",
            error: e
        });
    });
};

let departmentUpdate = (req, res) => {
    
    let id = req.body._id;

    departmentSchema.findByIdAndUpdate(id, req.body)

    .then(d => {
        res.status(200).json({
            msg: "Department update Successfully",
            data: req.body
        });
    })
    .catch(e => {
        res.status(400).json({
            msg: "Department not update Successfully",
            error: e
        });
    });
};

let departmentGet = (req, res) => {
    
    departmentSchema.find().then(d => {
        res.status(200).json({
            msg:"Department get Successfully",
            data:d
        })
    }).catch(e => {
        res.status(400).json({
            msg: "Department not get Successfully",
            error: e
        })
    })
};

let departmentDelete = (req, res) => {
    
    departmentSchema.deleteOne({
        _id:req.params.departmentId}
    ).then(d => {
        res.status(200).json({
            msg:"Department delete Successfully",
            data:d
        })
    }).catch(e => {
        res.status(400).json({
            msg: "Department not delete Successfully",
            error: e
        })
    })
};

export default { departmentAdd, departmentUpdate, departmentGet, departmentDelete };
