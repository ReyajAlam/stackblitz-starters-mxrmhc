import mongoose  from "moongoose"

const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Type.ObjectId,
    ref: 'User',
  }
}, {timestamps: true})

export const todo = mongoose.model("SubTodo",todoSchema)