import { Position } from "../model/position.model.js"


const positionController = async (req,res)=>{
   try{

        const positionCreate = new Position(req.body)

        await positionCreate.save()

        res.status(201).json({
            msg:"Position Created Successfully"
        })

   }catch(error){
     res.status(400).json({error});
   }
}


const getPosition = async (req,res)=>{
    try{
 
        const position_get = await Position.findById(req.params.id);

        if (!position_get) {
            return res.status(404).json({
                result:"Position Not Found"
            });
        }
 
         res.status(200).json({
             result:position_get
         })
 
    }catch(error){
      res.status(400).json({error});
    }
 }


 const updatePosition = async (req,res)=>{
    try{
        
        const update_position = await Position.findByIdAndUpdate(req.params.id, req.body);
       
        if (!update_position) {
            return res.status(404).json({
                result:"Position Not Updated"
            });
        }
 
         res.status(200).json({
             result:update_position,
             msg:"Position Updated Successfully"
         })
 
    }catch(error){
      res.status(400).json({error});
    }
 }


 const deletePosition = async (req,res)=>{
    try{

        const delete_position = await Position.findByIdAndDelete(req.params.id);
       
        if (!delete_position) {
            return res.status(404).json({
                result:"Position Not Deleted"
            });
        }
 
         res.status(200).json({
             msg:"Position Deleted Successfully"
         })
 
    }catch(error){
      res.status(400).json({error});
    }
 }

export {positionController,getPosition,updatePosition,deletePosition}