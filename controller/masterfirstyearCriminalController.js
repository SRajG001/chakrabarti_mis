const db = require("../connect/Connect");
const FirstyearCriminal = db.FIRSTYEAR_CRIMINALLAW;
const Op = db.Sequelize.Op;

exports.Search=async (req,res)=>{
    try{
        const student = await db.sequelize.query(`SELECT LS.SNAME,IFNULL(FCL.LEGAL_RESEARCH,0),IFNULL(FCL.COMPARATIVE_STUDY,0),IFNULL(FCL.CRIMINAL_LAW,0),IFNULL(FCL.FORENSIC,0),IFNULL(FCL.JUVINAL_JUSTICE,0) 
        FROM llmstudent AS LS join FIRSTYEAR_CRIMINALLAW AS FCL on LS.SID = FCL.SID 
        WHERE LS.PRGID = (:prgid) AND LS.GRPID = (:grpid)`, {
            replacements: {
              prgid: req.query.prgid,
              grpid: req.query.grpid
            },
            type: db.sequelize.QueryTypes.SELECT
          });
    
          res.send(student);
    }
    catch(err){
        res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Student Result."
          });
    }
   
}