import acronmyModel from "../dbModel/acronmyModel.js";

class AcronmyServices{
    //create acronmy
    static async createAcronmy(req){
        const acronmy = await acronmyModel.create(req.body)
        return acronmy
    }

    // delete by id

    static async deleteAcronmy(req){
        const acronmy = await acronmyModel.deleteOne({_id:req.params.id});
        return acronmy;
    }

    //update by id

    static async updateAcronmy(req){
        await acronmyModel.findByIdAndUpdate({_id:req.params.id}, req.body);
        const acronmy = acronmyModel.findOne({_id:req.params.id});
        return acronmy;

        
    }
    //get one by id
    static async getOneById(req){
        const acronmy = await acronmyModel.findById({_id:req.params.id},req.body);
        return acronmy;
    
    }
    //get all 

   static async getAll(req){
    const acronym = await acronmyModel.find();
    return acronym
   }
}


export default AcronmyServices;