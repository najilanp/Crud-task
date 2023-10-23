import  {BASE_URL} from './baseURL'
import  {commonAPI} from './commonAPI'

//books
//uploading book
export const uploadBook=async(book)=>{
 return await commonAPI("POST",`${BASE_URL}/books`,book)
}

//get all books
export const getAllBooks=async()=>{
    return await commonAPI("GET",`${BASE_URL}/books`,"")
   }

   //get a single book
export const getABook=async(id)=>{
    return await commonAPI("GET",`${BASE_URL}/books/${id}`,"")
   }

      //delete a single book
export const deleteABook=async(id)=>{
    return await commonAPI("DELETE",`${BASE_URL}/books/${id}`,{})
   }

   //categories
   //add category 
export const addCategory=async(body)=>{
    return await commonAPI("POST",`${BASE_URL}/categories`,body)
   }

   //get all category

   export const getAllCategory=async()=>{
    return await commonAPI("GET",`${BASE_URL}/categories`,"")
   }

//    delete category
export const deleteCategory=async(id)=>{
    return await commonAPI("DELETE",`${BASE_URL}/categories/${id}`,{})
   }