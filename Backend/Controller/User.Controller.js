import User from '../Models/User.asset.js'

//POST API
export const create=async(req,res)=>{
try {
    const userData=new User(req.body);
 

    if(!userData){
       return res.status(404).json({msg:"Data for user not found!"})
    }
    const savedData=await userData.save();
    res.status(200).json(savedData);


} catch (error) {
    res.status(500).json({error:error})
}
}

//GETALL API
export const  getAll=async(req,res)=>{
    try {
        const userData=await User.find();
        if(!userData){
            return res.status(404).json({msg:"Data for user not found!"})
        }
        res.status(200).json(userData);
        } catch (error) {
            res.status(500).json({error:error})
        }
        }

//GET API

export const  getOne=async(req,res)=>{
    try {
        const userExist=await User.findById(req.params.id);
        if(!userExist){
            return res.status(404).json({msg:"Data for user not found!"})
            }
            res.status(200).json(userExist);
            } catch (error) {
                res.status(500).json({error:error})
                }
                }

//UPDATE API

export const   update=async(req,res)=>{
    try {
        const userExist=await User.findByIdAndUpdate(req.params.id,req.body);
        if(!userExist){
            return res.status(404).json({msg:"Data for user not found!"})
            }
            res.status(200).json(userExist);
            } catch (error) {
                res.status(500).json({error:error})
            }
        }

//DELETEONE API

export const deleteOne=async(req,res)=>{
    try {
        const userExist=await User.findByIdAndDelete(req.params.id)
        if(!userExist){
            return res.status(404).json({msg:"User is not available"})
            }
            res.status(200).json({User:"User with this Id has been deleted..."});
    } catch (error) {
        res.status(500).json({error:error})
    }
}
        

//DELETEALL API

export const deleteAll=async(req,res)=>{
    try {
        const userExist=await User.deleteMany();
        if(!userExist){
            return res.status(404).json({msg:"This user doesn't exist here!"})
        }
        res.status(200).json({User:"All users has been deleted successfully... "})
    } catch (error) {
        res.status(500).json({error:error})
    }
}


//UPDATEALL API

export const updateAll=async(req,res)=>{
    try {
        const userExist=await User.updateMany();
        if(!userExist){
            res.status(404).json({msg:"User doesn't exist in the given database!"})
        }
        res.status(200).json({userExist:"All the users updated successfully..."})
    } catch (error) {
        res.status(500).json({error:error});
    }
}