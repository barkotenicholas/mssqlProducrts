import { getAllProducts, getSpecificProduct, createOrUpdate ,softdelete } from "../models/Product.model.js";
import { v4 } from "uuid";

export const getAll = async (req, res) => {

    try {
        const result = await getAllProducts()
        return res.status(200).json({ result: result })
    } catch (error) {
        return res.status(200).json({ result: error.message })

    }
}
export const getSpecific = async (req, res) => {
    const param = req.params.id
    console.log(param);
    try {
        const result = await getSpecificProduct(param)
        if (!result) return res.status(200).json({ message: 'product not found' })

        return res.status(200).json({ result: result })
    } catch (error) {

    }
}

export const create = async (req, res) => {

    try {

        const { name, description, price, url, discount } = req.body;
        const id = v4()

        const product = {
            operation: 'insert',
            id: id,
            names: name,
            description: description,
            price: price,
            image: url,
            discounts: discount
        }
        await createOrUpdate(product)
        return res.status(200).json({ message: 'product created' })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }

}

export const update = async (req, res) => {

    try {

        const id = req.params.id
        const { name, description, price, url, discount } = req.body;
        const product = {
            operation: 'update',
            id: id,
            names: name,
            description: description,
            price: price,
            image: url,
            discounts: discount
        }
        await createOrUpdate(product)
        return res.status(200).json({ message: 'product updated' })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }

}

export const deleteProduct = async (req, res) => {

    try {
        const id = req.params.id;
        await  softdelete(id)
        return res.status(200).json({message:'deleted'})
    } catch (error) {
        return res.status(400).json({message:error.message})

    }

}