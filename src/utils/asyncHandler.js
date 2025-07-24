const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(res, req, next)).
        catch((err) => next(err))
    }
}

export { asyncHandler }



// const asyncHandler = () => {}
// const asyncHandler = (func) => {() => {}}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

// // This is the asyn-await approach
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }
