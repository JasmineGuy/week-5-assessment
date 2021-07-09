const roleModels =require('./db.json')
let modelId = 4

module.exports = {
    getAllModels: (req, res) => {
        res.status(200).send(roleModels)
      },
      createModel: (req, res) => {
        let { firstName, lastName, reason, imageURL } = req.body
        let newModel = {
            id: modelId,
            firstName, 
            lastName,
            reason,
            imageURL
        }
        roleModels.push(newModel)
        res.status(200).send(roleModels)
        modelId++
      }, 
      deleteModel: (req,res) => {
        let index = roleModels.findIndex(model => model.id === +req.params.id)
        roleModels.splice(index, 1)
        res.status(200).send(roleModels)
      },
      updateModel: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = roleModels.findIndex(model => model.id === +req.params.id)
       
        if(roleModels[index] ==='plus') {
            roleModels[index].votes += 1
        } else if(roleModels[index] === 'minus) {
            roleModels[index].votes -= 1
            res.status(200).send(roleModels)
        }
      }
}