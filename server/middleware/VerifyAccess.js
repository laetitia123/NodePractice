// const verifyAccess = function(requiredRole){
//     return async(req,res,next)=>{
//         try{
//             const{role:role} = req.user;
//             if(requireRole !==role){
//                 return res.status(403).json({
//                     status:403,
//                     message:"you are noote authorized"
//                 })
//             }
//             return next();
//         }catch(err){
//             console.log(err);
//         }
// }    
// }
// export default verityAccess;