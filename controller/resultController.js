const db = require("../connect/Connect");

exports.getLLBFirst = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,IFNULL(F.POLITICAL,0),IFNULL(F.ECONOMIC,0),
        IFNULL(F.HISTORY_OF_NEPAL,0),IFNULL(F.SOCOLOGY,0),IFNULL(F.PRINCIPLE_OF_LAW,0),IFNULL(F.CONCEPT_OF_LAW,0),IFNULL(F.LOGIC_LEGAL_REASONING,0),
        IFNULL(F.CLINICAL_WORK,0)
        FROM llbstudent AS LB join FIRSTYEAR AS F on LB.SID = F.SID 
        WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno)`, {
            replacements: {
                prgid: req.query.prgid,
                examno: req.query.examno
            },
            type: db.sequelize.QueryTypes.SELECT
        });

        res.send(student);
    }
    catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Student Result."
        });
    }
}

exports.getLLBSecond = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
        IFNULL(SY.ENGLISH,0),IFNULL(SY.NEPALI,0),IFNULL(SY.INTERNATIONAL_RELATION,0),IFNULL(SY.LEGISLATIVE_PRINCIPLE,0),
        IFNULL(SY.PROCEDURE_LAW,0),IFNULL(SY.SOCOLOGY,0),IFNULL(SY.CRIMINAL_LAW,0),IFNULL(SY.CLINICAL_COURSE,0)
        FROM llbstudent AS LB join SECONDYEAR AS SY on LB.SID = SY.SID 
        WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno)`, {
            replacements: {
                prgid: req.query.prgid,
                examno: req.query.examno
            },
            type: db.sequelize.QueryTypes.SELECT
        });

        res.send(student);
    }
    catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Student Result."
        });
    }
}

exports.getLLBThird = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
        IFNULL(TY.INTERNATIONAL_HUMAN_RIGHT,0),IFNULL(TY.INTERPRETATION,0),IFNULL(TY.LAW_EVIDENCE,0),IFNULL(TY.INTERNATIONAL_LAW,0),
        IFNULL(TY.CONSTITUTIONAL_LAW,0),IFNULL(TY.LEGAL_RESEARCH,0),IFNULL(TY.PROFESSIONAL_ETHICS,0),IFNULL(TY.CLINICAL_LEGAL_EDUCATION,0),IFNULL(TY.CLINICAL_WORK,0)
        FROM llbstudent AS LB join THIRDYEAR AS TY on LB.SID = TY.SID 
        WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno)`, {
            replacements: {
                prgid: req.query.prgid,
                examno: req.query.examno
            },
            type: db.sequelize.QueryTypes.SELECT
        });

        res.send(student);
    }
    catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Student Result."
        });
    }
}

exports.getLLBFourthCriminal = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
        IFNULL(FY.CLINICAL_EDUCATION,0),IFNULL(FY.ADVANCED_JURISPRUDENCE,0),IFNULL(FY.CONTRACT_LAW,0),IFNULL(FY.COMPANY_LAW,0),
        IFNULL(FY.ADMINISTATIVE_LAW,0),IFNULL(FY.CLINICAL_LEGAL_EDUCATION,0),IFNULL(FY.INTERNATIONAL_DISPUTES,0),
        IFNULL(FYC.FORENSIC,0),IFNULL(FYC.CRIMINOLOGY,0)
        FROM llbstudent AS LB join FOURTHYEAR AS FY on LB.SID = FY.SID JOIN FOURTHYEAR_CRIMINAL AS FYC on FYC.FOURTHYEARID = FY.FOURTHYEARID
        WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno) AND LB.GRPID = (:grpid)`, {
            replacements: {
                prgid: req.query.prgid,
                examno: req.query.examno,
                grpid: req.query.grpid
            },
            type: db.sequelize.QueryTypes.SELECT
        });

        res.send(student);
    }
    catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Student Result."
        });
    }
}

exports.getLLBFourthBusiness = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
        IFNULL(FY.CLINICAL_EDUCATION,0),IFNULL(FY.ADVANCED_JURISPRUDENCE,0),IFNULL(FY.CONTRACT_LAW,0),IFNULL(FY.COMPANY_LAW,0),
        IFNULL(FY.ADMINISTATIVE_LAW,0),IFNULL(FY.CLINICAL_LEGAL_EDUCATION,0),IFNULL(FY.INTERNATIONAL_DISPUTES,0),
        IFNULL(FYC.FORENSIC,0),IFNULL(FYC.CRIMINOLOGY,0)
        FROM llbstudent AS LB join FOURTHYEAR AS FY on LB.SID = FY.SID JOIN FOURTHYEAR_CRIMINAL AS FYC on FYC.FOURTHYEARID = FY.FOURTHYEARID
        WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno) AND LB.GRPID = (:grpid)`, {
            replacements: {
                prgid: req.query.prgid,
                examno: req.query.examno,
                grpid: req.query.grpid
            },
            type: db.sequelize.QueryTypes.SELECT
        });

        res.send(student);
    }
    catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Student Result."
        });
    }
}