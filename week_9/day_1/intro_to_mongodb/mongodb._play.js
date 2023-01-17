use zoo;

// Reading from the db

const id = ObjectId('63c55a38470a423f8c06d6b5');
db.animals.findOne({_id: id})

// Update entry

db.animals.updateOne(
    {_id: ObjectId('63c55a38470a423f8c06d6b6')},
    {$set: {name: "Steve"}}
)

db.animals.findOne({_id: ObjectId('63c55a38470a423f8c06d6b6')})

// Delete entry

db.animals.deleteOne(
    {_id: ObjectId('63c55a38470a423f8c06d6b6')})