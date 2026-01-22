
import dbConnect from '../lib/db';
import User from '../lib/models/User';

async function checkUsers() {
    await dbConnect();
    const users = await User.find({});
    console.log('Users in DB:', JSON.stringify(users, null, 2));
    process.exit();
}

checkUsers();
