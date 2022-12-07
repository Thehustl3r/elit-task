import  Response from "../utils/respond.js"
import AcronmyService from "../services/acronmyService.js";
import acronmyDb from "../dbModel/acronmyModel.js";


class acronmyController{
    //Add Controller

    static async createAcronmy(req,res){
        console.log(req.body)
        if (!req.body.name){
            return Response.errorMessage(res, "Input a name", 400)
        }
        if (!req.body.description){
            return Response.errorMessage(res, "you forget to enter the meaning", 400)
        }
        const exists = await acronmyDb.findOne({name:req.body.name});
        if (exists) {
            return Response.errorMessage(res, "Acronym already exists", 400)
        }
        const acronomy = await AcronmyService.createAcronmy(req);
        console.log(acronomy)
        if(!acronomy){
            return Response.errorMessage(res, "Failed to create", 400)
        }
        return Response.successMessage(
            res,
            "Acronomy Successful Created",
            acronomy,
            200
        )
    }
    //get All acronomy

    static async getAll(req,res){
        const acronomy = await AcronmyService.getAll(req);
        if(!acronomy){
            return Response.errorMessage(res, "Not Found Acronomy", 400);

        }
        return Response.successMessage(
            res,
            "Acronomy Successfully to retrived",
            acronomy,
            200
        );
    }
    //Update

    static async updateAcronmy(req,res){
        const acronomy = await AcronmyService.updateAcronmy(req);

        if(!acronomy){
            return Response.errorMessage(res,"Not Found Acronomy",400);

        }
        return Response.successMessage(
            res,
            "Acronomy Successful to retrived",
            acronomy,
            200
        )
    }

    //getOne by Id

    static async getOneById(req,res){
        const acronomy = await AcronmyService.getOneById(req);

        if(!acronomy){
            return Response.errorMessage(res, "Acronomy Not Found",400)
        }
        return Response.successMessage(
            res,
            "Acronomy Successful to retrieved",
            acronomy,
            200
        )
         
    }

    //Delete 

    static async deleteAcronmy(req,res){
        const acronomy = await AcronmyService.deleteAcronmy(req);
        if(!acronomy){
            return Response.errorMessage(res, "Acronomy Not Found", 400)
        }
        return Response.successMessage(
            res,
            "Deleted acronmy",
            acronomy,
            200
        )
    }


    
}

export default acronmyController;