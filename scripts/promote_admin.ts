
import dbConnect from '../lib/db';
import User from '../lib/models/User';

async function promoteAdmin(email: string) {
    await dbConnect();
    const result = await User.findOneAndUpdate(
        { email },
        { role: 'admin' },
        { new: true }
    );

    if (result) {
        console.log(`Successfully promoted ${email} to admin.`);
        console.log('New User Data:', JSON.stringify(result, null, 2));
    } else {
        console.log(`User with email ${email} not found.`);
    }
    process.exit();
}

// Check for command line argument or use default
const email = process.argv[2] || 'rohitmcmt90@gmail.com';
promoteAdmin(email);
