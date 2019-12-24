const mongoose = require('mongoose')

const spellSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  range: {
    type: String,
    required: true,
    trim: true
  },
  castingtime: {
    type: String,
    required: true,
    trim: true
  },
  components: {
    type: String,
    required: true,
    trim: true
  },
  duration: {
    type: String,
    required: true,
    trim: true
  }
})

spellSchema.index({ name: 1 }, { unique: true })

export const Spell = mongoose.model('spell', spellSchema)
