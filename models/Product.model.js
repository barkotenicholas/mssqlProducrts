import {poolPromise} from "../databases/sql.config.js";
import mssql from "mssql";

export const getAllProducts = async()=>{

    const pool = await poolPromise
    const rs = await pool.request().execute('spGetAllProducts')
    return rs.recordset;

}
export const getSpecificProduct = async(id)=>{

    const pool = await poolPromise
    const rs = await pool.request()
                .input('id',mssql.VarChar,id)
                .execute('getGetSpecificProduct')
    return rs.recordset[0];
}

export const createOrUpdate = async(product)=>{

    const pool = await poolPromise
    const rs = await pool.request()
                .input('operationp',mssql.VarChar,product.operation)
                .input('id',mssql.VarChar,product.id)
                .input('name',mssql.VarChar,product.names)
                .input('description',mssql.VarChar,product.description)
                .input('price',mssql.Int,product.price)
                .input('imgurl',mssql.VarChar,product.image)
                .input('discount',mssql.Int,product.discounts)
                .execute('spCreateOrUpdateProduct')

    return rs.rowsAffected;            

}

export const softdelete = async(id)=>{

    const pool = await poolPromise
    const rs =  await pool.request()
                .input('id',id)
                .execute('spSoftDelete')
    return rs.rowsAffected
}