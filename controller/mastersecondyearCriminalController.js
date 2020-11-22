const db = require("../connect/Connect");
const SecondyearCriminal = db.SECONDYEAR_CRIMINALLAW;
const Llmstudent = db.LLMSTUDENT;
const Op = db.Sequelize.Op;

exports.FindAll = async (req, res) => {

  Llmstudent.findAll({
    include: [{
      model: SecondyearCriminal
    }],
    raw: true
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Student."
      });
    });
}

exports.Create = (req, res) => {
  const Criminal = {
    CRIMINOLOGY : req.body.Criminology,
    FAIR_TRAIL : req.body.FairTrail,
    WHITE_COLLAR : req.body.WhiteCollar,
    DISSERTATION : req.body.Dissertation,
    LLMSTUDENTID : req.body.SId
  };

  SecondyearCriminal.create(Criminal)
      .then(data =>  {

        var totalMarks = 0;
        var percent = 0;

        if(data.CRIMINOLOGY != 'I' && data.FAIR_TRAIL != 'I' && data.WHITE_COLLAR != 'I' && data.DISSERTATION != 'I'){
          totalMarks = parseInt(data.CRIMINOLOGY) + parseInt(data.FAIR_TRAIL) + parseInt(data.WHITE_COLLAR) + parseInt(data.DISSERTATION);
          percent = (totalMarks / 400) * 100;
        }
        else if(data.CRIMINOLOGY == 'I' && data.FAIR_TRAIL != 'I' && data.WHITE_COLLAR != 'I' && data.DISSERTATION != 'I'){
          totalMarks = parseInt(data.FAIR_TRAIL) + parseInt(data.WHITE_COLLAR) + parseInt(data.DISSERTATION);
          percent = (totalMarks / 400) * 100;
        }
        else if(data.CRIMINOLOGY == 'I' && data.FAIR_TRAIL == 'I' && data.WHITE_COLLAR != 'I' && data.DISSERTATION != 'I'){
          totalMarks = parseInt(data.WHITE_COLLAR) + parseInt(data.DISSERTATION);
          percent = (totalMarks / 400) * 100;
        }
        else if(data.CRIMINOLOGY == 'I' && data.FAIR_TRAIL == 'I' && data.WHITE_COLLAR == 'I' && data.DISSERTATION != 'I'){
          totalMarks = parseInt(data.DISSERTATION);
          percent = (totalMarks / 400) * 100;
        }
        else if(data.CRIMINOLOGY == 'I' && data.FAIR_TRAIL == 'I' && data.WHITE_COLLAR == 'I' && data.DISSERTATION == 'I'){
          percent = 0;
        }

        Llmstudent.update(
          { PERCENT : percent}, 
          {where : {SID : req.body.SId}}
        )
        .then (data1 => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
              message:
              err.message || "Some error occurred while entering marks."
          });
        });

      })
      .catch(err => {
          res.status(500).send({
              message:
              err.message || "Some error occurred while entering marks."
          });
        })
}

exports.Delete = (req, res) => {
  const id = req.params.Id;

  SecondyearCriminal.findAll({ where: { ID: id }, raw: true })
    .then(data => {
      Llmstudent.update(
        { PERCENT: null },
        { where: { ID: data[0].LLMSTUDENTID } },
      )
        .then(num => {
          if (num == 1) {
            SecondyearCriminal.destroy({
              where: { ID: id }
            })
              .then(num => {
                if (num == 1) {
                  res.send({
                    message: "Student Result was deleted successfully!"
                  });
                } else {
                  res.send({
                    message: `Cannot delete Student Result with id=${id}. Maybe Student was not found!`
                  });
                }
              })
              .catch(err => {
                res.status(500).send({
                  message: "Could not delete Student Result with id=" + id
                });
              });
          } else {
            res.send({
              message: `Cannot update Student with id=${id}. Maybe Student was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Error updating Student with id=" + id
          });
        });
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Student with id=" + id
      });
    });

  

}