import mongoose from 'moongoose';

const todoSchema = new mongoose.Schema({}, { timestamps: true });

export const todo = mongoose.model('Todo', todoSchema);

import mongoose from 'mongoose';

const subtodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createBy: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'User',
    },
    subtodos: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'subtodo',
    },
  },
  { timestamps: true }
);

export const subtodo = mongoose.model('Todo', todoSchema);
