const express = require("express");
const router = express.Router();
const Todo = require("../Schema/TodoSchema");


router
// Get all The Todo
  .get("/", (req, res) => {
    Todo.find({}, (err, data) => {
      if (err) {
        res.status(500).json({
          error: "There Was a Server Side Error",
        });
      } else {
        res.status(200).json({
          Todolist: data,
          message: "Todo Find Successful",
        });
      }
    });
  })

//  Find todo Itwm my text
  .get("/search/:keyword", async(req, res) => {
    const Searchtext = new Todo()
    const data  = await Searchtext.SearchByKeyword(req.params.keyword)
    console.log(req.params)
    res.status(200).json({
        data,
    })
  })

//  find specific todo By id
  .get("/:id", (req, res) => {
    Todo.findById({ _id: req.params.id }, (err, data) => {
      if (err) {
        res.status(500).json({
          error: "There Was a Server Side Error",
        });
      } else {
        res.status(200).json({
          data,
          message: "Todo Find Successful",
        });
      }
    });
  })

  //delete todo by id
.delete('/:id', (req,res)=> {
   Todo.deleteOne({_id:req.params.id},(err) => {
        if (err) {
          res.status(500).json({
            error: "There Was a Server Side Error",
          });
        } else {
          res.status(200).json({
            data,
            message: "Todo Was Deleted",
          });
        }
      } )
})

  
// post new todo  
  .post("/addnew", (req, res) => {
    const newtodo = new Todo(req.body);
    newtodo.save((err) => {
      if (err) {
        res.status(500).json({
          error: "There wAS a SERVERSIDE eRROR",
        });
      } else {
        res.status(200).json({
          message: "Todo Was Inserted Successfully",
        });
      }
    });
  })
  
// update todo
  .put("/:id", (req, res) => {
  
    Todo.updateOne({_id:req.params.id}, {
        $set:{
            title:'ux Design Project'
        }
      },(err) => {
        if (err) {
          res.status(500).json({
            error: "There wAS a SERVERSIDE eRROR",
          });
        } else {
          res.status(200).json({
            message: "Todo Was Updated Successfully",
          });
        }
      })

  })



  

module.exports = router;
