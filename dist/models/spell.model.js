"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spell = void 0;

const mongoose = require('mongoose');

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
});
spellSchema.index({
  name: 1
}, {
  unique: true
});
const Spell = mongoose.model('spell', spellSchema);
exports.Spell = Spell;