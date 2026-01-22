
import dbConnect from '../lib/db';
import User from '../lib/models/User';

async function fixMissingRoles() {
    await dbConnect();

    // Find users where role is missing
    const result = await User.updateMany(
        { role: { $exists: false } },
        { $set: { role: 'user' } }
    );

    console.log(`Updated ${result.modifiedCount} users with missing roles to 'user'.`);

    // Log current state
    const users = await User.find({}, 'email role');
    console.log('Current User Roles:', JSON.stringify(users, null, 2));

    process.exit();
}

fixMissingRoles();
