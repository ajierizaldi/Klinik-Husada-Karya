const model = require('../models')

module.exports = {
    list: async (req, res) => {
        try {
            const datas = await model.patient.findAll()

            return res.status(200).json({
                "success": true,
                "error": 0,
                "message": "data successfully listed",
                "data": datas
            })
        } catch (error) {
            return res.status(500).json({
                "success": false,
                "error": error.code,
                "message": error,
                "data": null
            })
        }
    },
    create: async (req, res) => {
        try {
            const data = await model.patient.create(req.body)

            return res.status(200).json({
                "success": true,
                "error": 0,
                "message": "data successfully created",
                "data": data
            })
        } catch (error) {
            return res.status(500).json({
                "success": false,
                "error": error.code,
                "message": error,
                "data": null
            })
        }
    },
    update: async (req, res) => {
        try {
            const data = await model.patient.update({
                name: req.body.name,
                birthdate: req.body.birthdate,
                address: req.body.address,
                treatment_date: req.body.treatment_date,
                anamnesa: req.body.anamnesa,
                diagnosis: req.body.diagnosis,
                therapy: req.body.therapy,
            }, {
                where: {
                    id: req.params.id
                }
            })

            return res.status(200).json({
                "success": true,
                "error": 0,
                "message": "data successfully updated",
                "data": data
            })
        } catch (error) {
            return res.status(500).json({
                "success": false,
                "error": error.code,
                "message": error,
                "data": null
            })
        }
    },
    destroy: async (req, res) => {
        try {
            const data = await model.patient.destroy({
                where: {
                    id: req.params.id
                }
            })

            return res.status(200).json({
                "success": true,
                "error": 0,
                "message": "data successfully deleted",
                "data": data
            })
        } catch (error) {
            return res.status(500).json({
                "success": false,
                "error": error.code,
                "message": error,
                "data": null
            })
        }
    }
}