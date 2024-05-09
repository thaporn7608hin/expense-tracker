import {ADD_TRANSACTION,DELETE_TRANSACTION} from '../actions/types'

const initialState = {
    transactions:[
        {
            id:1,
            title:"Soup",
            price:30
        },
        {
            id:2,
            title:"Wallet",
            price:-50
        },
        {
            id:3,
            title:"Paypal",
            price:40
        },
        {
            id:4,
            title:"Bank",
            price:-900
        },
        {
            id:5,
            title:"Shopee",
            price:90
        }
    ]
}
export default (state = initialState,{type,payload}) => {
    switch(type){
        case ADD_TRANSACTION:
            return {
                ...state,
               transactions: [payload,...state.transactions]
            }
        case DELETE_TRANSACTION:
            return {
                ...state,
                transactions:state.transactions.filter((transaction) => transaction.id !== payload)
            }
        default:
            return state
    }
}