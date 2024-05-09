import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./types";

export const addTransactions = ({id,title,price}) => dispatch => {
    const newTransaction = {
        id,
        title,
        price:Number(price)
    }
    dispatch({type:ADD_TRANSACTION,payload:newTransaction})
}

export const delelteTransaction = (id) => dispatch => {
    console.log(id)
    dispatch({type:DELETE_TRANSACTION,payload:id})
}