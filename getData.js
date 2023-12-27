import Student from '../models/Student.js';

const getAllData = async () => {
    const data = await Student.find().lean()
    console.log(data)
}
const getAllDataSpecificFields = async () => {
    // const data = await Student.find().select('name age')
    // const data = await Student.find().select(['name', 'age','-_id']).lean()
    // const data = await Student.find().select({name:1,age:1}).lean()
    // const data = await Student.find().select({name:1,age:1,_id:0})
    // const data = await Student.find().select('name age -_id')
    const data = await Student.find({}, 'name age -_id')

    console.log(data)
}

const getSingleDocument = async () => {
    // const data = await Student.findOne() // returns first document from a collection
    // const data = await Student.findOne({ name: 'Syed Ammar Hussain' })
    // const data = await Student.findById('658ae8468b8454f46edd90cb')
    // const data = await Student.findById('658ae8468b8454f46edd90cb','name age -_id')
    const data = await Student.findById('658ae8468b8454f46edd90cb', 'name age -_id')
    console.log(data)

}

const getSingleDocumentByField = async () => {
    // const data = await Student.findOne({name : 'Mahbir Nawaz Khan'})
    // const data = await Student.find({age : 25})
    const data = await Student.find({ age: 25 })
    console.log(data)
}

const getLimitedDocuments = async () => {
    // const data = await Student.find().limit(1)
    // const data = await Student.find().skip(1)
    // const data = await Student.find({}, {name: 1, _id:0}, { limit: 1 })
    const data = await Student.find({}, {}, { limit: 1, skip: 2 })
    console.log(data)
}


const countDocuments = async () => {
    const data = await Student.find().countDocuments()
    console.log(data)
}


const getSortedDocumented = async () => {
    // const data = await Student.find().sort({ age: 1 }) //ascending
    const data = await Student.find().sort({ age: -1 }) //descending
    console.log(data)
}

const complexDocument = async () => {
    // const data = await Student.find({ age: {$gt : 25} })
    // const data = await Student.find({ age: {$gte : 25} })
    // const data = await Student.find({ age: {$lt : 25} })
    // const data = await Student.find({ age: {$lte : 25} })
    // const data = await Student.find({ age: {$ne : 25} })
    // const data = await Student.find({ age: { $in: [24,25] } })
    const data = await Student.find({ age: { $nin: [24, 25] } })
    console.log(data)
}

const logicalDocument = async () => {
    // const data = await Student.find({ $and: [{ age: 25 }, { name: 'Syed Umair Hussain' }] })
    // const data = await Student.find({ $or: [{ age: 25 }, { name: 'Syed Umair Hussain' }] })
    // const data = await Student.find({ age: { $not: { $gt: 25 } } })
    const data = await Student.find({ $nor: [{ age: 25 }, { name: 'Syed Umair Hussain' }] })

    console.log(data)
}

export { getAllData, getAllDataSpecificFields, getSingleDocument, getSingleDocumentByField, getLimitedDocuments, countDocuments, getSortedDocumented, complexDocument, logicalDocument }
