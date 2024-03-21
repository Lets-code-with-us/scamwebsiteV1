import multer from "multer"

const storage = multer.diskStorage({
    destination:function (_res,_file,cb){
        cb(null,'public/temp')

    },
    filename:function(_res,file,cb){
        cb(null,file?.fieldname)

    }

})



export const upload = multer({'storage':storage})