export const errorHandler=(statusCode,message)=>{
    const error=new error();//js constructor used to create a custom error for us
    error.message=message;
    error.statusCode=statusCode
    return error;
}