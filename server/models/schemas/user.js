import mongoose from 'mongoose';

let UserSchema = mongoose.Schema({

	id: { type: String, default: '' },
	firstName: { type: String, default: '' },
	lastName: { type: String, default: '' },
	parserToken: { type: String, default: '' },
	token: { type: String, default: '' }

}, { versionKey: false });

// UserSchema.plugin(mongoosePaginate);

let users = mongoose.model('User', UserSchema);

export default users;
