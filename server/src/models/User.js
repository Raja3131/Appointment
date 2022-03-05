import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  
})

// isThisEmailExist is a static method that will be available on the User model


//check whether email is already in use or not
//use schema.methods to add a method to the schema
userSchema.statics.isThisEmailExist = async function (email) {
  if (!email) throw new Error('Invalid Email');
  try {
    const user = await this.findOne({ email });
    if (user) return false;

    return true;
  } catch (error) {
    console.log('error inside isThisEmailInUse method', error.message);
    return false;
  }
};
const User = mongoose.model('User', userSchema)


export default User